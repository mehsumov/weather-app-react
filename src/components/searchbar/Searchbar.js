import React, { useRef } from 'react'
import * as weatherActions from "../../redux/actions/weatherActions"
import "./Searchbar.css"
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';

const Searchbar = () => {
  const inputElement = useRef()
  const dispatch = useDispatch()
  const handleSubmit=(e)=>{
    dispatch(weatherActions.getWeatherData(null,null,inputElement.current.value));
    e.preventDefault()
  }
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <input ref={inputElement} className='search form-control' type="text" placeholder='Write city name' />
        <button type="submit"><FiSearch/></button>
    </form>
  )
}

export default Searchbar