import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
    return (
        <div className="holder">
            <Navbar/>
            <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
            <p className='header-text fs-18 fw-3'>
            Welcome to BookBrowser – your ultimate destination
            for exploring the world of literature. Whether 
            you're searching for your next favorite novel, 
            looking up a specific author, or diving into a
             new genre, we’ve got you covered. With a vast
            collection of books across all categories– our
            platform makes it easy to discover,and  review the books .
             Simply search by title,
             author, or ISBN, and immerse yourself in the endless 
             possibilities that await. Start your reading adventure
             with us today!</p>
             <SearchForm />
            </div>

        </div>

    )
}
export default Header
