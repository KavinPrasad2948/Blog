import { Link } from "react-router-dom";

export default function DataScience() {
  return (
    <div className="container-card">
      <Link to="/datascience/:top10HighPayingNonCodingJobsinDataScience">
        <div className="card">
          <img
            className="img"
            src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
            alt=""
          />
          <div className="card-body">
            <p className="title">
              Top 10 High Paying Non-Coding Jobs in Data Science in 2024
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
