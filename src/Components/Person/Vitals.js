import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import baby from "../../assets/baby.jpg";
import LineChart from "./LineChart";

export default function MyVital(props) {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [birth_date, setbirth_date] = useState("");
  const { onCancel, child_name } = props;
  const [bmi, setbmi] = useState(0);
  const [msg, setmsg] = useState("error ");
  const [temp, settemp] = useState("");
  const [pulse, setpulse] = useState("");
  const [color, setcolor] = useState("");
  const [breastfeeding, setbreastfeeding] = useState("");
  const [cry, setcry] = useState("normally");
  const [teeth, setteeth] = useState("");
  console.log("name", child_name);

  const submit = () => {
    if (!height) {
      alert("Blank detected");
    } else {
      console.log("yeha xam");
      props.addvitaldetail(
        height,
        weight,
        birth_date,
        temp,
        pulse,
        cry,
        breastfeeding,
        teeth,
        color
      );
      var temp_bmi = weight / (height * height);
      setbmi(temp_bmi);
      console.log("Bmi:", bmi);
      if (bmi < 18.5) {
        setmsg("Underweight");
      } else if (bmi > 18.5 && bmi < 24.9) {
        setmsg("Normal Weight");
      } else if (bmi > 25 && bmi < 29.9) {
        setmsg("Overweight");
      } else if (bmi >= 30) {
        setmsg("Obesity");
      } else {
        console.log("kaam gareena");
      }
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
              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3">
                <h1 id="labels"> Birth Date</h1>
                <Form.Control
                  size="lg"
                  value={birth_date}
                  type="date"
                  onChange={(e) => {
                    setbirth_date(e.target.value);
                  }}
                />
              </Form.Group>{" "}
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
              <Form.Group className="mb-3">
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
                  as="select"
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
                    size="lg"
                    value={breastfeeding}
                    onChange={(e) => {
                      setbreastfeeding(e.target.value);
                    }}
                  >
                    <Form.Check type="checkbox" value="Yes" label={`Yes`} />
                    <Form.Check type="checkbox" value="No" label={`No`} />
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
      {props.vitaldetails.map((detail) => {
        return (
          <>
            <div style={{ width: "20rem" }}>
              <Card style={{ flex: 1 }}>
                <Card.Header>
                  <b> {child_name}</b>{" "}
                </Card.Header>
                <Card.Body>
                  <img src={baby} className="baby_img"></img>

                  <Card.Title>
                    {" "}
                    <br></br>
                    <b>Height: </b>
                    {detail.height} ft
                  </Card.Title>
                  <Card.Title>
                    <b>Weight: </b>
                    {detail.weight} kg
                  </Card.Title>
                  <Card.Title>
                    <b>Birth Date:</b> {detail.birth_date}
                  </Card.Title>

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
                    <b>Color: </b> {detail.color}
                  </Card.Title>




                  <Card.Title>
                    <b>BMI: </b> {bmi}
                    <LineChart bmi={bmi} />
                  </Card.Title>
                  <Card.Title>
                    <b>Msg: </b> {msg}
                  </Card.Title>
                  
                </Card.Body>
              </Card>
            </div>
            <br></br>
            <div></div>
          </>
        );
      })}
    </>
  );
}
