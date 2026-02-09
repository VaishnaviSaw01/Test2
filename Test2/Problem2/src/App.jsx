import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);
    setRepos([]);

    try {
      // 1️⃣ Fetch user profile
      const userRes = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!userRes.ok) {
        throw new Error("User not found");
      }

      const userData = await userRes.json();
      setUser(userData);

      // 2️⃣ Fetch latest 5 repos
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
      );

      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (err) {
      setError("GitHub user not found (404)");
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </form>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="profile">
          <img src={user.avatar_url} alt="avatar" />
          <h2>{user.login}</h2>
          <p>{user.bio || "No bio available"}</p>
          <p>Followers: {user.followers}</p>
        </div>
      )}

      {repos.length > 0 && (
        <div className="repos">
          <h3>Latest Repositories</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
