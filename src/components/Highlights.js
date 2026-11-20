import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { texts } from "../data/text";
import logo from "../assets/img/new_logo.png";
import "./Highlights.css";

export const Highlights = () => {
  const { title, description } = texts.highlights;

  return (
    <section className="overview-section" id="research-overview">
      <Container>
        {/* Main Overview Card */}
        <div className="overview-glass-card">
          <Row className="align-items-center g-4">
            <Col lg={4} md={12} className="text-center">
              <div className="overview-logo-frame">
                <img src={logo} alt="MedISA Lab" className="overview-logo-img" />
                <div className="logo-glow-ring" />
              </div>
            </Col>

            <Col lg={8} md={12}>
              <div className="overview-text-content">
                <div className="overview-badge-tag">ABOUT OUR MISSION</div>
                <h2 className="overview-heading">{title}</h2>
                <p className="overview-description">{description}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
