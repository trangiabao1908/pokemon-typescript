import React, { useContext, useEffect } from 'react';
import './pokemon.css';
import { PokemonContext } from '../context/PokemonProvider';
import { PokemoncontextType } from '../context/PokemonProvider';
type Props = {
   name: string;
   id: number;
   img: string;
   abilities:
      | {
           name: string;
           ability: string;
        }[]
      | undefined;
   onClick: (id: number) => void;
};
const PokemonList: React.FC<Props> = (props) => {
   const { name, img, id, abilities, onClick } = props;
   const { detail, setDetail } = useContext(PokemonContext) as PokemoncontextType;
   const [isSelected, setSelected] = React.useState<boolean>(false);
   useEffect(() => {
      setSelected(id === detail?.id);
   }, [detail, id]);
   const handleCloseDetail = () => {
      setDetail({
         id: 0,
         isOpened: false,
      });
   };
   return (
      <div className="" onClick={() => onClick(id)}>
         {isSelected ? (
            <section className="pokemon-list-detailed">
               <div className="detail-container">
                  <p className="detail-close" onClick={handleCloseDetail}>
                     X
                  </p>
                  <div className="detail-info">
                     <img src={img} alt="pokemon" className="detail-img" />
                     <p className="detail-name"> {name}</p>
                  </div>
                  <div className="detail-skill">
                     <p className="detail-ability"> Ablities: </p>
                     {abilities?.map((ab: any) => {
                        return <div className=""> {ab.ability.name}</div>;
                     })}
                  </div>
               </div>
            </section>
         ) : (
            <section className="pokemon-list-container">
               <p className="pokemon-name">{name}</p>
               <img alt="" src={img}></img>
            </section>
         )}
      </div>
   );
};

export default PokemonList;
