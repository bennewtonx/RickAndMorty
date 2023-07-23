import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './CharacterDetails.css'

function CharacterDetails() {
    //page will show details for specific character
    //will use the 'id' in url
    //needs to be extracted and passed - hook
    //useParams to get id
    const {characterId} = useParams()

    //need to show character info when page loads
    //https://rickandmortyapi.com/api/character/2

    //create state to hold details for characters
    const [character, setCharacter] = useState('')

    useEffect(
        ()=>{
            //call API to get data
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {
                setCharacter(res.data)
            })
            //have Data, need to store in state to display

            .catch((err => console.log(err)))
        }, [] //runs once when page loads
        
    )

  return (
    <div className='details-container'>
        <img src={character.image} />
        <div className='container-info'>
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
            <p>Status: {character?.status}</p>
        </div>

    </div>


  )
}

export default CharacterDetails