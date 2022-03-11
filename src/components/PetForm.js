import { postPets } from "../services/pets";

export default function PetForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      breed: formData.get("breed"),
      age: formData.get("age"),
      species: formData.get("species"),
      gender: formData.get("gender"),
      url: formData.get("url"),
    };
    postPets(data);
    console.log(data);
  };
  return (
    <form>
      <label>
        Nome:
        <input type="text" name="name" />
      </label>
      <label>
        Raça:
        <input type="text" name="breed" />
      </label>
      <label>
        Idade:
        <input type="number" name="age" />
      </label>
      <label>
        Espécie:
        <input type="text" name="species" />
      </label>
      <label>
        Gênero:
        <select>
          <option value="male">Macho</option>
          <option value="female">Fêmea</option>
        </select>
      </label>
      <label>
        Url da foto:
        <input type="text" name="name" />
      </label>
      <input type="submit" onSubmit={handleSubmit} value="Enviar" />
    </form>
  );
}
