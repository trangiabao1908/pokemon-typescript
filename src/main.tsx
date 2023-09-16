import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import PokemonProvider from './context/PokemonProvider.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
   <PokemonProvider>
      <App />
   </PokemonProvider>,
);
