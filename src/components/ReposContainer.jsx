import Repo from "./Repo.jsx";
const Repos = ({ repos }) => {
   const topRepos = [...repos].sort((a, b) => b.stargrazers_count - a.stargrazers_count).slice(0,5)
  console.log("Top repos ", topRepos )


    return (
        <div className="user-repos-wrapper">
            <p className="repos-heading">Top Repositories</p>
            <div className="repo-container">
                {topRepos.map((t) => <Repo key={t.id} 
                  name={t.name} 
                  description={t.description} 
                  language={t.language} 
                  stars={t.stargrazers_count} 
                  forks={t.forks}
                />)}
            </div>
        </div>
    );
};

export default Repos;
