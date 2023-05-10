import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {
  return (
    <main>
      <ul className="cards">
        {/*copy of array, applying instruction to each element*/}
        {
          [...listings].map((el) => {
            return <ListingCard key={el.id} listing={el} deleteListing={deleteListing}/>
          })
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
