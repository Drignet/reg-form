import names from '../file'
import {useState} from 'react'
import '../styles/SearchBar.css'

const SearchBar = (props) => {
  const [filterNames , setFilterNames] = useState('')
 
  const name = names.filter((name) => name.toLowerCase().includes(filterNames)).map((eachName) => <p className='names'>{eachName}</p>)
  
  const filterNamesFunc = (e) => {
    return (
      setFilterNames(e.target.value.toLowerCase())
      )
  }
  return (
    <main>
      <input type='text' placeholder='search name...' onChange={filterNamesFunc} />
      {name}
    </main>
    )
}

export default SearchBar