const InputBox = ({ value, onChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Pesquise por um post"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
