import React, { useContext, useState } from 'react'
import { BookContext } from './BookContext';
function AddNewBook() {
    //  const { addBook } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const onSubmitBook = (e) => {
        e.preventDefault();
        console.log(e);
        // addBook(title, author);
        dispatch({
            type: 'ADD_BOOK', book: {
                title, author
            }});
        setTitle("");
        setAuthor("");
    }



    return (
        <div className="form-song">
            <form onSubmit={onSubmitBook}>
                <label>Book Name:</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                <input type="text" value={author} required onChange={(e) => setAuthor(e.target.value)}></input>
                <input type="submit" value="Add Book" />

            </form>

        </div>
    )

}
export default AddNewBook;