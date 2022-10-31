import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Card from "react-bootstrap/Card";

// import Slider from "@mui/material/Slider";

export default function MyDetail(props) {
  const [temp, settemp] = useState("");

  const [weight, setweight] = useState("");

  const { onCancel } = props;

  const submit = () => {
    if (!temp ) {
      alert("Blank detected");
    } else {
      props.adddetail(temp);
      
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {" "}
                <h3 id="labels">Pulse Rate</h3>
                <Form.Control
                  size="lg"
                  value={temp}
                  type="number"
                  onChange={(e) => {
                    settemp(e.target.value);
                  }}
                  placeholder="Enter Pulse Rate"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <h3 id="labels">Body Color</h3>
                <Row>
                  <Col>
                    <div
                      className="body_color"
                      style={{ backgroundColor: "#F1C27D" }}
                    ></div>
                    <h6 id="labels">Proper</h6>
                  </Col>
                  <Col>
                    <div
                      className="body_color"
                      style={{ backgroundColor: "#FFDBAC" }}
                    ></div>
                    <h6 id="labels">Pale</h6>
                  </Col>
                  <Col>
                    <div
                      className="body_color"
                      style={{ backgroundColor: "#E0AC69" }}
                    ></div>
                    <h6 id="labels">Brownish</h6>
                  </Col>
                  <Col>
                    <div
                      className="body_color"
                      style={{ backgroundColor: "#f2d3e1" }}
                    ></div>
                    <h6 id="labels">Pinkish</h6>
                  </Col>
                  <Col>
                    <div
                      className="body_color"
                      style={{ backgroundColor: "#f7e8a9" }}
                    ></div>
                    <h6 id="labels">Yellowish</h6>
                  </Col>
                  <Col>
                    <Form.Control
                      size="lg"
                      type="color"
                      id="exampleColorInput"
                      defaultValue="#E0AC69"
                    />
                    <h6 id="labels">Pick_Color</h6>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {" "}
                <h3 id="labels">Body Temperature *C</h3>
                <Form.Control
                  size="lg"
                  value={temp}
                  type="number"
                  onChange={(e) => {
                    settemp(e.target.value);
                  }}
                  placeholder="Enter Temperature"
                />
                {/* <Slider
                 min={20}
                 max={40}
                  defaultValue={37}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                /> */}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {" "}
                <h3 id="labels">How often baby cries?</h3>
                <Form.Select aria-label="Default select example">
                  <option value="1">Normally</option>
                  <option value="2">Abnormally high</option>
                  <option value="3">Quite less</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {" "}
                <h3 id="labels">Teeth and Gums?</h3>
                <Form.Select aria-label="Default select example">
                  <option value="1">Normall</option>
                  <option value="2">Swelling</option>
                  <option value="3">Yellowish</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <h3 id="labels">Is Breastfeeding continued?</h3>

                <div className="mb-3">
                  <Form.Check type="checkbox" label={`Yes`} />
                  <Form.Check type="checkbox" label={`No`} />
                </div>
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


      {props.details.map((detail) => {
        return (
          <>
          <div style={{ width: "20rem" }}>
            <Card style={{ flex:1}} >
              <Card.Header>
                Detail <b>{detail.sn}</b>{" "}
              </Card.Header>
              <Card.Body>
                <Card.Title>{detail.temp}</Card.Title>
            
              
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
