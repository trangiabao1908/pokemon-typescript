import React, { useEffect, useContext } from 'react';
import './App.css';
import axios from 'axios';
import { Pokemon } from './interface';

import { PokemonContext } from './context/PokemonProvider';
import { PokemoncontextType } from './context/PokemonProvider';
import PokemonCollection from './components/PokemonCollection';
interface Pokemons {
   name: string;
   url: string;
}
const App: React.FC = () => {
   const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
   const [loading, setLoading] = React.useState<boolean>(true);
   const [nextUrl, setNextUrl] = React.useState<string>();
   const { detail } = useContext(PokemonContext) as PokemoncontextType;
   const getPoke = async () => {
      const res = await axios.get(` https://pokeapi.co/api/v2/pokemon?limit=20&offset=20
      `);

      res.data.results.forEach(async (pokemon: Pokemons) => {
         const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
         setPokemons((pre) => [...pre, poke.data]);
      });

      setNextUrl(res.data.next);
      setLoading(false);
   };
   useEffect(() => {
      getPoke();
   }, []);
   const handleLoadMore = async () => {
      setLoading(true);
      const res = await axios.get(`${nextUrl}`);
      res.data.results.forEach(async (pokemon: Pokemons) => {
         const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
         setPokemons((prev) => [...prev, poke.data]);
         setLoading(false);
      });
   };
   return (
      <React.Fragment>
         <div className="container">
            <header className="pokemon-header">Pokemon</header>
            <PokemonCollection pokemons={pokemons}></PokemonCollection>
            {!detail.isOpened && (
               <div className="btn">
                  <button onClick={handleLoadMore}>{loading ? `Loading...` : 'Load More'}</button>
               </div>
            )}
         </div>
      </React.Fragment>
   );
};

export default App;
