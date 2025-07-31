import { useState } from 'react';
import './App.css';

function App(){

const [weight, setWeight]=useState("");
const [height, setHeight]=useState("");
const [bmi, setBMI]=useState(null);
const [message, setMessage]=useState("");
const [bmiGroup, setBmiGroup]=useState("");


const calculateBMI=()=>{
  if(weight<=0 || height<=0){
    setMessage("Please enter a valid height and weight");
    return;
  }
  
  const heightInMetres=height/100;
  const bmiValue= (weight)/(heightInMetres*heightInMetres);
  setBMI(bmiValue.toFixed(2));

if(bmiValue<18.5){
  setMessage("You are underweight.");
  setBmiGroup("underweight");
}
else if(bmiValue>=18.5 && bmiValue<25){
  setMessage("You have a normal weight.");
  setBmiGroup("normal");
}
else if(bmiValue>=25 && bmiValue<30){
  setMessage("You are overweight.");
  setBmiGroup("overweight");
}
else{
  setMessage("You are obese");
  setBmiGroup("obese");
}
};


const reset=()=>{
  setHeight("");
  setWeight("");
  setBMI(null);
  setMessage("");
};

const BMIStyle=()=>{
  switch(bmiGroup){
  case "underweight":
    return{backgroundColor: '#DAA520', color: 'blanchedalmond'};
  case "normal":
    return{backgroundColor: '#228B22', color: 'blanchedalmond'};
  case "overweight":
    return{backgroundColor: '#E9967A', color: 'blanchedalmond'};
  case "obese":
    return{backgroundColor: '#8B0000', color: 'blanchedalmond'};
  }
}


return(
  <div className="entire">
    <h1>𓍝 BMI Calculator 𓍝</h1>

    <input 
    type="number" 
    placeholder="Enter your weight(kg)"
    value={weight}
    onChange={ (e)=> setWeight(parseFloat(e.target.value))}
    ></input>

    <input 
    type="number" 
    placeholder="Enter your height(cm)"
    value={height}
    onChange={(e)=>setHeight(parseFloat(e.target.value))}>
    </input>


    <button onClick={calculateBMI}>Calculate BMI</button>
    <button onClick={reset}>Reset</button>

    {bmi && (
      <div className="result" style= {BMIStyle()}>
        <h2>Your BMI: {bmi}</h2>
        <p>{message}</p>
      </div>
    )
    }
  </div>
);
}
export default App;