exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const API_TOKEN = 'EBZGDEHKMQCQPXFXXKGDCFNYGDSODJFLBDLYTNATEJAALOOYVLLASOOPEKZUIQEK';
    const BLOG_ID = '4327861';
    const BASE_URL = 'https://api.metricool.com/v1';

    console.log('🚀 TikTok API wird geladen...');

    const [profileRes, statsRes, postsRes] = await Promise.all([
      fetch(`${BASE_URL}/profile/${BLOG_ID}?token=${API_TOKEN}`),
      fetch(`${BASE_URL}/stats/${BLOG_ID}?token=${API_TOKEN}&period=30`),
      fetch(`${BASE_URL}/posts/${BLOG_ID}?token=${API_TOKEN}&limit=10`)
    ]);

    const [profile, stats, posts] = await Promise.all([
      profileRes.ok ? profileRes.json().catch(e => null) : null,
      statsRes.ok ? statsRes.json().catch(e => null) : null,
      postsRes.ok ? postsRes.json().catch(e => null) : null
    ]);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        profile,
        stats,
        posts,
        success: true,
        lastUpdate: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('❌ API Fehler:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error.message,
        success: false,
        fallback: {
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
