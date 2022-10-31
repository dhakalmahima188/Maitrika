import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const InputField = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [age, setAge] = useState("");
  const [recentlyGaveBirth, setRecentlyGaveBirth] = useState(false)
  const [pregnant, setpregnant] = useState(false)

  const submit = () => {
    if (!title || !desc || !age ) {
      alert("Blank detected");
    } else {
      props.addEvent(title, desc, age, recentlyGaveBirth, pregnant, 'xyz');
    }
  };

  return (
    <div className="Form_area">
      <h4>Add New Patient</h4>
      <br></br>
      <Form>
        <Row>
          <Col>
            <div id="labels">Patient name</div>
            <Form.Control
              size="lg"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder=" Name"
            />
          </Col>
          <Col>
            <div id="labels">Location</div>
            <Form.Control
              size="lg"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Location"
            />
          </Col>
          <Col>
            <div id="labels">Age</div>
            <Form.Control
              size="lg"
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="Mother's Age"
            />
          </Col>
       
        </Row>
        <Row>
          <Col>
           <div id="labels">Recently Gave Birth</div>
            <Form.Control
              size="lg"
              type="checkbox"
              value={recentlyGaveBirth}
              onChange={(e) => {
                setRecentlyGaveBirth(e.target.value);
              }}
            />
          </Col>
          <Col>
           <div id="labels">Pregnant</div>
            <Form.Control
              size="lg"
              type="checkbox"
              value={pregnant}
              onChange={(e) => {
                setpregnant(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="btn">
              <Button variant="primary" type="button" onClick={submit} className='btn_prop'>
                ADD
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Form>
      <br></br>
    </div>
  );
};
