function Repo({name, description, language, stars, forks}) {
  return(
    <>
                <div className="repo">
                    <div className="repo-detail-container">
                        <p className="repo-name">{name}</p>
                        <p className="repo-description">
                            {description}
                        </p>
                    </div>
                    <div className="repo-stats-container">
                        <p className="repo-language">{language}</p>
                        <p className="repo-stars">{stars} Stars</p>
                        <p className="repo-forks">{forks} Forks</p>
                    </div>
                    <p className="last-updated">Last updated 2 days ago</p>
                </div>
                <div className="repo">
                    <div className="repo-detail-container">
                        <p className="repo-name">Repo Name</p>
                        <p className="repo-description">
                            {" "}
                            this is my repo description yeah how are you{" "}
                        </p>
                    </div>
                    <div className="repo-stats-container">
                        <p className="repo-language">Javascript</p>
                        <p className="repo-stars">12.8k Stars</p>
                        <p className="repo-forks">1.9k Forks</p>
                    </div>
                    <p className="last-updated">Last updated 2 days ago</p>
                </div>
                <div className="repo">
                    <div className="repo-detail-container">
                        <p className="repo-name">Repo Name</p>
                        <p className="repo-description">
                            {" "}
                            this is my repo description yeah how are you{" "}
                        </p>
                    </div>
                    <div className="repo-stats-container">
                        <p className="repo-language">Javascript</p>
                        <p className="repo-stars">12.8k Stars</p>
                        <p className="repo-forks">1.9k Forks</p>
                    </div>
                    <p className="last-updated">Last updated 2 days ago</p>
                </div>
                <div className="repo">
                    <div className="repo-detail-container">
                        <p className="repo-name">Repo Name</p>
                        <p className="repo-description">
                            this is my repo description yeah how are you{" "}
                        </p>
                    </div>
                    <div className="repo-stats-container">
                        <p className="repo-language">Javascript</p>
                        <p className="repo-stars">12.8k Stars</p>
                        <p className="repo-forks">1.9k Forks</p>
                    </div>
                    <p className="last-updated">Last updated 2 days ago</p>
                </div>
    </>
  )
}

export default Repo;
