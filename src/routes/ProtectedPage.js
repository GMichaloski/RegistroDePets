import React from "react";
import PetForm from "../components/PetForm";
// import { useEffect } from "react";
// import { listPets } from "../services/pets";

export default function ProtectedPage() {
  return (
    <div>
      <h2>Cadastre seu pet!</h2>
      <PetForm />
    </div>
  );
}
