const Buttons = ({ onSearch, onLucky }) => {
  return (
    <div className="buttons">
      <button onClick={onSearch}>Pesquisa Google</button>
      <button onClick={onLucky}>Estou com sorte</button>
    </div>
  );
};

export default Buttons;
