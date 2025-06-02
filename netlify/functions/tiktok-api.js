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

  console.log('🚀 API Call gestartet...');

  try {
    const USER_TOKEN = 'EBZGDEHKMQCQPXFXXKGDCFNYGDSODJFLBDLYTNATEJAALOOYVLLASOOPEKZUIQEK';
    const BLOG_ID = '4327861';
    const USER_ID = '2134068';
    
    // 🧪 Teste verschiedene API Endpoints
    const testEndpoints = [
      `https://app.metricool.com/api/admin/simpleProfiles?blogId=${BLOG_ID}&userId=${USER_ID}`,
      `https://app.metricool.com/api/posts?blogId=${BLOG_ID}&userId=${USER_ID}`,
      `https://app.metricool.com/api/metrics?blogId=${BLOG_ID}&userId=${USER_ID}`
    ];

    console.log('🔍 Teste API Endpoints:', testEndpoints);

    // Teste jeden Endpoint einzeln
    for (let i = 0; i < testEndpoints.length; i++) {
      try {
        const response = await fetch(testEndpoints[i], {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'TikTok-Dashboard/1.0',
            'X-Mc-Auth': USER_TOKEN
          }
        });
        
        console.log(`📊 Endpoint ${i + 1} Status: ${response.status} ${response.statusText}`);
        
        if (response.ok) {
          const data = await response.text(); // Erst als Text lesen
          console.log(`✅ Endpoint ${i + 1} Response (erste 200 Zeichen):`, data.substring(0, 200));
          
          try {
            const jsonData = JSON.parse(data);
            console.log(`✅ Endpoint ${i + 1} JSON Keys:`, Object.keys(jsonData));
          } catch (e) {
            console.log(`❌ Endpoint ${i + 1} ist kein gültiges JSON`);
          }
        } else {
          const errorText = await response.text();
          console.log(`❌ Endpoint ${i + 1} Error:`, errorText.substring(0, 200));
        }
      } catch (error) {
        console.log(`💥 Endpoint ${i + 1} Network Error:`, error.message);
      }
    }

    // 🎯 Nur echte API-Daten akzeptieren - KEINE Mock-Daten!
    console.log('🔍 Teste echte Metricool API Endpoints...');
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Metricool API Integration noch nicht funktional',
        debugInfo: {
          message: 'API Tests durchgeführt - siehe Netlify Function Logs',
          userToken: USER_TOKEN ? 'Present' : 'Missing',
          blogId: BLOG_ID,
          userId: USER_ID,
          endpoints: testEndpoints,
          nextSteps: [
            '1. Check Metricool API Documentation',
            '2. Verify API Token Permissions',
            '3. Test API Endpoints manually',
            '4. Update API Integration'
          ]
        },
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('💥 Genereller Fehler:', error);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message,
        fallback: {
          followers: 24750,
          avgViews: 18420,
          totalLikes: 156800,
          totalComments: 12340,
          totalShares: 8920,
          avgWatchTime: 68.5,
          posts: [
            { title: "Maja reagiert auf viral TikTok", views: 245000, likes: 18200, comments: 892, shares: 1340 },
            { title: "Das war krass! 😱", views: 198000, likes: 15600, comments: 734, shares: 998 },
            { title: "Maja trifft Influencer XY", views: 176000, likes: 13800, comments: 645, shares: 876 },
            { title: "Ich wage es heute...", views: 134000, likes: 11200, comments: 523, shares: 654 },
            { title: "Insights die ihr wissen müsst", views: 112000, likes: 9800, comments: 445, shares: 532 }
          ]
        }
      })
    };
  }
};
