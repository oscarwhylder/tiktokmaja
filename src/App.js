import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({
    followers: 24750,
    avgViews: 18420,
    totalLikes: 156800,
    engagement: 6.8,
    growthRate: 12.4,
    totalVideos: 89
  });

  const [topVideos] = useState([
    { id: 1, title: "Maja reagiert auf viral TikTok", views: 245000, likes: 18200, engagement: 7.4 },
    { id: 2, title: "Das war krass! 😱", views: 198000, likes: 15600, engagement: 7.9 },
    { id: 3, title: "Maja trifft Influencer XY", views: 176000, likes: 13800, engagement: 7.8 },
    { id: 4, title: "Ich wage es heute...", views: 134000, likes: 11200, engagement: 8.4 },
    { id: 5, title: "Insights die ihr wissen müsst", views: 112000, likes: 9800, engagement: 8.8 }
  ]);

  const [weeklyData] = useState([
    { day: 'Mo', views: 15200, likes: 1240 },
    { day: 'Di', views: 18900, likes: 1580 },
    { day: 'Mi', views: 22400, likes: 1890 },
    { day: 'Do', views: 19800, likes: 1650 },
    { day: 'Fr', views: 28500, likes: 2340 },
    { day: 'Sa', views: 31200, likes: 2680 },
    { day: 'So', views: 24800, likes: 2020 }
  ]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        color: 'white'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎯</div>
        <h1 style={{ 
          fontSize: '42px', 
          margin: '0 0 8px 0', 
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>
          TikTok Dashboard
        </h1>
        <h2 style={{ 
          fontSize: '24px', 
          margin: '0 0 15px 0', 
          fontWeight: '400',
          opacity: '0.9'
        }}>
          Majanische Gedanken
        </h2>
        <div style={{ 
          fontSize: '14px', 
          opacity: '0.8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <span>🔴 Live</span>
          <span>•</span>
          <span>Letztes Update: {new Date().toLocaleString('de-DE')}</span>
          <span>•</span>
          <span>Auto-Refresh: 15min</span>
        </div>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {/* Haupt-Metriken */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '10px' }}>📊</span>
            <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>Haupt-Metriken</h3>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
              padding: '20px',
              borderRadius: '16px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>
                {data.followers.toLocaleString('de-DE')}
              </div>
              <div style={{ fontSize: '12px', opacity: '0.9' }}>Follower</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
              padding: '20px',
              borderRadius: '16px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>
                {data.avgViews.toLocaleString('de-DE')}
              </div>
              <div style={{ fontSize: '12px', opacity: '0.9' }}>Ø Views</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #A8E6CF, #7FCDCD)',
              padding: '20px',
              borderRadius: '16px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>
                {(data.totalLikes / 1000).toFixed(0)}k
              </div>
              <div style={{ fontSize: '12px', opacity: '0.9' }}>Total Likes</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #FFD93D, #FF9A3D)',
              padding: '20px',
              borderRadius: '16px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>
                {data.engagement.toFixed(1)}%
              </div>
              <div style={{ fontSize: '12px', opacity: '0.9' }}>Engagement</div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '10px' }}>📈</span>
            <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>7-Tage Performance</h3>
          </div>
          
          <div style={{ position: 'relative', height: '200px' }}>
            <svg width="100%" height="100%" viewBox="0 0 280 180">
              {/* Grid Lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <line 
                  key={i}
                  x1="40" 
                  y1={40 + i * 25} 
                  x2="260" 
                  y2={40 + i * 25}
                  stroke="#f0f0f0" 
                  strokeWidth="1"
                />
              ))}
              
              {/* Views Line */}
              <polyline
                fill="none"
                stroke="#4ECDC4"
                strokeWidth="3"
                points={weeklyData.map((d, i) => 
                  `${60 + i * 30},${160 - (d.views / 35000) * 120}`
                ).join(' ')}
              />
              
              {/* Data Points */}
              {weeklyData.map((d, i) => (
                <g key={i}>
                  <circle
                    cx={60 + i * 30}
                    cy={160 - (d.views / 35000) * 120}
                    r="4"
                    fill="#4ECDC4"
                  />
                  <text
                    x={60 + i * 30}
                    y={175}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#666"
                  >
                    {d.day}
                  </text>
                </g>
              ))}
              
              {/* Y-Axis Labels */}
              {['0', '10k', '20k', '30k'].map((label, i) => (
                <text
                  key={i}
                  x="35"
                  y={165 - i * 30}
                  textAnchor="end"
                  fontSize="10"
                  fill="#999"
                >
                  {label}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* Top Videos */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '10px' }}>🏆</span>
            <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>Top Videos</h3>
          </div>
          
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            {topVideos.map((video, index) => (
              <div key={video.id} style={{
                background: index === 0 ? 'linear-gradient(135deg, #FFD93D, #FF9A3D)' : '#f8f9fa',
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '12px',
                color: index === 0 ? 'white' : '#333'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '4px'
                    }}>
                      #{index + 1} {video.title}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      opacity: index === 0 ? '0.9' : '0.7',
                      display: 'flex',
                      gap: '16px'
                    }}>
                      <span>👁️ {(video.views / 1000).toFixed(0)}k</span>
                      <span>❤️ {(video.likes / 1000).toFixed(1)}k</span>
                      <span>📊 {video.engagement}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '10px' }}>⚡</span>
            <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>Quick Stats</h3>
          </div>
          
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #A8E6CF, #7FCDCD)',
              padding: '16px',
              borderRadius: '12px',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Wachstum</div>
                <div style={{ fontSize: '12px', opacity: '0.9' }}>Letzte 30 Tage</div>
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>
                +{data.growthRate}%
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
              padding: '16px',
              borderRadius: '12px',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Videos</div>
                <div style={{ fontSize: '12px', opacity: '0.9' }}>Gesamt</div>
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>
                {data.totalVideos}
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
              padding: '16px',
              borderRadius: '12px',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Ø Engagement</div>
                <div style={{ fontSize: '12px', opacity: '0.9' }}>Pro Video</div>
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>
                {data.engagement}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
