import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import ListOfBooks from './components/ListOfBooks';
import { retrieveBooks } from './redux/books/books';
import appId from './appId';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    appId();
    const id = JSON.parse(localStorage.getItem('appId'));
    dispatch(retrieveBooks(id));
  }, []);
  const books = useSelector((state) => state.books);
  return (
    <div>
      <Header />
      <div className="line" />
      <Routes>
        <Route path="/" element={<ListOfBooks bookList={books} />} />
        <Route path="/Categories" element={<Categories author="Jhon Snow" />} />
      </Routes>
    </div>
  );
}

export default App;
