import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const  Products =[
  {name: 'Chocolect' , Price:'$20.33'},
  {name: 'Chips' , Price:'$10.44'} ,
  {name: 'Ice-Cream' , Price:'$30.00'} ,
  {name: 'coco-cola' , Price:'$80.03'}]
  const list =[
    'Nushrat' , 'Ratul_H', 'Urmila' ,'Najmul','Shanzida' ,'Hridoy','M_Riya' ,'M.Sajal'
  ]
  return (
    <div className="App">
      <header className="App-header">
       <h1>REACT</h1>
       <p>I start It</p>
       <Counter></Counter>
       <Product name={Products[0].name} Price={Products[0].Price}></Product>
       <Product name={Products[1].name} Price={Products[1].Price}></Product>
       <Product name={Products[2].name} Price={Products[2].Price}></Product>
       <Product name={Products[3].name} Price={Products[3].Price}></Product>
      
       
      <ul>
        {
          list.map(list => <li>{list}</li>)
        }
        {
           Products.map( Product => <li>{ Product.name}</li>)
        }
      </ul>
     
      
      </header>
    </div>
  );
}
function Counter(){
  const [count , setCount ] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
       //easy style
      <button onMouseMove ={() => setCount(count + 1)}> Center </button>
      <button onClick ={() => setCount(count - 1)}>decrease</button>
    
    </div>
  )
}
function Users (){
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json ())
    .then(data => console.log(data))
  })
}
function Product(props){
  const ProductStyle={
    border: '1px solid black',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    color: 'black',
  }
return (
  <div style={ProductStyle}>
    <h3>{props.name}</h3>
    <h5>{props.Price}</h5>
    <button>Buy Now</button>
  </div>
)
}


export default App;
