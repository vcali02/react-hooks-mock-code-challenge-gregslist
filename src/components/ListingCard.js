import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {
//2. favorite/unfavorite state
const [isFavorite, setFavorite] = useState(true)



//2. click event to toggle between favorite and unfavorite
function handleClick(e){
  //UPDATE state to reflect the opposite of its current state
  setFavorite(!isFavorite)
}


//3.click event to delete toy
function handleDelete(){
  fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(() => deleteListing(listing))
}




  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {/*ternary to toggle favorite/unfavorite*/}
        {isFavorite ? (
          <button 
          className="emoji-button favorite active" 
          onClick={(e) => handleClick(e)}>★</button>
        ) : (
          <button 
          className="emoji-button favorite" 
          onClick={(e) => handleClick(e)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        {/*onclick to delete the listing*/}
        <button 
        className="emoji-button delete"
        onClick={() => handleDelete()}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;


//DELIVERABLE #2
//I can "favorite" and "unfavorite" a listing 
// on the frontend by clicking the star icon.
// This feature doesn't need backend persistence.



//DELIVERABLE #3
// I can remove a listing from the page by clicking the
// trash can icon. This change should be persisted 
// in the backend.
//click event to persist DELETE IN COMPONENT
//CALLS the ACTUAL delete function from the PARENT component as it is
//affecting the original state
//IN PARENT component, create function that UPDATES the current state
//the parameter is what you are attempting to delete (listing)
//the UPDATE takes as an argument:
//copy of the original array
//filter
//filter method takes in as an argument a callback function
//ternary: if the element id does NOT match the array id (listing.id) return it
//if it DOES match the listing.id return everything BUT the match