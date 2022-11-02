import React from "react";
import MyModal from "./Modal";
import MyVital from "./Vitals";

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
      <h2 className="area__name"> {name}</h2>
      <div className="Form_area ">
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
                <br></br>

                <MyVital
                  child_name={vital.title}
                  addvitaldetail={props.addvitaldetail}
                  vitaldetails={props.vitaldetails}
                  show={showVitalModal}
                  onCancel={() => setShowVItalModal(false)}
                />
              </>
            );
          })}
        </div>
        <br></br>

        <br></br>
        <Button size="sm" onClick={() => setShowDeleteModal(true)}>
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
