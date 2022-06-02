import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import ListOfBooks from './components/ListOfBooks';

function App() {
  const Books = [
    {
      author: 'Jhon Snow',
      title: 'Capuchino asuelto',
      id: '0',
    },
    {
      author: 'Shekopsky',
      title: 'Las hadas',
      id: '1',
    },
  ];
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ListOfBooks bookList={Books} />} />
        <Route path="/Categories" element={<Categories author="Jhon Snow" />} />
      </Routes>
    </div>
  );
}

export default App;
