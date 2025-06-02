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
    // Deine Metricool API Credentials
    const API_TOKEN = 'EBZGDEHKMQCQPXFXXKGDCFNYGDSODJFLBDLYTNATEJAALOOYVLLASOOPEKZUIQEK';
    const BLOG_ID = '4327861';
    const USER_ID = '2134068';
    
    const BASE_URL = 'https://api.metricool.com/v1';

    console.log('🚀 Verbinde mit Metricool API...');

    // Alle wichtigen Daten parallel abrufen
    const [profileRes, statsRes, postsRes] = await Promise.all([
      fetch(`${BASE_URL}/profile/${BLOG_ID}?token=${API_TOKEN}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'TikTok-Dashboard/1.0'
        }
      }),
      fetch(`${BASE_URL}/stats/${BLOG_ID}?token=${API_TOKEN}&period=30`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'TikTok-Dashboard/1.0'
        }
      }),
      fetch(`${BASE_URL}/posts/${BLOG_ID}?token=${API_TOKEN}&limit=10&order=desc`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'TikTok-Dashboard/1.0'
        }
      })
    ]);

    // Response Status prüfen
    if (!profileRes.ok) {
      console.error(`Profile API Error: ${profileRes.status} - ${profileRes.statusText}`);
    }
    if (!statsRes.ok) {
      console.error(`Stats API Error: ${statsRes.status} - ${statsRes.statusText}`);
    }
    if (!postsRes.ok) {
      console.error(`Posts API Error: ${postsRes.status} - ${postsRes.statusText}`);
    }

    // JSON Responses parallel parsen
    const [profile, stats, posts] = await Promise.all([
      profileRes.ok ? profileRes.json().catch(e => ({ error: 'Profile JSON parse failed', details: e.message })) : { error: 'Profile request failed' },
      statsRes.ok ? statsRes.json().catch(e => ({ error: 'Stats JSON parse failed', details: e.message })) : { error: 'Stats request failed' },
      postsRes.ok ? postsRes.json().catch(e => ({ error: 'Posts JSON parse failed', details: e.message })) : { error: 'Posts request failed' }
    ]);

    console.log('📊 API Responses:', {
      profile: profile?.error ? profile.error : 'OK',
      stats: stats?.error ? stats.error : 'OK', 
      posts: posts?.error ? posts.error : 'OK'
    });

    // Erfolgreiche Response zusammenstellen
    const responseData = {
      profile: profile?.error ? null : profile,
      stats: stats?.error ? null : stats,
      posts: posts?.error ? null : posts,
      lastUpdate: new Date().toISOString(),
      success: true,
      apiStatus: {
        profile: !profile?.error,
        stats: !stats?.error,
        posts: !posts?.error
      }
    };

    console.log('✅ Metricool API Response erfolgreich');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(responseData)
    };

  } catch (error) {
    console.error('❌ Metricool API Fehler:', error);
    
    // Detaillierte Fehler-Response
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error.message,
        success: false,
        timestamp: new Date().toISOString(),
        fallback: {
          // Fallback-Daten für Dashboard
          followers: 24750,
          avgViews: 18420,
          totalLikes: 156800,
          totalComments: 12340,
          totalShares: 8920,
          avgWatchTime: 68.5,
          posts: [
            { title: "Maja reagiert auf viral TikTok", views: 245000, likes: 18200 },
            { title: "Das war krass! 😱", views: 198000, likes: 15600 },
            { title: "Maja trifft Influencer XY", views: 176000, likes: 13800 },
            { title: "Ich wage es heute...", views: 134000, likes: 11200 },
            { title: "Insights die ihr wissen müsst", views: 112000, likes: 9800 }
          ]
        },
        debugInfo: {
          apiToken: API_TOKEN ? 'Present' : 'Missing',
          blogId: BLOG_ID,
          userId: USER_ID,
          baseUrl: BASE_URL
        }
      })
    };
  }
};