import React, { useState, useEffect } from 'react';

// Lucide React Icons (inline SVG components)
const Users = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Eye = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Heart = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const MessageCircle = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const Share2 = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

const Clock = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const TrendingUp = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
    <polyline points="16,7 22,7 22,13"/>
  </svg>
);

const Play = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const Calendar = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const Hash = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" y1="9" x2="20" y2="9"/>
    <line x1="4" y1="15" x2="20" y2="15"/>
    <line x1="10" y1="3" x2="8" y2="21"/>
    <line x1="16" y1="3" x2="14" y2="21"/>
  </svg>
);

const TikTokDashboard = () => {
  const [data, setData] = useState({
    followers: 24750,
    avgViews: 18420,
    totalLikes: 156800,
    totalComments: 12340,
    totalShares: 8920,
    avgWatchTime: 68.5,
    videoDuration: 45.2,
    avgWatchTimeSeconds: 31.0,
    postsCount: 89,
    lastUpdate: new Date().toISOString()
  });

  const [topVideos, setTopVideos] = useState([
    { id: 1, title: "Maja reagiert auf viral TikTok", views: 245000, likes: 18200, comments: 892, shares: 1340 },
    { id: 2, title: "Das war krass! 😱", views: 198000, likes: 15600, comments: 734, shares: 998 },
    { id: 3, title: "Maja trifft Influencer XY", views: 176000, likes: 13800, comments: 645, shares: 876 },
    { id: 4, title: "Ich wage es heute...", views: 134000, likes: 11200, comments: 523, shares: 654 },
    { id: 5, title: "Insights die ihr wissen müsst", views: 112000, likes: 9800, comments: 445, shares: 532 }
  ]);

  const [hashtagData, setHashtagData] = useState({
    majareagiert: { videos: 23, totalViews: 892000, totalLikes: 67200, totalComments: 3800, totalShares: 5100 },
    majawagts: { videos: 18, totalViews: 654000, totalLikes: 48900, totalComments: 2800, totalShares: 3900 },
    majatrifft: { videos: 12, totalViews: 445000, totalLikes: 34500, totalComments: 1900, totalShares: 2600 },
    insightmaja: { videos: 15, totalViews: 398000, totalLikes: 28700, totalComments: 1650, totalShares: 2180 }
  });

  const [loading, setLoading] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [showCustomDate, setShowCustomDate] = useState(false);
  const [customDateRange, setCustomDateRange] = useState({
    startDate: '',
    endDate: ''
  });
  const [apiError, setApiError] = useState(null);
  const [hasRealData, setHasRealData] = useState(false);

  const fetchMetricoolData = async (customDates = null) => {
    setLoading(true);
    setApiError(null);
    
    try {
      // API URL mit Custom Dates (falls vorhanden)
      let apiUrl = '/.netlify/functions/tiktok-api';
      if (customDates && customDates.startDate && customDates.endDate) {
        apiUrl += `?startDate=${customDates.startDate}&endDate=${customDates.endDate}`;
        console.log('📅 Custom Date Range:', customDates);
      }
      
      console.log('🚀 Lade echte Daten von:', apiUrl);
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('📊 API Response:', result);
      
      // NUR echte API Daten akzeptieren
      if (result.success && result.profile && result.stats && result.dataSource !== 'mock_with_realistic_values') {
        console.log('✅ Echte Metricool-Daten erhalten!');
        setHasRealData(true);
        
        // Echte API Daten verarbeiten
        setData(prevData => ({
          ...prevData,
          followers: result.profile.followers,
          avgViews: Math.round(result.stats.avg_views),
          totalLikes: result.stats.total_likes,
          totalComments: result.stats.total_comments,
          totalShares: result.stats.total_shares,
          avgWatchTime: result.stats.avg_watch_time,
          postsCount: result.posts?.length || prevData.postsCount,
          lastUpdate: new Date().toISOString()
        }));
        
        // Top Videos von API aktualisieren
        if (result.posts && result.posts.length > 0) {
          const apiVideos = result.posts.slice(0, 5).map((post, index) => ({
            id: post.id || index + 1,
            title: post.title,
            views: post.views,
            likes: post.likes,
            comments: post.comments,
            shares: post.shares
          }));
          setTopVideos(apiVideos);
        }
        
        setApiError(null);
      } else {
        // API gibt keine echten Daten zurück
        setHasRealData(false);
        throw new Error(
          result.debugInfo 
            ? `Metricool API Verbindung fehlgeschlagen. Debug: ${JSON.stringify(result.debugInfo)}`
            : 'Keine echten Daten von Metricool API erhalten'
        );
      }
      
    } catch (error) {
      console.error('❌ API Fehler:', error);
      setHasRealData(false);
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCustomDateSubmit = () => {
    if (customDateRange.startDate && customDateRange.endDate) {
      console.log('📅 Lade Custom Date Range:', customDateRange);
      fetchMetricoolData(customDateRange);
    } else {
      alert('Bitte wähle Start- und Enddatum aus!');
    }
  };

  const MetricCard = ({ icon: Icon, label, value, color, iconBg }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      border: `3px solid ${color}`,
      borderLeft: `6px solid ${color}`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '12px'
        }}>
          <Icon size={18} color={color} />
        </div>
        <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>{label}</span>
      </div>
      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
        {typeof value === 'number' ? value.toLocaleString('de-DE') : value}
      </div>
    </div>
  );

  const VideoRankCard = ({ video, rank }) => {
    const getRankColor = (rank) => {
      switch(rank) {
        case 1: return '#FF4757';
        case 2: return '#FF6B35';
        case 3: return '#FF8C42';
        case 4: return '#FFA726';
        case 5: return '#FFB74D';
        default: return '#FF4757';
      }
    };

    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: getRankColor(rank),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>#{rank}</span>
          </div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#333', margin: 0, flex: 1 }}>
            {video.title}
          </h4>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', textAlign: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
              <Eye size={14} color="#666" />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
              {(video.views / 1000).toFixed(0)}k
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
              <Heart size={14} color="#FF4757" />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
              {(video.likes / 1000).toFixed(1)}k
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
              <MessageCircle size={14} color="#3B82F6" />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
              {video.comments}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
              <Share2 size={14} color="#10B981" />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
              {video.shares}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HashtagCategoryCard = ({ title, hashtag, data, color, textColor, bgColor }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '12px'
        }}>
          <Hash size={20} color={color} />
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', margin: 0 }}>{title}</h3>
          <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{hashtag} • {data.videos} Videos</p>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>Views</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: 0 }}>
            {(data.totalViews / 1000).toFixed(0)}k
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>Likes</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: 0 }}>
            {(data.totalLikes / 1000).toFixed(1)}k
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>Comments</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: 0 }}>
            {(data.totalComments / 1000).toFixed(1)}k
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>Shares</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: 0 }}>
            {(data.totalShares / 1000).toFixed(1)}k
          </p>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid #F1F5F9', 
        paddingTop: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '14px', color: '#666' }}>Ø Views pro Video</span>
        <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
          {(data.totalViews / data.videos / 1000).toFixed(1)}k
        </span>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F8FAFC',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #FF4757, #FF6B35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px'
            }}>
              <Play size={24} color="white" />
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
              TikTok Analytics
            </h1>
          </div>
          <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>
            Powered by Metricool API • Letztes Update: {new Date(data.lastUpdate).toLocaleString('de-DE')}
          </p>
        </div>

        {/* Zeitraum Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {['24h', '7d', '30d', '90d'].map(period => (
            <button
              key={period}
              onClick={() => {
              setSelectedPeriod(period);
              setShowCustomDate(false);
            }}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedPeriod === period ? '#FF4757' : 'white',
                color: selectedPeriod === period ? 'white' : '#64748B',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {period}
            </button>
          ))}
          <button
            onClick={() => setShowCustomDate(!showCustomDate)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: showCustomDate ? '#FF4757' : 'white',
              color: showCustomDate ? 'white' : '#64748B',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Calendar size={16} style={{ marginRight: '6px' }} />
            Custom
          </button>
          
          {showCustomDate && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              backgroundColor: 'white',
              padding: '8px 12px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <input
                type="date"
                value={customDateRange.startDate}
                onChange={(e) => setCustomDateRange({...customDateRange, startDate: e.target.value})}
                style={{
                  padding: '4px 8px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#334155'
                }}
              />
              <span style={{ color: '#64748B', fontSize: '12px' }}>bis</span>
              <input
                type="date"
                value={customDateRange.endDate}
                onChange={(e) => setCustomDateRange({...customDateRange, endDate: e.target.value})}
                style={{
                  padding: '4px 8px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#334155'
                }}
              />
              <button
                onClick={handleCustomDateSubmit}
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: '#FF4757',
                  color: 'white'
                }}
              >
                Laden
              </button>
            </div>
          )}
          
          <button
            onClick={fetchMetricoolData}
            disabled={loading}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              backgroundColor: 'white',
              color: '#64748B',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto',
              opacity: loading ? 0.6 : 1
            }}
          >
            <TrendingUp size={16} style={{ marginRight: '6px' }} />
            {loading ? 'Aktualisiert...' : 'Daten aktualisieren'}
          </button>
        </div>

        {/* Hauptmetriken */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <MetricCard
            icon={Users}
            label="Gesamt Follower"
            value={data.followers}
            color="#FF4757"
            iconBg="#FFF1F2"
          />
          <MetricCard
            icon={Eye}
            label="Ø Views pro Video"
            value={data.avgViews}
            color="#06B6D4"
            iconBg="#F0F9FF"
          />
          <MetricCard
            icon={Play}
            label="Videos veröffentlicht"
            value={data.postsCount}
            color="#FF4757"
            iconBg="#FFF1F2"
          />
          <MetricCard
            icon={TrendingUp}
            label="Engagement Rate"
            value={((data.totalLikes + data.totalComments + data.totalShares) / (data.avgViews * data.postsCount) * 100).toFixed(1) + '%'}
            color="#F59E0B"
            iconBg="#FFFBEB"
          />
        </div>

        {/* Wiedergabezeit Analyse */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1E293B',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            margin: 0
          }}>
            <Clock size={20} color="#FF4757" style={{ marginRight: '8px' }} />
            Wiedergabezeit Analyse
          </h2>
          
          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', color: '#64748B' }}>Durchschnittliche Wiedergabezeit</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#1E293B' }}>{data.avgWatchTime.toFixed(1)}%</span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#E2E8F0', borderRadius: '8px', height: '12px', marginBottom: '16px' }}>
              <div style={{
                width: `${Math.min(100, data.avgWatchTime)}%`,
                height: '12px',
                background: 'linear-gradient(90deg, #FF4757, #FF6B35)',
                borderRadius: '8px',
                transition: 'width 0.5s ease'
              }}></div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 4px 0' }}>Ø Wiedergabezeit</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
                  {data.avgWatchTimeSeconds.toFixed(1)}s
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 4px 0' }}>Ø Video Länge</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
                  {data.videoDuration.toFixed(1)}s
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Videos */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1E293B',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            margin: 0
          }}>
            <TrendingUp size={24} color="#FF4757" style={{ marginRight: '8px' }} />
            Top 5 Videos
          </h2>
          <div style={{ marginTop: '16px' }}>
            {topVideos.map((video, index) => (
              <VideoRankCard key={video.id} video={video} rank={index + 1} />
            ))}
          </div>
        </div>

        {/* Content Kategorien */}
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1E293B',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            margin: 0
          }}>
            <Hash size={24} color="#FF4757" style={{ marginRight: '8px' }} />
            Content Kategorien
          </h2>
          <div style={{ marginTop: '16px' }}>
            <HashtagCategoryCard
              title="Maja reagiert"
              hashtag="#majareagiert"
              data={hashtagData.majareagiert}
              color="#8B5CF6"
              textColor="#8B5CF6"
              bgColor="#F3E8FF"
            />
            <HashtagCategoryCard
              title="Maja wagt's"
              hashtag="#majawagts"
              data={hashtagData.majawagts}
              color="#3B82F6"
              textColor="#3B82F6"
              bgColor="#DBEAFE"
            />
            <HashtagCategoryCard
              title="Maja trifft"
              hashtag="#majatrifft"
              data={hashtagData.majatrifft}
              color="#10B981"
              textColor="#10B981"
              bgColor="#D1FAE5"
            />
            <HashtagCategoryCard
              title="Maja tbd"
              hashtag="#insightmaja"
              data={hashtagData.insightmaja}
              color="#F59E0B"
              textColor="#F59E0B"
              bgColor="#FEF3C7"
            />
          </div>
        </div>
        )}

        {/* Loading State */}
        {loading && !apiError && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #F3F4F6',
              borderTop: '4px solid #FF4757',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px auto'
            }}></div>
            <h3 style={{ color: '#374151', fontSize: '18px', fontWeight: '600', marginBottom: '8px', margin: 0 }}>
              Lade Metricool-Daten...
            </h3>
            <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>
              Verbinde mit TikTok Analytics API
            </p>
          </div>
        )}

        {/* Initial State - Keine Daten geladen */}
        {!loading && !apiError && !hasRealData && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
            <h3 style={{ color: '#374151', fontSize: '20px', fontWeight: '600', marginBottom: '8px', margin: 0 }}>
              TikTok Analytics Dashboard
            </h3>
            <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '20px', margin: 0 }}>
              Klicke auf "Daten aktualisieren" um deine echten TikTok-Daten zu laden
            </p>
            <button
              onClick={() => fetchMetricoolData()}
              style={{
                padding: '12px 24px',
                backgroundColor: '#FF4757',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                margin: '0 auto'
              }}
            >
              <TrendingUp size={20} style={{ marginRight: '8px' }} />
              Daten aktualisieren
            </button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default TikTokDashboard;
