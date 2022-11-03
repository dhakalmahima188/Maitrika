import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import baby from "../../../assets/baby.jpg";
import LineChart from "./LineChart";

export default function MyVital(props) {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [birth_date, setbirth_date] = useState("");
  const { onCancel, child_name } = props;
  const [bmi, setbmi] = useState(0);
  const [msg, setmsg] = useState("error ");

  console.log("name", child_name);

  const { t } = useTranslation();

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>
              {" "}
              <b> {child_name}</b>{" "}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.vitaldetails.map((detail) => {
            return (
              <>
                <Card style={{ flex: 1 }}>
                  <Card.Body>
                    <img src={baby} className="baby_img"></img>
                    <br />
                    <br />
                    <Card.Title>
                      {" "}
                      <b>{t("Height")}: </b>
                      {detail.height} {t("inch")}
                      &nbsp;&nbsp;&nbsp;
                      {detail.height <= 19 ? (
                        <Button variant="danger" size="sm">
                          {" "}
                          {t("High Risk")}
                        </Button>
                      ) : (
                        <Button variant="success" size="sm">
                          {" "}
                          {t("Normal")}
                        </Button>
                      )}
                    </Card.Title>
                    <Card.Title>
                      <b> {t("Weight")}: </b>
                      {detail.weight} kg &nbsp;&nbsp;&nbsp;
                      {detail.weight <= 5 && detail.weight >= 4 ? (
                        <Button variant="success" size="sm">
                          {t("Normal")}
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          {" "}
                          {t("High Risk")}
                        </Button>
                      )}
                    </Card.Title>
                    <Card.Title>
                      <b>{t("Birth Date")}:</b> {detail.birth_date}{" "}
                      &nbsp;&nbsp;&nbsp;
                    </Card.Title>

                    <Card.Title>
                      <b>Temperature: </b>
                      {detail.temp} &nbsp;&nbsp;&nbsp;
                      {detail.temp <= 38 && detail.temp >= 36 ? (
                        <Button variant="success" size="sm">
                          {" "}
                          Normal
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          {" "}
                          {t("High Risk")}
                        </Button>
                      )}
                    </Card.Title>
                    <Card.Title>
                      <b>Pulse: </b>
                      {detail.pulse}
                      &nbsp;&nbsp;&nbsp;
                      {detail.pulse <= 160 && detail.pulse >= 80 ? (
                        <Button variant="success" size="sm">
                          {" "}
                          Normal
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          {" "}
                          High Risk
                        </Button>
                      )}
                    </Card.Title>
                    <Card.Title>
                      <b>How often baby cries?: </b>
                      {detail.cry}
                      &nbsp;&nbsp;&nbsp;
                      {detail.cry == "Normally" ? (
                        <Button variant="success" size="sm">
                          {" "}
                          Normal
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          {" "}
                          {t("High Risk")}
                        </Button>
                      )}
                    </Card.Title>
                    <Card.Title>
                      <b>{t("Breastfeeding Continiued")}?: </b>
                      {detail.breastfeeding}
                      &nbsp;&nbsp;&nbsp;
                      {detail.breastfeeding == "Yes" ? (
                        <Button variant="success" size="sm">
                          {" "}
                          Normal
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          {" "}
                          {t("High Risk")}
                        </Button>
                      )}
                    </Card.Title>
                    <Card.Title>
                      <b>{t("Teeth and Gums:")} </b>
                      {detail.teeth}
                      &nbsp;&nbsp;&nbsp;
                      {detail.teeth == "Normal" ? (
                        <Button variant="success" size="sm">
                          {" "}
                          Normal
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          {" "}
                          {t("High Risk")}
                        </Button>
                      )}
                    </Card.Title>
                    <Card.Title>
                      <b>{t("Color")}: </b> {detail.color}
                      &nbsp;&nbsp;&nbsp;
                      {detail.color == "proper" ? (
                        <Button variant="success" size="sm">
                          {" "}
                          Normal
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          {t("High Risk")}
                        </Button>
                      )}
                    </Card.Title>

                    <Card style={{ width: "18rem" }}>
                      <LineChart bmi={bmi} />
                    </Card>
                    <Card.Title>
                      <b>Msg: </b> {msg}
                    </Card.Title>
                  </Card.Body>
                </Card>

                <br></br>
                <div></div>
              </>
            );
          })}
        </Modal.Body>

          <Button variant="primary" onClick={onCancel}>
            OK
          </Button>
       
      </Modal>
    </>
  );
}
