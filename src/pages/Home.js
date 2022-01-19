import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <h1>Blog Daily Home</h1>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;
