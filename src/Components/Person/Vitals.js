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
  const [birth_date, setbirth_date] = useState("");


  const { onCancel } = props;

  const submit = () => {
    if (!height || !weight) {
      alert("Blank detected");
    } else {
      console.log("sucess");
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
          <Modal.Title id="contained-modal-title-vcenter">Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="vital_form">
              <Form.Group className="option_area">
              <h1 id='labels'>Gender</h1>
                {/* <Form.Control size="lg" placeholder=" Gender" /> */}

                <Form.Select size="lg" aria-label="Default select example">
                  {/* <option>Gender</option> */}
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
              <h1 id='labels'> Height</h1>
                <Form.Control
                  size="lg"
                  value={height}
                  onChange={(e) => {
                    setheight(e.target.value);
                  }}
                  placeholder=" Enter Height"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              > <h1 id='labels'> Weight</h1>
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                   
                   <h1 id='labels'> Birth Date</h1>
                    <Form.Control
                  size="lg"
                  value={birth_date}
                  type="date"
                  onChange={(e) => {
                    setbirth_date(e.target.value);
                  }}
                
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
