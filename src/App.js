import React from 'react';
import './App.css';
import AddNewBook from './Screens/BookProject/AddNewBook';
import BookContextProvider from './Screens/BookProject/BookContext';
import BookList from './Screens/BookProject/BookList';
import BookNavBar from './Screens/BookProject/BookNavBar';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <MyThemeContext>
          <AuthContextProvider>
            <NavBar />
            <ProgrammingList />
            <ToggleButton />
            <Songs />
          </AuthContextProvider>
        </MyThemeContext> */}

      {/* book */}
      <BookContextProvider>
        <BookNavBar />
        <BookList />
        <AddNewBook />
      </BookContextProvider>

      {/* </header> */}
    </div>
  );
}

export default App;
