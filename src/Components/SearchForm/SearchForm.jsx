import React,{useState,useEffect,useRef} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useGlobalContext} from '../../context.jsx'
import './SearchForm.css';

function SearchForm() {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText= useRef('');  //input value
  const navigate =useNavigate();  //in order to handle the routing

  useEffect(()=> searchText.current.focus(), []);  //as soon as the compnent is visible, user can enter the value in it 
  const handleSubmit = (e)=>{
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();  //removing the white spaces 
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  }
 



  return (
    <div className='search-form'>
      <div className='container'>
        <div  className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='The Lost World...' ref={searchText}/>
              <button type="submit" className='flex flex-c' onClick={handleSubmit}>
              <FaSearch className='text-purple' size = {32} />
              </button>
            </div>
          </form>
        </div>
      </div>  
    </div>
  )
}

export default SearchForm
