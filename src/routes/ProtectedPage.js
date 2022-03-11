import React from "react";
import PetForm from "../components/PetForm";
// import { useEffect } from "react";
// import { listPets } from "../services/pets";

export default function ProtectedPage() {
  // useEffect(() => {
  //   const request = async () => {
  //     const response = await listPets()
  //     console.log(response)
  //   }

  //   request()
  // })

  return (
    <div>
      <h2>Cadastre seu pet!</h2>
      {/* <PetForm /> */}
    </div>
  );
}
