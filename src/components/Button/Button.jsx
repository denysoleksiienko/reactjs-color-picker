export const Button = ({ title, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="btn ">
      {title}
    </button>
  );
};
