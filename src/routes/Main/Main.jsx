import { useHistory } from 'react-router-dom';
import { LinkButton } from '../../components/LinkButton';
import './Main.css';

export const Main = () => {
  const history = useHistory();

  const handleLink = () => {
    history.push(`/colors`);
  };

  return (
    <section className="main">
      <h1>Main Page</h1>
      <div className="btn-wrap">
        <LinkButton title="Color Picker" handleLink={handleLink} />
      </div>
    </section>
  );
};
