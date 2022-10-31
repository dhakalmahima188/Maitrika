import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

export default function MyVital(props) {
  const [height, setheight] = useState("");

  const [weight, setweight] = useState("");

  const { onCancel } = props;

  const submit = () => {
    if (!height || !weight) {
      alert("Blank detected");
    } else {
     console.log('sucess')
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <div className='vital_form'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              size="lg"
              value={height}
              onChange={(e) => {
                setheight(e.target.value);
              }}
              placeholder=" Enter Height"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              size="lg"
              value={weight}
              type="number"
              onChange={(e) => {
                setweight(e.target.value);
              }}
              placeholder="Enter Weight"
            />
          </Form.Group>
        
        


          </div>
        </Form>

      </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              submit();
              onCancel();
            }}
          >
            ADD
          </Button>
          <Button variant="danger" onClick={onCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
