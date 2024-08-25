import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>homepage</h1>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Home