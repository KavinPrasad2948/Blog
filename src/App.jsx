import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./css/style.css";
import Home from "./pages/Home";
import Devops from "./pages/Devops";
import FullStackDeveloper from "./pages/FullStackDeveloper";
import DataScience from "./pages/DataScience";
import FullStackDevelopmentProjectIdeas from "./pages/FSDProjectIdeas";
import DevOpsProjectIdeas from "./pages/DevOpsProjectIdeas";
import Top10HighPayingNonCodingJobsinDataScience from "./pages/Top-10-HighPayingNon-CodingJobsinDataScience";
import DMSSoftwareDevelopers from "./pages/DMSSoftwareDevelopers";




function App() {
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Blog
          </a>
        </div>
      </nav>
      <div>
        <div className="sidebar">
          <Link className="link" to={"/"}>Home</Link>
          <Link className="link" to={"/devops"}>DevOps</Link>
          <Link className="link" to={"/fullstackdeveloper"}>FullStackDeveloper</Link>
          <Link className="link" to={"/datascience"}>DataScience</Link>
          
        </div>
      </div>
      <div className="container-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devops" element={<Devops />} />
          <Route path="/fullstackdeveloper" element={<FullStackDeveloper />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/fullstackdeveloper/:fullstackdevelopmentprojectideas" element={<FullStackDevelopmentProjectIdeas />} />
          <Route path="/devops/:devopsprojectIdeas" element={<DevOpsProjectIdeas/>}/>
          <Route path="/datascience/:top10HighPayingNonCodingJobsinDataScience" element={<Top10HighPayingNonCodingJobsinDataScience/>}/>
          <Route path="/fullstackdeveloper/:dmssoftwaredevelopers" element={<DMSSoftwareDevelopers/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
