import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Card, Badge, Modal, Button } from "react-bootstrap";
import { news } from "../data/news";

export const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Sort descending by year
  const sortedNews = [...news].sort((a, b) => b.year - a.year);
  const total = sortedNews.length;

  // Responsive items calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, total - itemsVisible);

  // Keep index within bounds if resized
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsVisible, maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, maxIndex]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="news"
      className="modern-news-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* Header with Title and Dedicated Navigation Controls */}
        <div className="news-header-wrapper d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
          <div className="news-header-box mb-3 mb-md-0 text-center text-md-start">
            <Badge bg="danger" className="news-pulse-badge mb-2">
              LATEST ANNOUNCEMENTS
            </Badge>
            <h2 className="news-main-title">Lab News &amp; Recognitions</h2>
            <p className="news-subtitle mb-0">
              Stay updated with our recent journal publications, conference acceptances, and lab milestones
            </p>
          </div>

          {/* Controls Bar: External to cards - NEVER overlaps content */}
          <div className="news-slider-nav-controls d-flex align-items-center justify-content-center gap-2">
            <button
              className="news-nav-btn prev"
              onClick={prevSlide}
              aria-label="Previous News Slide"
              title="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <span className="news-slide-counter">
              <span className="current-num">{currentIndex + 1}</span>
              <span className="divider">/</span>
              <span className="total-num">{maxIndex + 1}</span>
            </span>

            <button
              className="news-nav-btn next"
              onClick={nextSlide}
              aria-label="Next News Slide"
              title="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Clean Slider Viewport & Track */}
        <div
          className="news-slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="news-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
            }}
          >
            {sortedNews.map((item, idx) => (
              <div
                key={idx}
                className="news-slide-item"
                style={{
                  flex: `0 0 ${100 / itemsVisible}%`,
                  maxWidth: `${100 / itemsVisible}%`,
                }}
              >
                <Card className="modern-news-card h-100">
                  <div className="news-card-accent-bar" />
                  <Card.Body className="d-flex flex-column p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="news-year-chip">
                        <svg className="me-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {item.year}
                      </span>
                      <span className="news-venue-chip text-truncate ms-2" title={item.published}>
                        {item.published}
                      </span>
                    </div>

                    <Card.Title className="news-item-title" title={item.title}>
                      {item.title}
                    </Card.Title>

                    <p className="news-item-authors">
                      {item.authors && item.authors.join(", ")}
                    </p>

                    {item.description && (
                      <Card.Text className="news-item-desc mb-3">
                        {item.description}
                      </Card.Text>
                    )}

                    <div className="mt-auto pt-2 border-top">
                      <Button
                        variant="link"
                        className="news-read-more-btn p-0 text-decoration-none"
                        onClick={() => setSelectedArticle(item)}
                      >
                        Read Full Abstract
                        <svg className="ms-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots Bar */}
        <div className="news-indicator-dots d-flex justify-content-center align-items-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`news-dot-btn ${currentIndex === dotIdx ? "active" : ""}`}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Modal for Full Abstract */}
        <Modal
          show={!!selectedArticle}
          onHide={() => setSelectedArticle(null)}
          centered
          size="lg"
          className="news-article-modal"
        >
          {selectedArticle && (
            <>
              <Modal.Header closeButton className="border-0 pb-0">
                <div className="d-flex align-items-center gap-2">
                  <span className="news-year-chip">{selectedArticle.year}</span>
                  <Badge bg="primary" className="fw-semibold">
                    {selectedArticle.published}
                  </Badge>
                </div>
              </Modal.Header>
              <Modal.Body className="pt-3 px-4 pb-4">
                <h4 className="news-modal-title mb-2">{selectedArticle.title}</h4>
                <p className="news-modal-authors text-muted mb-3 fst-italic">
                  Authors: {selectedArticle.authors && selectedArticle.authors.join(", ")}
                </p>
                <div className="news-modal-desc-box p-3 rounded">
                  <h6 className="fw-bold text-dark mb-2">Abstract / Summary:</h6>
                  <p className="news-modal-desc mb-0" style={{ lineHeight: "1.7", color: "#334155" }}>
                    {selectedArticle.description}
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer className="border-0 pt-0">
                <Button variant="secondary" onClick={() => setSelectedArticle(null)}>
                  Close
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};
