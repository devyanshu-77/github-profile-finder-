import { useState } from "react";
import "./app.css";
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Repos from "./components/Repos.jsx";
import ShowMessages from "./components/ShowMessages.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [err, setErr] = useState(null);
  async function fetchUserData() {
    setIsLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (!res.Response) {
      console.log(res.Response);
      if (res.Response.status === 404) {
        setErr("User not found");
        setUserData(false);
        setIsLoading(false);
      }
    }

    setIsLoading(false);
    setUserData(data);
  }

  return (
    <div className="layout">
      <Header fetchUserData={fetchUserData} setUserName={setUserName} />
      <main>
        {isLoading && <Loading />}
        {userData ? (
          <>
            <ProfileCard />
            <Repos />
          </>
        ) : isLoading ? null : (
          <ShowMessages err={err} />
        )}
      </main>
    </div>
  );
}

export default App;
