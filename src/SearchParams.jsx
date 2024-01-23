import { useState, useEffect } from "react"
import Pet from "./Pet"
import useBreedList from "./useBreedList"

const ANIMALS = ["dog", "cat", "bird", "rabbit", "reptile"]
const URL = "http://pets-v2.dev-apis.com"

const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)

  useEffect(() => {
    requestPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function requestPets() {
    const res = await fetch(
      `${URL}/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await res.json()
    setPets(json.pets)
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          requestPets()
        }}
      >
        <label htmlFor="location">
          <input
            value={location}
            id="location"
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          <select
            name="animal"
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed("")
            }}
            value={animal}
          >
            <option />
            {ANIMALS.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          <select
            name="breed"
            id="breed"
            disabled={breeds.length === 0}
            onChange={(e) => {
              setBreed(e.target.value)
            }}
            value={breed}
          >
            <option />
            {breeds.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  )
}

export default SearchParams
