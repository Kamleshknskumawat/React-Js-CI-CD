import React, { useContext } from 'react';
import { BookContext } from './BookContext';

const BookDetail = ({ book }) => {
    //  const { removeBook } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    return (
        // <li onClick={() => removeBook(book.id) }>
        //     <div className="title">{book.title}</div>
        //     <div className="author">{book.author}</div>
        // </li>

        <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}

export default BookDetail;