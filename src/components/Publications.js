import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { publications } from "../data/publications";

export const Publications = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter to include only publications with Angshuman Paul as co-author
  const filteredPubs = publications.filter((pub) =>
    pub.authors.some((author) =>
      author.toLowerCase().includes("angshuman paul")
    )
  );

  const topics = [
    { id: "all", label: "All Publications" },
    { id: "diffusion", label: "Diffusion & Synthesis" },
    { id: "federated", label: "Federated Learning" },
    { id: "segmentation", label: "Segmentation & Detection" },
  ];

  const topicFiltered = filteredPubs.filter((pub) => {
    if (selectedTopic === "all") return true;
    const title = pub.title.toLowerCase();
    if (selectedTopic === "diffusion") {
      return (
        title.includes("diffusion") ||
        title.includes("synthesis") ||
        title.includes("gan") ||
        title.includes("generation")
      );
    }
    if (selectedTopic === "federated") {
      return title.includes("federated") || title.includes("client");
    }
    if (selectedTopic === "segmentation") {
      return (
        title.includes("segmentation") ||
        title.includes("detection") ||
        title.includes("diagnosis") ||
        title.includes("classification")
      );
    }
    return true;
  });

  const sortedPubs = [...topicFiltered].sort((a, b) => b.year - a.year);

  const handleTopicChange = (topicId) => {
    setSelectedTopic(topicId);
    setIsExpanded(false);
  };

  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
    // Smooth scroll back to publications section
    const element = document.getElementById("publications");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Initially show just 3 at max; if expanded, show rest of remaining
  const displayedPubs = isExpanded ? sortedPubs : sortedPubs.slice(0, 3);

  return (
    <section id="publications" className="modern-publications-section">
      <Container>
        <div className="pub-section-header text-center">
          <span className="pub-badge-pill">SCHOLARLY WORK</span>
          <h2 className="pub-section-title">Selected Publications</h2>
          <p className="pub-section-sub">
            Peer-reviewed contributions in top-tier medical imaging conferences and journals (MICCAI, IEEE TMI, Neurocomputing, etc.)
          </p>

          {/* Topic Filter Pills */}
          <div className="pub-topic-filters">
            {topics.map((t) => (
              <button
                key={t.id}
                className={`pub-filter-pill ${selectedTopic === t.id ? "active" : ""}`}
                onClick={() => handleTopicChange(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Publication Cards Grid */}
        <div className="pub-cards-grid">
          {displayedPubs.map((pub, idx) => (
            <Card key={idx} className="modern-pub-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="pub-year-badge">{pub.year}</span>
                  <span className="pub-venue-badge text-truncate ms-2" title={pub.venue}>
                    {pub.venue}
                  </span>
                </div>

                <Card.Title className="pub-card-title">{pub.title}</Card.Title>

                <p className="pub-authors-list">{pub.authors.join(", ")}</p>

                <div className="pub-btn-row mt-auto pt-3">
                  {pub.link && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pub-link"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Paper
                    </Button>
                  )}
                  {pub.code && (
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      href={pub.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pub-code-link"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      Code
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Action Button: Load More loads rest of remaining */}
        {sortedPubs.length > 3 && (
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            {!isExpanded ? (
              <Button
                onClick={handleLoadMore}
                className="btn-load-more d-inline-flex align-items-center gap-2"
              >
                <span>Load More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Button>
            ) : (
              <Button
                onClick={handleShowLess}
                variant="outline-secondary"
                className="btn-show-less d-inline-flex align-items-center gap-2"
              >
                <span>Show Less</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
