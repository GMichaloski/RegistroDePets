import React, { useEffect, useState } from "react";
import { getPets } from "../services/pets";

function Parent() {
  const [pet, setPets] = useState([]);
  useEffect(() => {
    const requisicao = async () => {
      const response = await getPets();
      setPets(response.data.pets);
    };
    requisicao();
  }, []);
  return pet;
}

export default function PetList() {
  const pets = Parent();
  if (pets !== []) {
    return (
      <main>
        {pets.map(({ id, name, breed, age, species, gender, url, adopted }) => (
          <div key={id}>
            <h3>
              {name} - {age} ano(s) 🐾
            </h3>
            <img src={url} alt={breed}></img>
            <p>
              {species} - {gender}{" "}
            </p>
          </div>
        ))}
      </main>
    );
  } else {
    return (
      <main>
        if (pets !== []){}
        else{<h3>Loading...</h3>}
      </main>
    );
  }
}
