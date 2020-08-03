import React from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from "reactstrap";

const ModalBox = ({showModal,setShowModal,result,setName1,setName2})=>{
  return(
    <Modal
      isOpen={showModal}
    >
      <ModalHeader>Result</ModalHeader>
      <ModalBody className="text-center">
        <h3>{result}</h3>
      </ModalBody>
      <ModalFooter>
        <Button 
          color="danger"
          onClick={()=>{
            setShowModal(false)
            setName1("")
            setName2("")
          }}
        >Close</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalBox;