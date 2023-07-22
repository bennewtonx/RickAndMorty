import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    //create state for search data
    const [query, setQuery] = React.useState('')

    const handleSubmit = (e) => {
        //stop form from refreshing page
        e.preventDefault()
        console.log('search for', query)
        //show characters that match query

        //make API call to get data
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res=>{
            console.log(res.data.results)
            //data fetched from API, changing setCharacters
            setCharacters(res.data.results)
        })
        .catch(err=> {console.log(err.response.status)
            if (err.response.status === 404) {
                alert(`There is no character names ${query}`)
            }
                else {console.log(err)}
        })
    //cleat searchbox
    setQuery('')
        
    }

  return (
    <form className='search-container' onSubmit={handleSubmit}>
        <input type="text" value={query} placeholder="Search all characters" 
        onChange={(e)=>setQuery(e.target.value)}/>
    </form>
  )
}

export default Search