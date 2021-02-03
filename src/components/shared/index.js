import "./index.scss";

export const Input = ({ value, onChange, type, id }) => {
  return (
    <div className="inputDiv">
      <p className="paragraph">{type}</p>
      <input
        className="input"
        value={value}
        id={id}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};
