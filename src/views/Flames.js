import React from 'react';
import {Row,Col,Card,CardTitle,CardText,Button} from "reactstrap";
import {InputBox,ModalBox} from "../components/flames/";

function Flames() {
  const [name1, setName1] = React.useState("");
  const [name2, setName2] = React.useState("");
  const [showModal,setShowModal] = React.useState(false);
  const [result,setResult] = React.useState("");

  const handleCalculation = ()=>{
    const name1Array = name1.toLowerCase().split("");
    const name2Array = name2.toLowerCase().split("");

    const name1Chars = [];
    const name2Chars = [];

    name1Array.forEach((char)=>{
      if(name2Array.includes(char) && char!==" "){
        name2Chars.push(char)
      }
    })

    name2Array.forEach((char)=>{
      if(name1Array.includes(char) && char!==" "){
        name1Chars.push(char)
      }
    })

    const nameTotal = name1Chars.length + name2Chars.length

    switch(nameTotal%6){
      case 1:
        setResult("Friends");
        break;
      case 2:
        setResult("Lovers");
        break;
      case 3:
        setResult("Acquaintances");
        break;
      case 4:
        setResult("Marriage");
        break;
      case 5:
        setResult("Enemies");
        break;
      default:
        setResult(nameTotal!==0 ? "Soulmate" : "No match");
        break;
    }
    setShowModal(true);
  }

  return (
    <div className="">
      <Row>
        <Col sm="8" md="6" xl="4" className="m-auto vh-100 d-flex align-items-center">
          <Card body>
            <CardTitle><h3 className="text-center">WELCOME TO FLAMES</h3></CardTitle>
            <CardText className="text-center">
              The rule is very simple. Just type your crush's full name and your full name then click the submit button to show the result.
            </CardText>
            <h4>Love Calculator</h4>
            <InputBox
              label1="Enter your crush's name"
              label2="Name is"
              setName={setName1}
              name={name1}
            />
            <InputBox
              label1="Enter your full name"
              label2="Your name is"
              setName={setName2}
              name={name2}
            />
            <Button
              size="md"
              color="success"
              className="text-white w-25 mx-auto"
              onClick={handleCalculation}
            >
              Calculate
            </Button>

          </Card>
        </Col>
        <ModalBox
          showModal = {showModal}
          setShowModal = {setShowModal}
          result = {result}
          setName1={setName1}
          setName2={setName2}
        />
      </Row>
    </div>
  );
}

export default Flames;