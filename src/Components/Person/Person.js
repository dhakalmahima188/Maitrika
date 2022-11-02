import React from "react";
import MyModal from "./Modal";
import MyDetails from "./Details";
import MyVitals from "./Vitals";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { t } from "i18next";
import { addChildVitals, getChildren, getPeople } from "../../localstorage";
export const Person = (props) => {
  let { name } = useParams();

  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showVitalModal, setShowVItalModal] = React.useState(false);
  const [showDetailModal, setShowDetailModal] = React.useState(false);

  const [localChildren, setLocalChildren] = React.useState(getChildren(name));
  // const [details, setdetails] = useState([]);
  // const [vitals, setVitals] = useState([]);
  const [newChildName, setNewChildName] = React.useState("");
  function handleNameChange(name) {
    setNewChildAge(name)
  }
  const [newChildAge, setNewChildAge] = React.useState("");
  function handleAgeChange(age){
    setNewChildAge(age)
  }

  function addChild(name, age) {
    console.log("called")
    if (localChildren.length == 0) {
      var sn = 1;
    } else {
      sn = localChildren[localChildren.length - 1].sn + 1;
    }

    const newChild = {
      sn: sn,
      name: name,
      age: age,
    }
    setLocalChildren([...localChildren, newChild])
  }
  const addVitals = (mumName, childName, height,weight, temp, pulse, cry, breastfeeding, teeth, color) => {
    const myVitals = {
      height: height,
      weight: weight,
      temp: temp,
      pulse:pulse,
      cry:cry,
      breastfeeding:breastfeeding,
      teeth:teeth,
      color:color,
      time: Date.now()
    };
    // setdetails([...vitals, mydetails]);
    const childrensTemp = addChildVitals(mumName, childName, myVitals)
    setLocalChildren(childrensTemp)
    console.log(getPeople())
  };
  const f = () => {
    return 1;
  }

  const addDetails = (birth_date) => {
    const myvitaldetails = {
      birth_date:birth_date
    };
    // vitalsetdetails([...vitaldetails, myvitaldetails]);
    console.log(myvitaldetails);
  };
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
          {localChildren.map((child) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <p>
                      <b>Name: </b>
                      {child.title}
                    </p>
                    <b>Age: </b>
                    {child.age}
                    <br></br>
                    <br></br>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => {
                        setShowVItalModal(true);
                      }}
                    >
                      {t('ADD Vitals')}
                    </Button>{" "}
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => {
                        setShowDetailModal(true);
                      }}
                    >
                      {t('ADD Details')}
                    </Button>
                  </Card.Body>
                </Card>
                <br></br>

                {/* Detail Stuff */}
                <MyDetails
                  mum_name={name}
                  child_name={child.name}
                  adddetail={addVitals}
                  vitaldetails={child.vitals || []}
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
          person={name}
          age={newChildAge}
          name={newChildName}
          handleAgeChange={handleAgeChange}
          handleNameChange={handleNameChange}
          addVital={addChild}
          show={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
        />
        <br></br>

          {/* Vital Bala window  */}
        <MyVitals
          adddetail={props.adddetail}
          details={[]}
          show={showDetailModal}
          onCancel={() => setShowDetailModal(false)}
        />

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
