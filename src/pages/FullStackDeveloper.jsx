import { Link } from "react-router-dom";

export default function FullStackDeveloper() {
  return (
    <div>
      <div className="container-card">
        <Link
          to="/fullstackdeveloper/FullStackDevelopmentProjectIdeas"
          className="card-link"
        >
          <div className="card">
            <img
              className="img"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-1200x801.jpg"
              alt=""
            />
            <div className="card-body">
              <p className="title">
                Best Full-Stack Development Project Ideas in 2024
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/fullstackdeveloper/:dmssoftwaredevelopers"
          className="card-link"
        >
          <div className="card">
            <img
              className="img"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png"
              alt=""
            />
            <div className="card-body">
              <p className="title">
                10 Best Database Management Systems For Software Developers
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
