import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import baby from '../../assets/baby.jpg'

export default function MyVital(props) {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [birth_date, setbirth_date] = useState("");

  const { onCancel,child_name } = props;
  console.log('name',child_name);

  const submit = () => {
    if (!height ) {
      alert("Blank detected");
    } else {
        props.addvitaldetail(height,weight,birth_date)
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
                <h1 id="labels">Gender</h1>
                {/* <Form.Control size="lg" placeholder=" Gender" /> */}

                <Form.Select size="lg" aria-label="Default select example">
                  {/* <option>Gender</option> */}
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <h1 id="labels"> Height</h1>
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
              
              >
                {" "}
                <h1 id="labels"> Weight</h1>
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
             
              >
                <h1 id="labels"> Birth Date</h1>
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
      {props.vitaldetails.map((detail) => {
        return (
          <>
          <div style={{ width: "20rem" }}>
            <Card style={{ flex:1}} >
              <Card.Header>
              <b> {child_name}</b> {" "}
              </Card.Header>
              <Card.Body>

              <img src={baby} className="baby_img"></img>
            
                <Card.Title>  <br></br><b>Height: </b>{detail.height}{" "}ft</Card.Title>
                <Card.Title><b>Weight: </b>{detail.weight}{" "}kg</Card.Title>
                <Card.Title><b>Birth Date:</b> {detail.birth_date}</Card.Title>
            
              
              </Card.Body>
            </Card>
            </div>
            <br></br>
          </>
        );
      })}
    </>
  );
}
