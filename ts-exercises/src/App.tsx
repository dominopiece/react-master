import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUsername(username);
  };
  return (
    <div>
      <form>
        <input
          onChange={onChange}
          value={username}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
