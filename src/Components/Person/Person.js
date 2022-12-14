import React from "react";
import MyModal from "./Modal";
import MyVital from "./Vitals";
import "./person.css";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const Person = (props) => {
  let { name } = useParams();

  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showVitalModal, setShowVItalModal] = React.useState(false);

  // const tasks=[1,2,3]
  const tasks = [
    {
      sn: 1,
      head: "Pregnancy follow up",
      time: "2 Weeks",
    },
    {
      sn: 2,
      head: "Vaccination",
      time: "5 Weeks",
    },
  ];
  return (
    <>
      <div className="Form_area patient__container">
        <h2 className="patient__name"> {name}</h2>
        <br />

        <div>
          <h3>Children</h3>
          {props.vitals.map((vital) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <p>
                      <b>Name: </b>
                      {vital.title}
                    </p>
                    <b>Age: </b>
                    {vital.age}
                    <br></br>
                    <br></br>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => {
                        setShowVItalModal(true);
                      }}
                    >
                      ADD Details
                    </Button>{" "}
                  </Card.Body>
                </Card>

                <MyVital
                  child_name={vital.title}
                  child_age={vital.age}
                  parent_name={name}
                  addvitaldetail={props.addvitaldetail}
                  vitaldetails={props.vitaldetails}
                  show={showVitalModal}
                  onCancel={() => setShowVItalModal(false)}
                />
              </>
            );
          })}
        </div>
        <br />
        <Button
          size="md"
          variant="primary"
          onClick={() => setShowDeleteModal(true)}
        >
          ADD Child
        </Button>
        <br></br>

        <MyModal
          addVital={props.addVital}
          show={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
          person={name}
        />
        <br></br>

        <br></br>
        <div style={{ flexDirection: "row" }}>
          {tasks.map((task) => {
            return (
              <>
                <div style={{ width: "20rem" }}>
                  <Card style={{ flex: 1 }}>
                    <Card.Header>
                      Tasks <b>{task.sn}</b>{" "}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{task.head}</Card.Title>
                      <Card.Text>{task.time}</Card.Text>
                      <Button variant="primary" size="sm">
                        Doctor
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <br></br>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
