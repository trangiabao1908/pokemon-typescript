import React, { useContext } from 'react';
import PokemonList from './PokemonList';
import './pokemon.css';

import { PokemonContext } from '../context/PokemonProvider';
import { PokemoncontextType } from '../context/PokemonProvider';
import { DetailPokemon } from '../interface';
type Props = {
   pokemons: DetailPokemon[];
};

const PokemonCollection: React.FC<Props> = (props) => {
   const { pokemons } = props;
   const { detail, setDetail } = useContext(PokemonContext) as PokemoncontextType;
   const selectPokemon = (id: number) => {
      if (!detail.isOpened) {
         setDetail({
            id: id,
            isOpened: true,
         });
      }
   };
   return (
      <React.Fragment>
         <section className={detail.isOpened ? 'collection-container-active' : 'collection-container'}>
            {detail.isOpened ? <div className="overlay"></div> : <div className=""></div>}
            {pokemons.map((pokemon) => (
               <React.Fragment key={pokemon.id}>
                  <PokemonList
                     onClick={selectPokemon}
                     name={pokemon.name}
                     id={pokemon.id}
                     abilities={pokemon.abilities}
                     img={pokemon.sprites.front_default}
                  />
               </React.Fragment>
            ))}
         </section>
      </React.Fragment>
   );
};

export default PokemonCollection;
