import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
    const { book } = useContext(BookContext);
    return book.length ? (
        <div className="book-list">
           
            <ul >
                {
                    book.map(book => {
                        return (<BookDetail book={book} key={book.id}></BookDetail>);
                    })}
            </ul>
        </div>
    ) : (
            <div className="empty">No Books to read. Hello free time :) </div>
        )
};

export default BookList;