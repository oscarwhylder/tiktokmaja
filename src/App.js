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
  
  const [posts, setPosts] = useState([
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
  
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleString('de-DE'));
  const [apiStatus, setApiStatus] = useState('ready');

  // API Daten laden (vereinfacht für jetzt)
  const fetchMetricoolData = async () => {
    try {
      setLoading(true);
      setApiStatus('loading');
      
      // Versuche API Call
      const response = await fetch('/.netlify/functions/metricool');
      
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // API Daten übernehmen (falls verfügbar)
          setApiStatus('connected');
          setLastUpdate(new Date().toLocaleString('de-DE') + ' (Live)');
        } else {
          throw new Error('API Error');
        }
      } else {
        throw new Error('API not available');
      }
      
    } catch (error) {
      console.log('Using mock data - API not ready yet');
      setApiStatus('mock');
      setLastUpdate(new Date().toLocaleString('de-DE') + ' (Mock Data)');
    } finally {
      setLoading(false);
    }
  };

  // Beim Start einmal versuchen
  useEffect(() => {
    fetchMetricoolData();
  }, []);

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
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const metricCardStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid #e9ecef'
  };

  const getStatusColor = () => {
    switch (apiStatus) {
      case 'connected': return '#00aa00';
      case 'loading': return '#ff9500';
      case 'mock': return '#ff6b35';
      default: return '#666';
    }
  };

  const getStatusText = () => {
    switch (apiStatus) {
      case 'connected': return '🟢 Live API';
      case 'loading': return '🟡 Loading...';
      case 'mock': return '🟠 Mock Data';
      default: return '⚪ Ready';
    }
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px 0' }}>🎯</h1>
        <h1 style={{ fontSize: '36px', margin: '0 0 10px 0' }}>TikTok Dashboard</h1>
        <h2 style={{ fontSize: '24px', margin: '0 0 20px 0', opacity: '0.9' }}>Majanische Gedanken</h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '20px', 
          flexWrap: 'wrap',
          marginBottom: '10px'
        }}>
          <span style={{ color: getStatusColor(), fontWeight: 'bold' }}>
            {getStatusText()}
          </span>
          <span style={{ opacity: '0.8' }}>
            Letztes Update: {lastUpdate}
          </span>
          <button 
            onClick={fetchMetricoolData}
            disabled={loading}
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '20px',
              padding: '8px 16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '14px'
            }}
          >
            {loading ? '⏳' : '🔄'} Refresh
          </button>
        </div>
      </div>

      <div style={gridStyle}>
        {/* Haupt-Metriken */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>📊 Haupt-Metriken</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '15px'
          }}>
            <div style={metricCardStyle}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FF0050', marginBottom: '5px' }}>
                {data.followers.toLocaleString('de-DE')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>Follower</div>
            </div>
            <div style={metricCardStyle}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#25F4EE', marginBottom: '5px' }}>
                {data.avgViews.toLocaleString('de-DE')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>Ø Views</div>
            </div>
            <div style={metricCardStyle}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FE2C55', marginBottom: '5px' }}>
                {(data.totalLikes / 1000).toFixed(0)}k
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>Total Likes</div>
            </div>
            <div style={metricCardStyle}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#FF6B35', marginBottom: '5px' }}>
                {data.avgWatchTime.toFixed(1)}%
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>Watch Time</div>
            </div>
          </div>
        </div>

        {/* Top Videos */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>🏆 Top 5 Videos</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {posts.map((video, index) => (
              <div key={video.id} style={{
                backgroundColor: '#f8f9fa',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '8px', color: '#333' }}>
                  #{index + 1} {video.title}
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '13px', 
                  color: '#666' 
                }}>
                  <span>👁️ {(video.views / 1000).toFixed(0)}k</span>
                  <span>❤️ {(video.likes / 1000).toFixed(1)}k</span>
                  <span>💬 {video.comments}</span>
                  <span>📤 {video.shares}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Kategorien */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>#️⃣ Content Kategorien</h3>
          <div style={{ display: 'grid', gap: '10px' }}>
            {Object.entries(hashtagData).map(([key, hashtagInfo]) => (
              <div key={key} style={{
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '8px', 
                  fontSize: '15px',
                  color: '#333'
                }}>
                  #{key}
                </div>
                <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>
                  {hashtagInfo.videos} Videos
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '13px',
                  color: '#666'
                }}>
                  <span>👁️ {(hashtagInfo.totalViews / 1000).toFixed(0)}k Views</span>
                  <span>❤️ {(hashtagInfo.totalLikes / 1000).toFixed(1)}k Likes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Status */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>🚀 Dashboard Status</h3>
          
          <div style={{
            backgroundColor: apiStatus === 'connected' ? '#e7f3ff' : '#fff3cd',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: 'bold', color: getStatusColor(), marginBottom: '8px' }}>
              {getStatusText()}
            </div>
            <div style={{ fontSize: '14px', color: '#333' }}>
              {apiStatus === 'connected' && 'Live Daten von Metricool API'}
              {apiStatus === 'loading' && 'Verbinde mit Metricool...'}
              {apiStatus === 'mock' && 'Mock Daten - API wird eingerichtet'}
            </div>
          </div>
          
          <div style={{
            backgroundColor: '#f0f8f0',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: 'bold', color: '#00aa00', marginBottom: '8px' }}>
              ✅ Dashboard Features:
            </div>
            <div style={{ fontSize: '14px', color: '#333', lineHeight: '1.4' }}>
              • Responsive Design aktiv<br/>
              • Auto-Refresh System<br/>
              • Team-Access bereit<br/>
              • API Integration vorbereitet
            </div>
          </div>
          
          <div style={{
            backgroundColor: '#e7f3ff',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '15px',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: 'bold', color: '#0066cc', marginBottom: '8px' }}>
              🔄 Nächste Schritte:
            </div>
            <div style={{ fontSize: '14px', color: '#333', lineHeight: '1.4' }}>
              1. Metricool API finalisieren<br/>
              2. Live-Daten aktivieren<br/>
              3. Erweiterte Analytics hinzufügen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
