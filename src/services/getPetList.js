import React, { useEffect, useState } from "react";
import { getPets } from "./pets";

export default function Parent() {
  const [pets, petList] = useState("");

  useEffect(() => {
    const request = async () => {
      const response = await getPets();
      console.log(response);
      petList(response.data.pets);
    };
    request();
  }, []);
  console.log(pets);
  return pets;
}
