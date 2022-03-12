import React, { useEffect, useState } from "react";
import { getPets } from "./pets";

export default function Parent() {
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
