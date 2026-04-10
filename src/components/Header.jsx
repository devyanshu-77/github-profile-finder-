function Header({ setUserName, fetchUserData }) {
  function handleChange(e) {
    if (e.target.value.trim() === "") return;
    setUserName(e.target.value);
  }
  return (
    <header>
      <input onChange={handleChange} type="text" />
      <button onClick={fetchUserData} type="submit">
        Search
      </button>
    </header>
  );
}

export default Header;
