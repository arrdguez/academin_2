import {createContext, useState} from 'react';


const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});


function FavoritesContextProvider(props){

  const [userFavorites, setuserFavorites] = useState([]);
  

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length
  };

  function addFavoriteHnadler(favoriteMeetup) {
    setuserFavorites(userFavorites.concat(favoriteMeetup));
  }
  function removeFavoriteHnadler() {
    
  }
  function itemsFavoriteHnadler(params) {
    
  }

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

