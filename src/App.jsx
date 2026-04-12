import { useState } from "react";
import "./app.css";
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Repos from "./components/Repos.jsx";
import ShowMessages from "./components/ShowMessages.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [err, setErr] = useState(null);
  async function fetchUserData() {
    setIsLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${userName}`);
      const reposRes = await fetch(
        `https://api.github.com/users/${userName}/repos`,
      );
      const userData = await userRes.json();
      const reposData = await reposRes.json();
      console.log("User data ", userData);
      console.log("Repos data ", reposData);
      setUserData(userData);
      setUserRepos(reposData);
      setIsLoading(false);
      if (!userRes.ok) {
        setUserData(null);
        if (res.status === 404) {
          setErr("User not found");
          return;
        }
        setErr("Oops something went wrong try again later");
        return;
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <div className="layout">
      <Header fetchUserData={fetchUserData} setUserName={setUserName} />
      <main>
        {isLoading && <Loading />}
        {userData && !isLoading ? (
          <>
            <ProfileCard userData={userData} />
            <Repos repos={userRepos} />
          </>
        ) : isLoading ? null : (
          <ShowMessages err={err} />
        )}
      </main>
    </div>
  );
}

export default App;
