import React from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from './../../components/ChatacterCard/CharacterCard';

function Episodes() {

  const [options, setOptions] = React.useState([])
  const [selectedOption, setSelectedOption] = React.useState(1)
  const [selectedEpisode, setSelectedEpisode] = React.useState(``)
  const [characterList, setCharacterList] = React.useState([])
  //when an episode is selected we want to show 
  //characters in that episode

  //get API Call from link 
    //https://rickandmortyapi.com/api/episode

    React.useEffect(
      ()=>{
        axios.get(`https://rickandmortyapi.com/api/episode`)
        .then( res => {
              console.log(res.data.info.count)
              //create an array of numbers from 1 - X
              const newOptions = [];
              for (let i = 1; i <= res.data.info.count; i++) {
                newOptions.push(i)
              }
            console.log(newOptions)
            //store in state
            setOptions(newOptions)
            })
        .catch(err => console.log(err))


      }, [] //run once when page loads
    )

    React.useEffect(
      ()=>{
            //get data from API
            //https://rickandmortyapi.com/api/episode/28
            fecthEpisodeData()

      }, [selectedOption]
    )

    const fecthEpisodeData = async () => {
      try{
      //make API call for selected episode
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
      setSelectedEpisode(res.data)
      console.log(res.data.characters)

     
        const episodeCharacters =  await Promise.all( 
          res.data.characters.map(url => {
          return axios.get(url). then(res => res.data)
        })
        //store in state
      )
        console.log(episodeCharacters)
        setCharacterList(episodeCharacters)


      }
      catch (err){
        console.log(err)
      }
}

    const handleSelectChange = (e) => {
        console.log(e.target.value)
        //save value as needed, save in state
        setSelectedOption(e.target.value)
    }

  return (
    <div className='episodes-container'>
      <div>
        <label htmlFor="select-episode">Select an episode</label>
        <select id="select-episode" onChange={handleSelectChange}>
          {
            options.map(num => <option key = {num} value={num}>{`Episode ${num}`}</option>)
          }

        </select>
      </div>

      <div>
        <div className='episode-info'>
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className='character-container'>
          {
        characterList.map(item => <CharacterCard 
                    key={item.id} character={item}/>)  
        } 
        </div>
      </div>

    </div>
  )
}

export default Episodes