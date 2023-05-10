import React from "react";

function Search({search, setSearch}) {

  
  function handleChange(e){
    setSearch(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }




  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        value={search}
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
