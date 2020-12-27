import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from './BookReducer';
export const BookContext = createContext();
const BookContextProvider = (props) => {
    // const [book, setBooks] = useState([
    //     {
    //         title: "dear stranger", author: "aashish", id: 1
    //     },
    //     {
    //         title: "dear stranger", author: "aashish", id: 2
    //     },
    //     {
    //         title: "dear stranger", author: "aashish", id: 3
    //     }
    // ]);

    const [book, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem("book");
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('book', JSON.stringify(book))
    }, [book]);

    // const addBook = (title, author) => {
    //     setBooks([...book, { title, author, id: uuidv4() }])
    // }

    // const removeBook = (id) => {
    //     setBooks(book.filter(book => book.id !== id))
    // }

    return (
        // <BookContext.Provider value={{ book, addBook, removeBook }}>
        //     {props.children}
        // </BookContext.Provider>
        <BookContext.Provider value={{ book, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;


// import React, { createContext, useReducer } from 'react';
// import BookReducer from './BookReducer';


// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, dispatch] = useReducer(BookReducer, []);
//   return (
//     <BookContext.Provider value={{ books, dispatch }}>
//       {props.children}
//     </BookContext.Provider>
//   );
// }

// export default BookContextProvider;