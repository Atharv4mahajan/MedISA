import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container } from "react-bootstrap";
import { SafeDiffAnimatedStage } from "./diagrams/SafeDiffAnimation";
import { FdFedAnimatedStage } from "./diagrams/FdFedAnimation";

export const ResearchShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const researchItems = [
    {
      id: "safe-diff",
      title: "SAFE-Diff: Structurally Anchored Diffusion for Anatomically Faithful CT Image Super-Resolution",
      authors: ["Sneha", "Angshuman Paul"],
      venue: "MICCAI 2025",
      tag: "CT Super-Resolution & Diffusion",
      summary: "Two-stage framework combining residual prediction for structural anchoring with truncated diffusion for faithful CT fine-detail synthesis.",
      stageComponent: <SafeDiffAnimatedStage />,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uPdXm3gAAAAJ&cstart=20&pagesize=80&citation_for_view=uPdXm3gAAAAJ:EUQCXRtRnyEC",
      code: null,
    },
    {
      id: "fd-fed",
      title: "Feature-Driven Layer Specialization for Label Heterogeneous Federated Learning",
      authors: ["Obed Jamir", "Angshuman Paul"],
      venue: "Neurocomputing 2026",
      tag: "Federated Learning & Medical AI",
      summary: "Dynamic model layer categorization preserving client-specific specialized features while aggregating client-agnostic shared layers across hospital nodes.",
      stageComponent: <FdFedAnimatedStage />,
      link: "https://www.sciencedirect.com/science/article/pii/S0925231226000172",
      code: "https://github.com/obedjamir/FD-Fed.git",
    },
  ];

  const total = researchItems.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, 8000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, nextSlide]);

  const item = researchItems[currentSlide];

  return (
    <section
      className="research-showcase-section"
      id="research-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* Section Header */}
        <div className="showcase-section-header">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="showcase-pill-badge">RESEARCH HIGHLIGHTS</span>
          </div>
          <h2 className="showcase-heading">Featured Architecture Diagrams</h2>
          <p className="showcase-subheading">
            Animated visual pipeline walk-throughs of our published clinical AI architectures
          </p>
        </div>

        {/* Card Shell */}
        <div className="showcase-card">
          {/* Top Paper Meta Bar */}
          <div className="showcase-meta-bar">
            <div className="showcase-meta-left">
              <span className="badge-tag">{item.tag}</span>
              <h3 className="paper-title-text">{item.title}</h3>
              <p className="paper-summary-text">{item.summary}</p>
              <div className="paper-byline">
                <span className="badge-venue">{item.venue}</span>
                <span className="authors-text">{item.authors.join(", ")}</span>
              </div>
            </div>

            <div className="showcase-meta-right">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-action-pub btn-pub-paper"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Paper
                </a>
              )}
              {item.code && (
                <a
                  href={item.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-action-pub btn-pub-code"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Code
                </a>
              )}
            </div>
          </div>

          {/* Diagram Main Stage */}
          <div className="showcase-stage">
            {item.stageComponent}
          </div>

          {/* Slider Navigation Controls */}
          <div className="showcase-slider-controls">
            <button
              className="slider-nav-btn prev"
              onClick={prevSlide}
              aria-label="Previous Method"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span>Previous Architecture</span>
            </button>

            <div className="slider-indicator-dots">
              {researchItems.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator-dot ${idx === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="slider-nav-btn next"
              onClick={nextSlide}
              aria-label="Next Method"
            >
              <span>Next Architecture</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
