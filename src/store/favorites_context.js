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
    setuserFavorites((prevUserFavorites)=>{
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHnadler(meetupId) {
    setuserFavorites(prevUserFavorites =>{
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
    
  }
  function itemsFavoriteHnadler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId); 
  }

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

