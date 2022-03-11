import React, { useEffect, useState } from "react";
import { getPets } from "../services/pets";

export default function RotaTeste() {
  const [pet, setPets] = useState([]);
  useEffect(() => {
    const requisicao = async () => {
      const response = await getPets();
      setPets(response.data.pets);
    };
    requisicao();
  }, []);
  console.log(pet);
  return <div>Rota vasco</div>;
}
