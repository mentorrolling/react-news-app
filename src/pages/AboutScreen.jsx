import React,{useState } from "react";

import { useGetPokemonByNameQuery } from "../services/pokemon";

const AboutScreen = () => {

const [inputValue, setInputValue] = useState('')
const [pokemon, setPokemon] = useState('pikachu')

 //estado que maneje el input
 //estado que almacene el nombre del pokemon useState=pokemon
  const { data, error, isFetching } = useGetPokemonByNameQuery(pokemon);

  // console.log(data);
  // console.log(error);
  // console.log(isFetching);

  const handleEnter=(e)=>{

    if(e.keyCode===13 && inputValue.length>3){
      
      setPokemon(inputValue)
      setInputValue('')
  }
  }

const handleChange=(e)=>{
// console.log(e.target);
  setInputValue(e.target.value)
}

  //funcion que controle cuando cambie el input
  //funcion que cuando le de enter almacene lo del input en el estado pokemon 

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <h1>Pokemon Api</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 text-center">
        <input 
        type="text" 
        className="form-control" 
        placeholder='Nombre de pokemon...'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
        />

          {error ? (
            <h4>No se consiguió la info</h4>
          ) : isFetching ? (
            <h4>Cargando Data...</h4>
          ) : (
            <div className="mt-3">
              <h3>{data.species.name}</h3>
              <img src={data.sprites.front_default} />
              <div className="card">
                <div className="card-body">
                  <h4>Habilidades</h4>
                  {data.abilities.map((habilidad, index) => (
                    <p key={index}>{habilidad.ability.name}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
