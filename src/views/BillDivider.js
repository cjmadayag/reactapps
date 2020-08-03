import React from "react";
import {Card,CardHeader,CardBody} from "reactstrap";
import {AmountInput,PersonInput,Persons} from "../components/billDivider/";

const BillDivider = ()=>{
  const [amount, setAmount] = React.useState(0);
  const [name,setName] = React.useState("");
  const [share,setShare] = React.useState("");
  const [persons, setPersons] = React.useState([["john",123],["alpha",33]]);

  const handleAddPerson = ()=>{
    setPersons([...persons,[name,share]]);
  }

  return(
    <Card className="col-6 offset-3">
    <CardHeader>
        <h1 className="text-center">Bill Divider</h1>
    </CardHeader>
    <CardBody className="d-flex flex-column mx-auto">

        <AmountInput
          amount = {amount}
          setAmount = {setAmount}
        />
        <hr className="w-100"/>
        <Persons
          persons = {persons}
        />

        <PersonInput
          setName = {setName}
          name = {name}
          setShare = {setShare}
          share = {share}
          handleAddPerson = {handleAddPerson}
        />
    </CardBody>
    </Card>
  )
}

export default BillDivider;