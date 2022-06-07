import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import ListOfBooks from './components/ListOfBooks';

function App() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ListOfBooks bookList={books} />} />
        <Route path="/Categories" element={<Categories author="Jhon Snow" />} />
      </Routes>
    </div>
  );
}

export default App;
