import Repo from "./Repo.jsx";
const ReposContainer = ({ repos }) => {
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);
  return (
    <div className="user-repos-wrapper">
      <p className="repos-heading">Top Repositories</p>
      <div className="repo-container">
        {topRepos.map((t) => (
          <Repo
            key={t.id}
            name={t.name}
            description={t.description}
            language={t.language}
            stars={t.stargazers_count}
            forks={t.forks}
            url={t.html_url}
            updatedDate={t.updated_at}
          />
        ))}
      </div>
    </div>
  );
};

export default ReposContainer;
