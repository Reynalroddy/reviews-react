import React from 'react';
import people from './data';
import Review from "./Review";
// import { FaFacebook } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [state,setState] = React.useState(people);

  let [current,setCurrent] = React.useState(0);
console.log(state)
console.log(current)
  let person = state[current];
  console.log(person);

  const checkNumber = (number)=>{

    if (number < 0){
let newNumber = state.length - 1 ;
return newNumber;
    }

        if (number > state.length - 1){
let newNumber = 0 ;
return newNumber;
    }
return number;

  }



  const prev = ()=>{
setCurrent((current)=>{
let newCurr = current - 1;

return checkNumber(newCurr)


})
  
  }

    const next = ()=>{
setCurrent((current)=>{
let newCurr = current + 1;
return checkNumber(newCurr)


})
  }



  return  <main>
<section className="">
  <div className="container">
    <div className="row">
  <div className="d-flex h-100 justify-content-center align-items-center w-100">
  <div className="col-7 mx-auto col-md-7 col-lg-7 text-center">
  <Review peeps = {person} prev = {prev} next = {next} ></Review>

  </div>
  </div>
    </div>
  </div>
</section>
  </main>

}

export default App;
