import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="modern-hero-banner" id="home">
      <div className="hero-gradient-overlay" />
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="hero-content-wrapper">
                  <div className="hero-top-badge">
                    <span className="badge-pulse-dot" />
                    <span>IIT Jodhpur • Department of CSE</span>
                  </div>

                  <h1 className="hero-main-title">
                    MedISA <span className="highlight-text">Lab</span>
                  </h1>
                  <h2 className="hero-sub-title">
                    Medical Image Synthesis &amp; Analysis
                  </h2>

                  <p className="hero-tagline">
                    Pioneering generative diffusion architectures, decentralized federated learning, and clinically-faithful AI systems for modern radiological workflows.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Quick Stats Pill */}
          <Col xs={12} lg={4} className="mt-4 mt-lg-0">
            <div className="hero-stats-card">
              <h4 className="stats-card-heading">Lab Impact Snapshot</h4>
              
              <div className="stats-row">
                <div className="stat-box">
                  <span className="stat-number">40+</span>
                  <span className="stat-label">Publications</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">MICCAI</span>
                  <span className="stat-label">&amp; Top Venues</span>
                </div>
              </div>

              <div className="stats-divider" />

              <div className="stat-focus-tags">
                <span className="stat-focus-tag">CT Super-Resolution</span>
                <span className="stat-focus-tag">MRI Synthesis</span>
                <span className="stat-focus-tag">Federated AI</span>
                <span className="stat-focus-tag">X-Ray Diagnosis</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
