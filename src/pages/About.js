// src/pages/About.js
import React from 'react';

const About = () => {
  const styles = {
    page: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      padding: 0,
      margin: 0
    },
    hero: {
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      padding: '100px 0 80px',
      textAlign: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      fontWeight: '700'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '3rem',
      opacity: '0.9',
      fontWeight: '300'
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      flexWrap: 'wrap'
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '2rem',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      minWidth: '180px'
    },
    statNumber: {
      display: 'block',
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '1rem',
      opacity: '0.9'
    },
    missionSection: {
      padding: '80px 0',
      background: 'white'
    },
    missionTitle: {
      fontSize: '2.5rem',
      color: '#1e3c72',
      marginBottom: '2rem',
      fontWeight: '600',
      textAlign: 'center'
    },
    missionText: {
      fontSize: '1.2rem',
      lineHeight: '1.7',
      color: '#666',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 2rem'
    },
    highlight: {
      color: '#1e3c72',
      fontWeight: '600'
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>About ColorVision Access</h1>
          <p style={styles.heroSubtitle}>Our mission to make the digital world accessible to everyone</p>
          
          <div style={styles.stats}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>300M+</span>
              <span style={styles.statLabel}>People with CVD</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>1 in 12</span>
              <span style={styles.statLabel}>Men Affected</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>1 in 200</span>
              <span style={styles.statLabel}>Women Affected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.missionSection}>
        <div style={styles.container}>
          <h2 style={styles.missionTitle}>Our Mission</h2>
          <p style={styles.missionText}>
            We believe that digital accessibility is a fundamental right. Our mission is to 
            empower the <span style={styles.highlight}>300+ million people worldwide</span> with color vision deficiency to 
            experience the web in its true colors through intelligent, personalized technology.
          </p>
          <p style={styles.missionText}>
            ColorVision Access was born from the realization that while the internet has become 
            an essential part of daily life, it remains largely inaccessible to those with 
            color vision deficiencies. We're changing that, one website at a time.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}>
        <div style={styles.container}>
          <h2 style={{
            ...styles.missionTitle,
            marginBottom: '1rem'
          }}>The Problem We Solve</h2>
          <p style={{
            ...styles.missionText,
            marginBottom: '4rem'
          }}>
            Color vision deficiency creates significant barriers in digital experiences
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Problem Card 1 */}
            <div style={{
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🌐</div>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#1e3c72',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>Digital Barriers</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                margin: 0
              }}>
                Websites and apps often rely on color to convey information, creating accessibility challenges.
              </p>
            </div>

            {/* Problem Card 2 */}
            <div style={{
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>📊</div>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#1e3c72',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>Data Interpretation</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                margin: 0
              }}>
                Charts and graphs become difficult to interpret when color distinctions are lost.
              </p>
            </div>

            {/* Problem Card 3 */}
            <div style={{
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🛒</div>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#1e3c72',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>E-commerce Issues</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                margin: 0
              }}>
                Online shopping becomes challenging when product colors aren't clearly distinguishable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={styles.container}>
          <h2 style={styles.missionTitle}>Our Team</h2>
          <p style={{
            ...styles.missionText,
            marginBottom: '4rem'
          }}>
            The passionate individuals behind ColorVision Access
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {/* Team Member 1 */}
            <div style={{
              background: '#f8f9fa',
              padding: '2.5rem',
              borderRadius: '16px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#1e3c72',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>Team ChromAdapt</h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                fontWeight: '500',
                marginBottom: '1rem'
              }}>Development Team</p>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Computer Engineering Students dedicated to creating accessible technology solutions
              </p>
              <div>
                <h4 style={{
                  color: '#1e3c72',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>Key Contributions:</h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e9ecef',
                    color: '#666',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                  }}>✓ Project Research</li>
                  <li style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e9ecef',
                    color: '#666',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                  }}>✓ Chrome Extension</li>
                  <li style={{
                    padding: '0.5rem 0',
                    color: '#666',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                  }}>✓ User-Feedback and Maintainance</li>
                </ul>
              </div>
            </div>

            {/* Team Member 2 */}
            <div style={{
              background: '#f8f9fa',
              padding: '2.5rem',
              borderRadius: '16px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#1e3c72',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>Dr. A. P. Pande</h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                fontWeight: '500',
                marginBottom: '1rem'
              }}>Project Supervisor and H.O.D.</p>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Department of Computer Engineering, Datta Meghe College of Engineering
              </p>
              <div>
                <h4 style={{
                  color: '#1e3c72',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>Key Contributions:</h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e9ecef',
                    color: '#666',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                  }}>✓ Technical Guidance</li>
                  <li style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e9ecef',
                    color: '#666',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                  }}>✓ Research Supervision</li>
                  <li style={{
                    padding: '0.5rem 0',
                    color: '#666',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                  }}>✓ Project Mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;