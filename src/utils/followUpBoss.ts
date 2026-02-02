interface FUBPerson {
  firstName?: string;
  lastName?: string;
  emails: { value: string; type: string }[];
  source: string;
  type: string;
  stage?: string;
  systemTags?: string[];
  tags?: string[];
}

const FUB_API_URL = 'https://api.followupboss.com/v1';

function getFUBApiKey(): string {
  return (process.env.FOLLOWUP_BOSS_API_KEY || process.env.CRM_API_KEY || process.env.NEXT_PUBLIC_FOLLOWUP_BOSS_API_KEY || '') as string;
}
const FUB_API_KEY = getFUBApiKey();

export async function createFUBLead(email: string, source: string = 'Website Newsletter', tags: string[] = []) {
  if (!FUB_API_KEY) {
    console.error('Follow Up Boss API key not configured');
    return null;
  }

  const person: FUBPerson = {
    emails: [{ value: email, type: 'primary' }],
    source,
    type: 'prospect',
    stage: 'New',
    systemTags: ['Website Lead'],
    tags
  };

  try {
    const response = await fetch(`${FUB_API_URL}/people`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
    });

    if (!response.ok) {
      throw new Error(`Failed to create lead: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating Follow Up Boss lead:', error);
    return null;
  }
}

export interface ContactLeadData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  interest?: string;
  preferredTime?: string;
}

export async function createFUBContactLead(data: ContactLeadData) {
  const apiKey = getFUBApiKey();
  if (!apiKey) {
    console.error('Follow Up Boss API key not configured');
    return null;
  }
  const nameParts = data.name.trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';
  const tags = ['Contact Form', 'Appointment Request', data.interest || 'General'].filter(Boolean);
  if (data.preferredTime) tags.push(`Pref: ${data.preferredTime}`);
  const person = {
    firstName,
    lastName,
    emails: [{ value: data.email, type: 'primary' as const }],
    phones: data.phone ? [{ value: data.phone, type: 'mobile' as const }] : [],
    source: 'Website - Contact',
    type: 'prospect',
    stage: 'New',
    systemTags: ['Website Lead'],
    tags
  };
  try {
    const response = await fetch(`${FUB_API_URL}/people`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`FUB API error: ${response.status} ${text}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating contact lead:', error);
    return null;
  }
}

export async function addFUBEvent(personId: string, eventType: string, eventData: any) {
  if (!FUB_API_KEY) {
    console.error('Follow Up Boss API key not configured');
    return null;
  }

  try {
    const response = await fetch(`${FUB_API_URL}/events`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personId,
        type: eventType,
        data: eventData
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to create event: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating Follow Up Boss event:', error);
    return null;
  }
} 