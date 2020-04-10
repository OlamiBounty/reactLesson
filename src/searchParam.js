import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./usedDropdown"; // This is an example of react hook

// console.log(pet)
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)

  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)
  

  useEffect(()=>{
    setBreeds([]),
    setBreed('')
    pet.breeds(animal).then(resp => {
      const arrayBreed = resp.breeds.map(resp => (resp.name))
      setBreeds(arrayBreed)
      
    })
  }, [animal, setBreeds ]) 


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
