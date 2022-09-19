import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useState } from 'react'

function App() {
  const [list, setList] = useState([
    {
    name: 'Chocolates',
    checked: false,
    id:1
    },
    {
    name: 'Beer',
    checked: false,
    id:2
    },
    {
    name: 'Spicy Food',
    checked: false,
    id:3
    },
]);
const [listFilter, setlistFilter] = useState([]);
const [inputValue, setInputValue] = useState('');
const [filterValue, setFiltertValue] = useState('');

const addItem = (Item) => {
  const item = {
    name: Item,
    checked: false,
    id: list.length + 1
    }

  setList([...list, item]);
}

const handleItems = (e) => {
  e.preventDefault();
  addItem(inputValue);
  setInputValue('')
}

const handleFilter = (value) =>{
  setFiltertValue(value)
  
  const filterArray = list.filter(items => items.name.toUpperCase().indexOf(value.toUpperCase()) === 0);

  setlistFilter(filterArray)
}

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Content 
      list={list}
      listFilter={listFilter} 
      newItems={handleItems} 
      inputValue={inputValue} 
      setInputValue={setInputValue} 
      filterValue={filterValue} 
      handleFilter={handleFilter}
      />
      <Footer />
    </div>
  );
}

export default App;
