import React from "react";
import Button from "react-bootstrap/Button";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const EventItem = (props) => {
  const { t } = useTranslation();

  return (
    <TableRow
      key={props.event.sn}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row"></TableCell>
      <TableCell align="left">
        <Link
          to={`/doctorpage/person/${props.event.title}`}
          className="clickable-blue"
        >
          <h5>{props.event.title}</h5>
        </Link>
      </TableCell>
      <TableCell align="left">
        <h6>{props.event.desc}</h6>
      </TableCell>
      <TableCell align="left">
        <h6>{props.event.age}</h6>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="danger"
          href="#"
          onClick={() => {
            props.onDelete(props.event);
          }}
        >
          {t("Delete")}
        </Button>
      </TableCell>
    </TableRow>
  );
};
