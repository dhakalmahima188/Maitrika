import React from "react";
import MyModal from "./Modal";
import MyVital from "./Vitals";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export const Person = (props) => {
  console.log(props.addVital);
  let { name } = useParams();

  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showVitalModal, setShowVItalModal] = React.useState(false);
  // const tasks=[1,2,3]
  const tasks = [
    {
      sn: 1,
      head: "Pregnancy followup",
      time: "2 Weeks",
    },
    {
      sn: 2,
      head: "Vaccination",
      time: "5 Weeks",
    },
  ];
  return (
    <div className="Form_area">
      <h2>Name: {name}</h2>
      <h3>Children</h3>

      <div>
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
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowVItalModal(true);
                  }}
                >
                  ADD Vitals
                </Button>
              </Card>
              <br></br>
            </>
          );
        })}
      </div>
      <br></br>
      <Button size="sm" onClick={() => setShowDeleteModal(true)}>
        ADD Child
      </Button>
      <br></br>
      <MyVital
        show={showVitalModal}
        onCancel={() => setShowVItalModal(false)}
      />
      <MyModal
        addVital={props.addVital}
        show={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
      />
      <br></br>

      {tasks.map((task) => {
        return (
          <>
            <Card style={{ width: "20rem", justifyContent: "center" }}>
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
            <br></br>
          </>
        );
      })}
    </div>
  );
};
