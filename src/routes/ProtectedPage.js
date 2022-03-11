import React from "react";
import { useState } from "react";
import PetForm from "../components/PetForm";
// import { useEffect } from "react";
// import { listPets } from "../services/pets";

export default function ProtectedPage() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (submit) => {
    submit.preventDefault();
  };
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
      <PetForm />
    </div>
  );
}
