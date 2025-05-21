const Message = ({ text }) => {
  return text ? (
    <div className="search-message">
      {text}
    </div>
  ) : null;
};

export default Message;
