import React, {useContext} from 'react'
import CharacterCard from '../../components/ChatacterCard/CharacterCard'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import './Favorites.css'

function Favorites() {

    //change to use global state
  //NOTE {} not []
  const {favorites} = useContext(FavoritesContext)
  return (
    <div className="favorites-container">
      <h1> My Favorite Characters</h1>
      <div className="favorite-characters">
        {
            // favorites.map(item=><p>{item.name}</p>)
            favorites.length > 0 ?
            favorites.map ((item=><CharacterCard key={item.id} character={item} />))
            :
            <p>No favorites selected yet</p>
        }
        </div>
    </div>
  )
}

export default Favorites