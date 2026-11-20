import safeDiffImg from "../assets/img/research/safe-diff-fig1.png";
import fdFedImg from "../assets/img/research/fd-fed-fig1.jpg";

export const featuredResearch = [
  {
    id: "safe-diff",
    title:
      "SAFE-Diff: Structurally Anchored Diffusion for Anatomically Faithful CT Image Super-Resolution",
    authors: ["Sneha", "Angshuman Paul"],
    venue: "MICCAI",
    year: 2025,
    tag: "CT Super-Resolution",
    image: safeDiffImg,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uPdXm3gAAAAJ&cstart=20&pagesize=80&citation_for_view=uPdXm3gAAAAJ:EUQCXRtRnyEC",
    code: null,
  },
  {
    id: "fd-fed",
    title:
      "Feature-Driven Layer Specialization for Label Heterogeneous Federated Learning",
    authors: ["Obed Jamir", "Angshuman Paul"],
    venue: "Neurocomputing",
    year: 2026,
    tag: "Federated Learning",
    image: fdFedImg,
    link: "https://www.sciencedirect.com/science/article/pii/S0925231226000172",
    code: "https://github.com/obedjamir/FD-Fed.git",
  },
];
