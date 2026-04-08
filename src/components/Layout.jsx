import Header from "./Header.jsx";
import ProfileCard from "./ProfileCard.jsx";
import Repos from "./Repos.jsx";
function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <ProfileCard />
        <Repos />
      </main>
    </div>
  );
}
export default Layout;
