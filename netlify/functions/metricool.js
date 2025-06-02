exports.handler = async (event, context) => {
  // CORS Headers für Frontend-Zugriff
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Metricool API Credentials
    const API_TOKEN = 'EBZGDEHKMQCQPXFXXKGDCFNYGDSODJFLBDLYTNATEJAALOOYVLLASOOPEKZUIQEK';
    const BLOG_ID = '4327861';
    const USER_ID = '2134068';
    
    const BASE_URL = 'https://api.metricool.com/v1';

    // API Endpoint je nach Query Parameter
    const { endpoint } = event.queryStringParameters || {};

    let apiUrl;
    let responseData = {};

    switch (endpoint) {
      case 'profile':
        // Account Grunddaten
        apiUrl = `${BASE_URL}/profile/${BLOG_ID}?token=${API_TOKEN}`;
        break;
        
      case 'stats':
        // Haupt-Statistiken
        apiUrl = `${BASE_URL}/stats/${BLOG_ID}?token=${API_TOKEN}&period=30`;
        break;
        
      case 'posts':
        // Letzte Posts/Videos
        apiUrl = `${BASE_URL}/posts/${BLOG_ID}?token=${API_TOKEN}&limit=10&order=desc`;
        break;
        
      case 'engagement':
        // Engagement Metriken
        apiUrl = `${BASE_URL}/engagement/${BLOG_ID}?token=${API_TOKEN}&period=30`;
        break;
        
      default:
        // Alle Daten auf einmal für Dashboard
        const [profileRes, statsRes, postsRes] = await Promise.all([
          fetch(`${BASE_URL}/profile/${BLOG_ID}?token=${API_TOKEN}`),
          fetch(`${BASE_URL}/stats/${BLOG_ID}?token=${API_TOKEN}&period=30`),
          fetch(`${BASE_URL}/posts/${BLOG_ID}?token=${API_TOKEN}&limit=5&order=desc`)
        ]);

        const [profile, stats, posts] = await Promise.all([
          profileRes.json(),
          statsRes.json(), 
          postsRes.json()
        ]);

        // Daten für Dashboard zusammenstellen
        responseData = {
          profile: profile,
          stats: stats,
          posts: posts,
          lastUpdate: new Date().toISOString(),
          success: true
        };

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(responseData)
        };
    }

    // Einzelner API Call
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Metricool API Error: ${response.status} - ${data.message || 'Unknown error'}`);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        data: data,
        endpoint: endpoint,
        lastUpdate: new Date().toISOString(),
        success: true
      })
    };

  } catch (error) {
    console.error('API Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error.message,
        success: false,
        fallback: {
          // Fallback Daten falls API nicht erreichbar
          followers: 24750,
          avgViews: 18420,
          totalLikes: 156800,
          posts: [
            { title: "Maja reagiert auf viral TikTok", views: 245000, likes: 18200 },
            { title: "Das war krass! 😱", views: 198000, likes: 15600 }
          ]
        }
      })
    };
  }
};