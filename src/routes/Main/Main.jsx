import { Link } from 'react-router-dom';

import './Main.css';

export const Main = () => {
  return (
    <section className="main">
      <h1>Main Page</h1>
      <div className="btn-wrap">
        <Link to="/colors" className="btn">
          Color Picker
        </Link>
      </div>
    </section>
  );
};
