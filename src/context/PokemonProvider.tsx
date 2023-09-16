import React, { createContext } from 'react';
export interface Detail {
   id: number;
   isOpened: boolean;
}
interface Props {
   children: React.ReactNode;
}
export interface PokemoncontextType {
   detail: Detail;
   setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}
export const PokemonContext = createContext<PokemoncontextType | null>(null!);
const PokemonProvider: React.FC<Props> = ({ children }) => {
   const [detail, setDetail] = React.useState<Detail>({
      id: 0,
      isOpened: false,
   });
   return <PokemonContext.Provider value={{ detail, setDetail }}>{children}</PokemonContext.Provider>;
};

export default PokemonProvider;
