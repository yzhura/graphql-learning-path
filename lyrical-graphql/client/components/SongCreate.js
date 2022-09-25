import React, { useState } from "react";

const SongCreate = (props) => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="songTitle">Song Title:</label>
        <input
          id="songTitle"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SongCreate;
