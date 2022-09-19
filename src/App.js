import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useState, useEffect } from 'react'

function App() {
const [list, setlist] = useState([]);
const [listFilter, setlistFilter] = useState([]);
const [inputValue, setInputValue] = useState('');

useEffect(()=>{
  const getList = JSON.parse(localStorage.getItem('GroceryList'));
  setlist(getList);
},[])


const addItem = (newItem) => {
  if(!newItem) return
  const item = {
    name: newItem,
    checked: false,
    id: Math.random() * 100
    }

  setlist([...list, item]);
  localStorage.setItem('GroceryList', JSON.stringify([...list, item]));
}

const handleItems = (e) => {
  e.preventDefault();
  addItem(inputValue);
  setInputValue('')
}

const handleDelete = (id) => {
  const filterArray = list.filter(items => items.id !== id)
  setlist(filterArray)
  localStorage.setItem('GroceryList', JSON.stringify(filterArray));
}

const handleCheck = (checked, id) => {
  const item = list.filter(item => item.id === id)[0];
  item.checked = checked
  localStorage.setItem('GroceryList', JSON.stringify(list));
}

const handleFilter = (value) =>{
  if(!value) return setlistFilter([])
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
      handleFilter={handleFilter}
      handleDelete={handleDelete}
      handleCheck={handleCheck}
      />
      <Footer />
    </div>
  );
}

export default App;
