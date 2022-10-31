import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import InputColor from 'react-input-color';

// import Slider from "@mui/material/Slider";

export default function MyDetail(props) {
  const [temp, settemp] = useState("");
  const [pulse, setpulse] = useState("");
  const [color, setcolor] = useState("");
  const [breastfeeding, setbreastfeeding] = useState("");
  const [cry, setcry] = useState("normally");
  const [teeth, setteeth] = useState("");

  const { onCancel,details } = props;

  const submit = () => {
    if (!temp) {
      alert("Blank detected");
    } else {
      props.adddetail(temp, pulse, cry, breastfeeding, teeth,color);
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
                  value={pulse}
                  type="number"
                  onChange={(e) => {
                    setpulse(e.target.value);
                  }}
                  placeholder="Enter Pulse Rate"
                />
              </Form.Group>


              <Form.Group
                className="mb-3"
             
              >
                <h3 id="labels">Body Color</h3>
                <Row>
                  <Col>
                  {/* <option> */}
                    <div

                      className="body_color"
                      style={{ backgroundColor: "#F1C27D" }}
                    ></div>
                    {/* </option> */}
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
                      onChange={(e) => {
                        setcolor(e.target.value);
                      }}
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
                <Form.Control
                  as="select"
                  custom
                  value={cry}
                  onChange={(e) => {
                    setcry(e.target.value);
                  }}
                >
                  <option value="Normally">Normally</option>
                  <option value="Abnormally high">Abnormally high</option>
                  <option value="Quite less">Quite less</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {" "}
                <h3 id="labels">Teeth and Gums?</h3>
                <Form.Control
                  as='select'
                  custom
                  value={teeth}
                  onChange={(e) => {
                    setteeth(e.target.value);
                  }}
                >
                  <option value="Normal">Normal</option>
                  <option value="Swelling">Swelling</option>
                  <option value="Yellowish">Yellowish</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <h3 id="labels">Is Breastfeeding continued?</h3>

                <div className="mb-3">

                <Form.Control
                  as="radio"
                  custom
                  size='lg'
                  value={breastfeeding}
                  onChange={(e) => {
                    setbreastfeeding(e.target.value);
                  }}
                >
                  <Form.Check type="checkbox"  value='Yes' label={`Yes`} />
                  <Form.Check type="checkbox" value='No' label={`No`} />
                
                  </Form.Control>
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

      {details.map((detail) => {
        return (
          <>
            <div style={{ width: "50rem" }}>
              <Card>
                <Card.Header>
                  Details <b></b>{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <b>Temperature: </b>
                    {detail.temp}
                  </Card.Title>
                  <Card.Title>
                    <b>Pulse: </b>
                    {detail.pulse}
                  </Card.Title>
                  <Card.Title>
                    <b>How often baby cries?: </b>
                    {detail.cry}
                  </Card.Title>
                  <Card.Title>
                    <b>Breastfeeding Continiued?: </b>
                    {detail.breastfeeding}
                  </Card.Title>
                  <Card.Title>
                    <b>Teeth and Gums: </b>
                    {detail.teeth}
                  </Card.Title>
                  <Card.Title>
                    <b>Color: </b>   {detail.color}               

                   
                  </Card.Title>
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
