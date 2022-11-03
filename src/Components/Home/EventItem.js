import React from "react";
import Button from "react-bootstrap/Button";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";

export const EventItem = (props) => {
  const { t } = useTranslation();

  return (
    <div className='card_idea'>
      <Card style={{ width: "30rem" }}>
        <div className="cont">
          <Link to={`/person/${props.event.title}`} className="clickable-blue">
            <h5> {props.event.title}</h5>
          </Link>

          <Card.Title>
            <h6>
              <b>Address: </b>
              {props.event.desc}
            </h6>
          </Card.Title>
          <Card.Title>
            <h6>
              <b>Age: </b>
              {props.event.age}
            </h6>
          </Card.Title>

          <Button
            size="sm"
            variant="danger"
            href="#"
            onClick={() => {
              props.onDelete(props.event);
            }}
          >
            {t("Delete")}
          </Button>
        </div>
      </Card>
      <br></br>
    </div>
  );
};
