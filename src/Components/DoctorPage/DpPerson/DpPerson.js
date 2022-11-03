import React from "react";
import MyModal from "./Modal";
import MyVital from "./Vitals";
import "./person.css";

import { BrowserRouter as Router, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const DpPerson = (props) => {
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
                  {vital.age} months
                  <br></br>
                  <br></br>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      setShowVItalModal(true);
                    }}
                  >
                    Show Report
                  </Button>{" "}
                </Card.Body>
              </Card>

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

        <br />

        <br></br>
      </div>
    </>
  );
};
