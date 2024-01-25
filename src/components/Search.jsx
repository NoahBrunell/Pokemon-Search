// import React from 'react'
// import { useEffect, useState } from 'react';

export default function Search() {
  // const [pokemonData, setPokemonData] = useState([]);

  // const fetchData = async () => {
  //   let array = []
  //   for (let i = 1; i < 1000; i++) {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  //     const data = await response.json()
  //     array.push(data)
  //   }
  //   setPokemonData(array)
  //   console.log(pokemonData);
  //   console.log();
  // }

  // useEffect(() => {
  //   fetchData()
  // }, []);

  const searchPokemon = async () => {
    const pokemon = document.getElementById('input').value.toLowerCase()
    try {
      if (pokemon) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        console.log(data);
        document.getElementById('resultImg').src = data.sprites.front_default
        document.getElementById('resultName').innerText = data.name
        document.getElementById('resultExp').innerText = data.base_experience
        document.getElementById('resultImg').classList = 'w-80 h-80'
        document.getElementById('resultName').classList = ''
        document.getElementById('resultExp').classList = ''
      }
    } catch {
      console.error('404');
    }
  }

  return (
    <div className=" w-fit h-fit flex flex-col">
        <div>
          <button onClick={searchPokemon} className=" w-20 h-8 rounded-3xl rounded-r-none bg-emerald-500 hover:bg-emerald-400 my-12">🔎</button>
          <input id='input' className=' w-[500px] h-8 rounded-3xl rounded-l-none border-none bg-emerald-300 hover:bg-emerald-200 my-12 placeholder:text-sky-500 placeholder:font-medium placeholder:text-lg placeholder:pl-4 ' placeholder="Pokemon Search" />
        </div>
        <div id='pokemons' className='pokemons w-full flex flex-col items-center'>
          <img className="w-80 h-80 hidden" id="resultImg" src=""/>
          <h2 className="hidden" id="resultName"></h2>
          <p className="hidden" id="resultExp"></p>
        </div>
    </div>
  )
}
