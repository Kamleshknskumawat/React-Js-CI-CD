import React, { useContext } from 'react';
import { BookContext } from './BookContext';

const BookNavBar = () => {
     const { book } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Ninja Reading list</h1>
           <p>Currenly you have {book.length} book get through...</p> 
        </div>
    );
};

export default BookNavBar;