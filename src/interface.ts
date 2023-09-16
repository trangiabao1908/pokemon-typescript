export interface Pokemon {
   name: string;
   id: number;
   sprites: {
      front_default: string;
   };
}
export interface DetailPokemon extends Pokemon {
   abilities?: {
      ability: string;
      name: string;
   }[];
}
