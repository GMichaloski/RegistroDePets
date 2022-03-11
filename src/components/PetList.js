import Parent from "../services/getPetList";

export default function PetList() {
  const { pets } = Parent();
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
