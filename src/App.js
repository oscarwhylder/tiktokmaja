import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({
    followers: 24750,
    avgViews: 18420,
    totalLikes: 156800,
    totalComments: 12340,
    totalShares: 8920,
    avgWatchTime: 68.5,
    postsCount: 89
  });

  const [topVideos] = useState([
    { id: 1, title: "Maja reagiert auf viral TikTok", views: 245000, likes: 18200, comments: 892, shares: 1340 },
    { id: 2, title: "Das war krass! 😱", views: 198000, likes: 15600, comments: 734, shares: 998 },
    { id: 3, title: "Maja trifft Influencer XY", views: 176000, likes: 13800, comments: 645, shares: 876 },
    { id: 4, title: "Ich wage es heute...", views: 134000, likes: 11200, comments: 523, shares: 654 },
    { id: 5, title: "Insights die ihr wissen müsst", views: 112000, likes: 9800, comments: 445, shares: 532 }
  ]);

  const [hashtagData] = useState({
    majareagiert: { videos: 23, totalViews: 892000, totalLikes: 67200 },
    majawagts: { videos: 18, totalViews: 654000, totalLikes: 48900 },
    majatrifft: { videos: 12, totalViews: 445000, totalLikes: 34500 },
    insightmaja: { videos: 15, totalViews: 398000, totalLikes: 28700 }
  });

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: 'white'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const metricStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '15px',
    marginBottom: '20px'
  };

  const smallCardStyle = {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px 0' }}>🎯</h1>
        <h1 style={{ fontSize: '36px', margin: '0 0 10px 0' }}>TikTok Dashboard</h1>
        <h2 style={{ fontSize: '24px', margin: '0', opacity: '0.9' }}>Majanische Gedanken</h2>
        <p style={{ margin: '10px 0', opacity: '0.8' }}>
          Live Analytics • Letztes Update: {new Date().toLocaleString('de-DE')}
        </p>
      </div>

      <div style={gridStyle}>
        {/* Haupt-Metriken */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>📊 Haupt-Metriken</h3>
          <div style={metricStyle}>
            <div style={smallCardStyle}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF0050' }}>
                {data.followers.toLocaleString('de-DE')}
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Follower</div>
            </div>
            <div style={smallCardStyle}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#25F4EE' }}>
                {data.avgViews.toLocaleString('de-DE')}
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Ø Views</div>
            </div>
            <div style={smallCardStyle}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FE2C55' }}>
                {(data.totalLikes / 1000).toFixed(0)}k
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Total Likes</div>
            </div>
            <div style={smallCardStyle}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF6B35' }}>
                {data.avgWatchTime.toFixed(1)}%
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Watch Time</div>
            </div>
          </div>
        </div>

        {/* Top Videos */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>🏆 Top 5 Videos</h3>
          {topVideos.map((video, index) => (
            <div key={video.id} style={{
              ...smallCardStyle,
              marginBottom: '10px',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px' }}>
                  #{index + 1} {video.title}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  👁️ {(video.views / 1000).toFixed(0)}k • ❤️ {(video.likes / 1000).toFixed(1)}k
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hashtag Kategorien */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>#️⃣ Content Kategorien</h3>
          {Object.entries(hashtagData).map(([key, data]) => (
            <div key={key} style={{...smallCardStyle, marginBottom: '10px'}}>
              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                #{key} • {data.videos} Videos
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '12px' }}>
                <span>👁️ {(data.totalViews / 1000).toFixed(0)}k</span>
                <span>❤️ {(data.totalLikes / 1000).toFixed(1)}k</span>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>🚀 Dashboard Status</h3>
          <div style={{...smallCardStyle, backgroundColor: '#e7f3ff'}}>
            <div style={{ fontWeight: 'bold', color: '#0066cc', marginBottom: '10px' }}>
              ✅ Dashboard erfolgreich deployed!
            </div>
            <div style={{ fontSize: '14px', color: '#333' }}>
              • Basis-Setup funktioniert<br/>
              • Bereit für Metricool API Integration<br/>
              • Responsive Design aktiv<br/>
              • Team kann zugreifen
            </div>
          </div>
          
          <div style={{...smallCardStyle, backgroundColor: '#f0f8f0', marginTop: '10px'}}>
            <div style={{ fontWeight: 'bold', color: '#00aa00', marginBottom: '5px' }}>
              Nächste Schritte:
            </div>
            <div style={{ fontSize: '12px', color: '#333' }}>
              1. API Integration hinzufügen<br/>
              2. Live-Daten verbinden<br/>
              3. Erweiterte Features aktivieren
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
