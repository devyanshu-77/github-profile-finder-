function ProfileCard({ userData }) {
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
          <p className="user-name">{userData.name}</p>
          <p className="user-bio">{userData.login}</p>
        </div>
      </div>
      <div className="card-data">
        <div className="data-bio-wrapper">
          <p className="user-bio">
            {userData.bio ? userData.bio : "Bio not set"}
          </p>
        </div>
        <div className="user-stats-wrapper">
          <div className="user-stats">
            <p>
              {userData.followers} <br /> <span>Followers</span>
            </p>
            <p>
              {userData.following} <br /> <span>Following</span>
            </p>
            <p>
              {userData.public_repos}
              <br />
              <span>Repos</span>
            </p>
          </div>
        </div>

        <div className="user-links">
          <p className="user-location">
            {userData.location ? userData.location : "Location not set"}
          </p>
          <p className="user-link">
            {userData.hireable ? userData.hireable : "Hireable not set"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
