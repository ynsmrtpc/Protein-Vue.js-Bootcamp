let random = (total) => Math.floor(Math.random() * total);

async function getBreeds() {
  let dogs = await fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => data);
  let result = Object.keys(dogs.message);
  let randomNumber = random(result.length)
  let selected = result[randomNumber]
  getBreed(selected)
}
getBreeds()
async function getBreed(dogName) {
  let result = await fetch(`https://dog.ceo/api/breed/${dogName}/images`)
    .then(response => response.json())
    .then(data => data.message);
  console.log(result[random(result.length)])
}

/*
import axios from "axios"
let random = (total) => Math.floor(Math.random() * total);

async function getBreeds() {
  const species = await axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res => res.data)

  let result = Object.keys(species.message);
  let randomNumber = random(result.length)
  let selected = result[randomNumber]
  getBreed(selected)
}
getBreeds()

async function getBreed(selected) {
  const dog = await axios.get(`https://dog.ceo/api/breed/${selected}/images`)
  console.log(dog.data.message[random(dog.data.message.length)])
}

*/
