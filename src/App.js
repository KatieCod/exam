import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import bread from "./bread.jpg"
import cow from "./cow.jpg"
import lime from "./lime.jpg"
import milk from "./milk.jpg"
import ItemCard from './itemCard';
import Form from './Form';

function App() {

  const [data, setData] = useState([
    {
      name: "bread",
      price: 5,
      image: bread,
      description: "the best bread that you can only see"
    },
    {
      name: "milk",
      price: 7,
      image: milk,
      description: "the best milky-milk that you can only see"
    },
    {
      name: "cow",
      price: 567,
      image: cow,
      description: "the best cowy-cow that you can only see"

    },
    {
      name: "lime",
      price: 10,
      image: lime,
      description: "the most sour lime in the world"
    }
  ])

  const [itemCard, setItemCard] = useState([])

  function handleClick(item) {
    setItemCard([item])
    console.log(itemCard)
  }

  function handleData(e) {
    const {name, value} = e.target;
    setData([...data, {[name]:value}])
  }

  function handleSubmit(e) {
    e.preventDefualt();

  }

  return (

    <div>
      <Header />
      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
          <h4>ITEMS</h4>
            {data.map(item => <h5 onClick={() => handleClick(item)}>{`${item.name} ${item.price}$`}</h5>)}
          </div>
          <div className='col'>
            <h4>ITEM DETAILS</h4>
          <ItemCard itemCard={itemCard}/>
          
          </div>
          <div className='col'>
          <h4>ADD ITEM</h4>

          <Form handleSubmit={handleSubmit} showname={handleData}/>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default App;
