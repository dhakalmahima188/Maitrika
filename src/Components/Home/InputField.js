import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./inputField.css";

export const InputField = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [age, setAge] = useState("");
  const [recentlyGaveBirth, setRecentlyGaveBirth] = useState(false);
  const [pregnant, setpregnant] = useState(false);
  const { t } = useTranslation();

  const submit = () => {
    if (!title || !desc || !age) {
      alert("Blank detected");
    } else {
      props.addEvent(title, desc, age, recentlyGaveBirth, pregnant, "xyz");
    }
  };

  return (
    <>
<<<<<<< HEAD
      <div className="Form_area home__container inputfield__container">
        <h4 className="input__title">{t("Add New Patient")}</h4>
        <hr />
        <br />
        <Form>
          <Row>
            <div id="labels">{t("Patient name")}</div>
=======
    <div className="Form_area home__container inputfield__container">
      <h4 className="input__title">{t('Add New Patient')}</h4>
      <hr /><br />
      <Form>
        <Row>
          <Col>
            <div id="labels">{t("Mother's name")}</div>
>>>>>>> d9051c58ee11117e99fce8f65459ed64f539720c
            <Form.Control
              size="lg"
              value={title}
              className="formInput"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder={t(" Name")}
            />
          </Row>
          <Row>
            <div id="labels">{t("Location")}</div>
            <Form.Control
              size="lg"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder={t("Location")}
            />
          </Row>
          <Row>
            <div id="labels">{t("Age")}</div>
            <Form.Control
              size="lg"
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder={t("Mother's Age")}
            />
          </Row>

          <Row>
            <div id="labels" className="birthCheckInput">
              {t("Recently Gave Birth")}
            </div>
            <Form.Control
              size="sm"
              type="checkbox"
              className="checkbox"
              value={recentlyGaveBirth}
              onChange={(e) => {
                setRecentlyGaveBirth(e.target.value);
              }}
            />
          </Row>
          <Row>
            <div id="labels" className="pregnancyCheckInput">
              {t("Pregnant")}
            </div>
            <Form.Control
              size="sm"
              type="checkbox"
              className="checkbox"
              value={pregnant}
              onChange={(e) => {
                setpregnant(e.target.value);
              }}
            />
          </Row>
          <Row>
            <div className="btn">
              <Button
                variant="primary"
                type="button"
                onClick={submit}
                className="btn_prop"
              >
                {t("ADD")}
              </Button>{" "}
            </div>
          </Row>
        </Form>
        <br></br>
      </div>
    </>
  );
};
