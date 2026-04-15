function Repo({ name, description, language, stars, forks, url, updatedDate }) {
  const date = new Date(updatedDate).toDateString();
  return (
    <>
      <div className="repo">
        <div className="repo-detail-container">
          <a
            className="repo-name"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <p className="repo-description">{description}</p>
        </div>
        <div className="repo-stats-container">
          <p className="repo-language">{language}</p>
          <p className="repo-stars">{stars} Stars</p>
          <p className="repo-forks">{forks} Forks</p>
        </div>
        <p className="last-updated">Last updated at {date}</p>
      </div>
    </>
  );
}

export default Repo;
