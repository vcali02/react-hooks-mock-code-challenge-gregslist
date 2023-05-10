import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";

function App() {
//1. listings state
const [listings, setListings] = useState([])
//4. search state
const [search, setSearch] = useState("")



//1. GETting listings from the db.json
//transferring data/value into the declared state
useEffect((e) => {
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then(listings => setListings(listings))
}, [])


//3. delete listing
function deleteListing(listing){
  setListings(
    [...listings].filter(el => {
      return el.id !== listing.id ? true : false
    })
  )
}

const filteredListings = [...listings].filter((el) => {
  return el.description.toLowerCase().includes(search.toLowerCase())
})






  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={filteredListings} deleteListing={deleteListing}/>
      
    </div>
  );
}

export default App;


//DELIVERABLE #1
//When the app starts, I can see all listings.
//GET in PARENT component
//use state use effect
//pass props down to child


