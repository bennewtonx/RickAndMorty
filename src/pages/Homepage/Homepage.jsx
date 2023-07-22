import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from './../../components/ChatacterCard/CharacterCard';
import Search from '../../components/Search/Search';

function Homepage() {
    //create state for characters
    const [characters, setCharacters] = useState([])
    //this page shows characters when it loads

    useEffect(
        ()=>{
            //make API call to get character data
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                console.log(res.data.results)
            //I have data, where do I store it?
            //stoe in state
            setCharacters(res.data.results)

            })
            .catch(err => console.log(err))
            
        }, [] //empty array [] means run once when page loads
    )

  return (
    <div className='homepage-container'>
        <Search setCharacters={setCharacters} />
        <h1>Main Characters</h1>

        <div className='characters-container'>
            {
                 characters.map(item => <CharacterCard 
                    key={item.id} character={item}/>)   

                //characters.map(item => <p key={item.id}>{item.name}</p>)   
            }
        </div>
    </div>
  )
}

export default Homepage