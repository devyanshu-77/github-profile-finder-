const ShowMessages = ({ err }) => {
  return (
    <div className="show-messages">
      <p>{err ? err : "Find github profiles"}</p>
    </div>
  );
};

export default ShowMessages;
