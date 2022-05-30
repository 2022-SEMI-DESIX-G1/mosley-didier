const axios = require('axios').default;

let nom = "pikachu";

axios.get(`https://pokeapi.co/api/v2/pokemon/${nom}`)
  .then(function (response) {
    // handle success
    const nombre = response.data.name;
    const id = response.data.id;
    const altura= response.data.height;
    const peso = response.data.weight;
    let info = `Nombre:\n ${nombre}\nID: \n ${id}\nAltura:\n ${altura}\nPeso:\n ${peso}`;
    console.log(info);
    const evo = response.data.species.url;
    // console.log(evo);
    getAbilities(evo);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log('Nothing else to do.')
  });

function getAbilities(res) {
  axios.get(res)
    .then(function (response) {
      // handle success
      console.log(response.data.evolution_chain.url);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}