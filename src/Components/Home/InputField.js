import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import './inputField.css';

export const InputField = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [age, setAge] = useState("");
  const [recentlyGaveBirth, setRecentlyGaveBirth] = useState(false)
  const [pregnant, setpregnant] = useState(false)
  const {t} = useTranslation()

  const submit = () => {
    if (!title || !desc || !age ) {
      alert("Blank detected");
    } else {
      props.addEvent(title, desc, age, recentlyGaveBirth, pregnant, 'xyz');
    }
  };

  return (
    <>
    <div className="Form_area home__container inputfield__container">
      <h4>{t('Add New Patient')}</h4>
      <br></br>
      <Form>
        <Row>
          <Col>
            <div id="labels">{t('Patient name')}</div>
            <Form.Control
              size="lg"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder={t(' Name')}
            />
          </Col>
          <Col>
            <div id="labels">{t('Location')}</div>
            <Form.Control
              size="lg"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder={t("Location")}
            />
          </Col>
          <Col>
            <div id="labels">{t('Age')}</div>
            <Form.Control
              size="lg"
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder={t("Mother's Age")}
            />
          </Col>
       
        </Row>
        <Row>
          <Col>
           <div id="labels" className="birthCheckInput">{t('Recently Gave Birth')}</div>
            <Form.Control
              size="sm"
              type="checkbox"
              className="checkbox"
              value={recentlyGaveBirth}
              onChange={(e) => {
                setRecentlyGaveBirth(e.target.value);
              }}
            />
          </Col>
          <Col>
           <div id="labels" className="pregnancyCheckInput">{t('Pregnant')}</div>
            <Form.Control
              size="sm"
              type="checkbox"
              className="checkbox"
              
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
	  	{t('ADD')}
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Form>
      <br></br>
    </div>
    </>
  );
};
