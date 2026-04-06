function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="header-img-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/205586430?v=4"
            alt=""
          />
        </div>
        <div className="header-name-wrapper">
          <p className="user-name">Name</p>
          <p className="user-bio">User Name</p>
        </div>
      </div>
      <div className="card-data">
        <div className="data-bio-wrapper">
          <p className="user-bio">This is my bio I am an enginner at google</p>
        </div>
        <div className="user-stats-wrapper">
          <p className="user-stats">
            <p>
              3.1k <br /> <span>Followers</span>
            </p>
            <p>
              742 <br /> <span>Following</span>
            </p>
            <p>
              189
              <br />
              <span> Repos</span>
            </p>
          </p>
        </div>

        <div className="user-links">
          <p className="user-location">locatoin</p>
          <p className="user-link">links</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
