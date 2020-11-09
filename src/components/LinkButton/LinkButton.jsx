import './LinkButton.css';

export const LinkButton = ({ title, handleLink }) => {
  return (
    <div className="btn" onClick={handleLink}>
      {title}
    </div>
  );
};
