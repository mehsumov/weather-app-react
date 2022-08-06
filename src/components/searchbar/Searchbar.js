import React, { useEffect, useRef } from 'react'
import * as weatherActions from "../../redux/actions/weatherActions"
import { useSelector } from "react-redux";
import "./Searchbar.css"
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';

const Searchbar = () => {

  const weatherMainData = useSelector((state) => state.weatherDataReducer);
  
  const inputElement = useRef()
    useEffect(() => {
      inputElement.current.value=""
    },[weatherMainData]);
  const dispatch = useDispatch()
  const handleSubmit=(e)=>{
    if(inputElement.current.value!==""){
          dispatch(weatherActions.getWeatherData(null,null,inputElement.current.value));
    }else{
      alert('Write city name please')
    }

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