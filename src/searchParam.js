import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./usedDropdown";

console.log(pet)
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown] = useDropdown('Breed', '', ANIMALS)
  
  const [breeds, setBreeds] = useState([]);

  useEffect(()=>{
    pet.breeds('dog').then(console.log, console.error)
  }) 


  return (
    <div className="search-params">
      <form>
        <label htmlFor="Location">
          Location
          <input
            type="text"
            name=""
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
