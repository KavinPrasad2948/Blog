import { Link } from "react-router-dom";

export default function Devops() {
  return (
    <div className="container-card">
      <Link to="/devops/:devopsprojectIdeas" className="card-link">
        <div className="card">
          <img
            className="img"
            src="https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-1200x628.webp"
            alt=""
          />
          <div className="card-body">
            <p className="title">10 Best DevOps Project Ideas for 2024</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
