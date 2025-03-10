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

const FUB_API_KEY = process.env.NEXT_PUBLIC_FOLLOWUP_BOSS_API_KEY;
const FUB_API_URL = 'https://api.followupboss.com/v1';

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