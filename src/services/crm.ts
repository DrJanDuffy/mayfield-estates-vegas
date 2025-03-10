interface LeadData {
  name: string;
  email: string;
  phone?: string;
  neighborhood: string;
  buyingTimeline?: string;
  preApproved?: boolean;
  notes?: string;
}

class CRMService {
  private static instance: CRMService;
  private readonly baseUrl: string = 'https://api.followupboss.com/v1';
  private readonly apiKey: string;
  private rateLimitQueue: Map<string, number> = new Map();
  private readonly RATE_LIMIT_WINDOW = 1000; // 1 second

  private constructor() {
    this.apiKey = process.env.CRM_API_KEY || '';
  }

  public static getInstance(): CRMService {
    if (!CRMService.instance) {
      CRMService.instance = new CRMService();
    }
    return CRMService.instance;
  }

  private async checkRateLimit(endpoint: string): Promise<void> {
    const now = Date.now();
    const lastCall = this.rateLimitQueue.get(endpoint) || 0;
    
    if (now - lastCall < this.RATE_LIMIT_WINDOW) {
      await new Promise(resolve => setTimeout(resolve, this.RATE_LIMIT_WINDOW));
    }
    
    this.rateLimitQueue.set(endpoint, now);
  }

  private async makeRequest(endpoint: string, options: RequestInit, retries = 3): Promise<Response> {
    await this.checkRateLimit(endpoint);
    
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(this.apiKey + ':').toString('base64')}`,
          ...options.headers,
        },
      });

      if (response.status === 429 && retries > 0) { // Rate limit exceeded
        const retryAfter = parseInt(response.headers.get('Retry-After') || '5');
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        return this.makeRequest(endpoint, options, retries - 1);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this.makeRequest(endpoint, options, retries - 1);
      }
      throw error;
    }
  }

  async submitLead(data: LeadData): Promise<{ success: boolean; message: string }> {
    try {
      const response = await this.makeRequest('/people', {
        method: 'POST',
        body: JSON.stringify({
          firstName: data.name.split(' ')[0],
          lastName: data.name.split(' ').slice(1).join(' '),
          emails: [{ value: data.email }],
          phones: data.phone ? [{ value: data.phone }] : [],
          source: 'Website - Neighborhood Explorer',
          stage: 'New',
          tags: ['Neighborhood Interest', data.neighborhood],
          customFields: {
            neighborhood: data.neighborhood,
            buyingTimeline: data.buyingTimeline || 'Not Specified',
            preApproved: data.preApproved ? 'Yes' : 'No',
            notes: data.notes || ''
          }
        })
      });

      const result = await response.json();
      
      return {
        success: true,
        message: 'Lead successfully submitted',
      };
    } catch (error) {
      console.error('Error submitting lead:', error);
      return {
        success: false,
        message: 'Failed to submit lead. Please try again later.',
      };
    }
  }

  async trackNeighborhoodView(neighborhood: string): Promise<void> {
    try {
      await this.makeRequest('/events', {
        method: 'POST',
        body: JSON.stringify({
          type: 'Neighborhood View',
          data: {
            neighborhood,
            timestamp: new Date().toISOString()
          }
        })
      });
    } catch (error) {
      console.error('Error tracking neighborhood view:', error);
    }
  }
}

export const crmService = CRMService.getInstance(); 