import React, {useState, useEffect} from "react";
import Button from "../components/calculator/Button"

const Calculator = ()=>{
  const [equations,setEquations] = useState("");
  const [screen,setScreen] = useState("0");
  const [number,setNumber] = useState("0");

  useEffect(()=>{
    if(screen.length>12){
      setScreen(screen.substr(1))
    }
  },[screen])

  const handleScreen = (e)=>{
    const numbers = "0123456789.";
    const copyEquations = equations;
    const copyNumber = number;
    const copyScreen = screen;

    if(copyScreen === "0" && (numbers.includes(e)|| e==="-")){
      setNumber(e)
      setScreen(e)
    }else if(numbers.includes(e)){
      setNumber(number+e)
      setScreen(copyScreen+e)
    }else{
      setEquations([...copyEquations,copyNumber,e]);
      setScreen(copyScreen+e);
      setNumber("");
    }
  }

  const handleComputation = ()=>{
    let copyEquations = equations;
    const copyNumber = number;
    
    if(number!==""){
      copyEquations = [...copyEquations,copyNumber]
      setEquations(copyEquations);
      setNumber("");
    }

    while(copyEquations.indexOf("-")>0){
      const indexOfMultiply = copyEquations.indexOf("-")
      let num = copyEquations[indexOfMultiply+1];
      
      num = "-"+num;

      copyEquations.splice(indexOfMultiply,1,"+")
      copyEquations.splice(indexOfMultiply+1,1,num)
    }
    
    while(copyEquations.indexOf("*")>0){
      const indexOfMultiply = copyEquations.indexOf("*")
      const num1 = copyEquations[indexOfMultiply-1];
      const num2 = copyEquations[indexOfMultiply+1];
      copyEquations.splice(indexOfMultiply-1,3,num1*num2)
    }

    while(copyEquations.indexOf("/")>0){
      const indexOfMultiply = copyEquations.indexOf("/")
      const num1 = copyEquations[indexOfMultiply-1];
      const num2 = copyEquations[indexOfMultiply+1];
      copyEquations.splice(indexOfMultiply-1,3,num1/num2)
    }
    
    while(copyEquations.indexOf("+")>0){
      const indexOfMultiply = copyEquations.indexOf("+")
      const num1 = copyEquations[indexOfMultiply-1];
      const num2 = copyEquations[indexOfMultiply+1];
      copyEquations.splice(indexOfMultiply-1,3,parseFloat(num1)+parseFloat(num2))
    }

    const output = copyEquations[0].toString()
    setEquations("");
    setNumber(output);
    setScreen(output);
  }


  const handleClear = ()=>{
    setEquations("");
    setScreen("0");
    setNumber("0")
  }

  return(
    <div className="vh-100 d-flex align-items-center">
      <div className="w-25 m-auto border bg-black">
        <div className="px-3 pt-2">
          <h3 className="border px-2 h-25">{screen}</h3>
        </div>
        <div className="row w-100 mx-auto">
        <Button
          className="w-100 border text-center py-2"
          label="Clear"
          setValue = {handleClear}
        />
        <Button
          className="w-25 border text-center py-2"
          label="7"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="8"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="9"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="+"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="4"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="5"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="6"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="-"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="1"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="2"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="3"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="*"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="0"
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="."
          setValue = {handleScreen}
        />
        <Button
          className="w-25 border text-center py-2"
          label="="
          setValue = {handleComputation}
        />
        <Button
          className="w-25 border text-center py-2"
          label="/"
          setValue = {handleScreen}
        />
      </div>
    </div>

    </div>
  )
}

export default Calculator;