import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import baby from "../../assets/baby.jpg";
import LineChart from "./LineChart";
import "./vitals.css";

export default function MyVital(props) {
  const { t } = useTranslation();
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [birth_date, setbirth_date] = useState("");
  const { onCancel, child_name } = props;
  const [bmi, setbmi] = useState(0);
  const [msg, setmsg] = useState("error ");
  const [temp, settemp] = useState("");
  const [pulse, setpulse] = useState("");
  const [breastfeeding, setbreastfeeding] = useState(false);
  const [cry, setcry] = useState("normally");
  const [teeth, setteeth] = useState("normal");
  const [colorval, setcolorval] = useState("Proper ");

  useEffect(() => {
    console.log(teeth)
  }, [teeth])

  // Really bad code, sorry
  const calVerdict = (height, weight, temp, pulse, cry, breastfeeding, teeth, colorval) => {
    let good = 0;
    let bad = 0;
    if (height <= 19) bad++; else good++;
    if (weight >= 4 && weight <= 5) good++; else bad++;
    if (temp >= 36 && temp < 38) good++; else bad++;
    if (pulse >= 80 && pulse <= 160) good++; else bad++;
    if (cry == "Normally") good++; else bad++;
    if (breastfeeding == "Yes") good++; else bad++;
    if (teeth == "Normal") good++; else bad++;
    if (colorval == "proper") good++; else bad++;

    if (good + bad == 0) {
      return "Consult App developers";
    }

    const risk = bad / (good + bad);

    if (risk < 0.5) {
      return "Normal";
    }
    else if (risk < 0.8) {
      return "Consult a doctor";
    }
    else return "Visit a Hospital"
  }
  const [verdicts, setVerdicts] = useState(props.vitaldetails.map(m => calVerdict(m.height, m.weight, m.temp, m.pulse, m.cry, m.breastfeeding, m.teech, m.colorval)));

  const colorvalue = (value) => {
    var temp = value;
    setcolorval(temp);
  };

  const submit = () => {
    if (!height) {
      alert("Blank detected");
    } else {
      console.log("yeha xam");

      var temp_bmi = weight / (height * height);
      setbmi(temp_bmi);
      console.log("Bmi:", bmi);
      let message = ""
      if (bmi < 18.5) {
        setmsg("Underweight");
        message = "Underweight"
      } else if (bmi > 18.5 && bmi < 24.9) {
        setmsg("Normal Weight");
        message = "Normal Weight"
      } else if (bmi > 25 && bmi < 29.9) {
        setmsg("Overweight");
        message = "Overweight"
      } else if (bmi >= 30) {
        setmsg("Obesity");
        message = "Obesity"
      } else {
        console.log("kaam gareena");
      }
      props.addvitaldetail(
        height,
        weight,
        birth_date,
        temp,
        pulse,
        cry,
        breastfeeding,
        teeth,
        colorval,
        temp_bmi,
        message
      );
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
          <Modal.Title id="contained-modal-title-vcenter">
            {t("Add Details")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="vital_form">
              <Form.Group className="option_area mb-3">
                <h1 id="labels">{t("Gender")}</h1>
                {/* <Form.Control size="lg" placeholder=" Gender" /> */}

                <Form.Control
                  as="select"
                  size="lg"
                  aria-label="Default select example"
                >
                  {/* <option>Gender</option> */}
                  <option value="1">{t("Male")}</option>
                  <option value="2">{t("Female")}</option>
                  <option value="3">{t("Other")}</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <h1 id="labels">{t("Height")}</h1>
                <Form.Control
                  size="lg"
                  value={height}
                  onChange={(e) => {
                    setheight(e.target.value);
                  }}
                  placeholder=" Enter Height in inches"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                {" "}
                <h1 id="labels"> {t("Weight")}</h1>
                <Form.Control
                  size="lg"
                  value={weight}
                  type="number"
                  onChange={(e) => {
                    setweight(e.target.value);
                  }}
                  placeholder="Enter Weight in kg"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <h1 id="labels"> {t("Birth Date")}</h1>
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
                <h3 id="labels">{t("Pulse Rate")}</h3>
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
                <h3 id="labels">{t("Body Color")}</h3>
                <Row>
                  <Col>
                    {/* <option> */}
                    <Button
                      className="body_color"
                      style={{ backgroundColor: "#F1C27D" }}
                      onClick={() => colorvalue("Normal")}
                    ></Button>
                    {/* </option> */}
                    <h6 id="labels" on>
                      {t("Normal")}
                    </h6>
                  </Col>
                  <Col>
                    <Button
                      className="body_color"
                      style={{ backgroundColor: "#FFDBAC" }}
                      onClick={() => colorvalue("Pale")}
                    ></Button>
                    <h6 id="labels"> {t("Pale")}</h6>
                  </Col>
                  <Col>
                    <Button
                      className="body_color"
                      style={{ backgroundColor: "#E0AC69" }}
                      onClick={() => colorvalue("Brownish")}
                    ></Button>
                    <h6 id="labels"> {t("Brownish")}</h6>
                  </Col>
                  <Col>
                    <Button
                      className="body_color"
                      style={{ backgroundColor: "#f2d3e1" }}
                      onClick={() => colorvalue("Pinkish")}
                    ></Button>
                    <h6 id="labels">Pinkish</h6>
                  </Col>
                  <Col>
                    <Button
                      className="body_color"
                      style={{ backgroundColor: "#f7e8a9" }}
                      onClick={() => colorvalue("Yellowish")}
                    ></Button>
                    <h6 id="labels"> {t("Yellowish")}</h6>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {" "}
                <h3 id="labels"> {t("Body Temperature")}(*F)</h3>
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
                <h3 id="labels">Teeth and Gums:</h3>
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
            <div id="labels" className="birthCheckInput">
              {t("BreastFeeding")}
            </div>
            <Form.Control
              size="sm"
              type="checkbox"
              className="checkbox"
              value={breastfeeding}
              onChange={(e) => {
                console.log(!breastfeeding)
                setbreastfeeding(!breastfeeding);
              }}
            />
                {/* <h3 id="labels">Is Breastfeeding continued?</h3>

                <div className="mb-3 checkbox__details">
                  <Form.Check
                    size="lg"
                    type="checkbox"
                    value="Yes"
                    label={`Yes`}
                  />
                </div> */}
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              const calcedVerdict = calVerdict(height, weight, temp, pulse, cry, breastfeeding, teeth, colorval)
              setVerdicts([...verdicts, calcedVerdict])
              submit();
              onCancel();
            }}
          >
            {t("ADD")}
          </Button>
          <Button variant="danger" onClick={onCancel}>
            {t("Cancel")}
          </Button>
        </Modal.Footer>
      </Modal>
      <br></br>
      {props.vitaldetails.map((detail, index) => {
        return (
          <>
            <div style={{ width: "30rem" }}>
              <Card style={{ flex: 1 }}>
                <Card.Header>
                  <b> {child_name}</b>{" "}
                </Card.Header>
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
                    {detail.weight <= 5 && detail.weight >= 3 ? (
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
                    {detail.temp <= 98 && detail.temp >= 97 ? (
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
                    <b>How often baby cries? </b>
                    {detail.cry}
                    &nbsp;&nbsp;&nbsp;
                    {detail.cry == "normally" ? (
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
                    {detail.breastfeeding ? "Yes": "No"}
                    &nbsp;&nbsp;&nbsp;
                    {detail.breastfeeding == true ? (
                      <Button variant="success" size="sm">
                        {" "}
                        Normal
                      </Button>
                    ) : (
                      <Button variant="success" size="sm">
                        {" "}
                        {t("Low Risk")}
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

                  <Card.Title>
                    <b>BMI: </b> {bmi}
                    <LineChart bmi={bmi} />
                  </Card.Title>
                  <Card.Title>
                    <b>Msg: </b> {msg}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button size="md" variant="primary">
                    Edit
                  </Button>
                </Card.Footer>
              </Card>
            </div>
            <br></br>
            <div>{verdicts[index]}</div>
          </>
        );
      })}
    </>
  );
}
