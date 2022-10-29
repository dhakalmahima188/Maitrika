import React from "react";
import Button from "react-bootstrap/Button";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
export const EventItem = (props) => {
  return (
    <TableRow
      key={props.event.sn}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <h5>{props.event.title}</h5>
      </TableCell>
      <TableCell align="left">
        <h6>{props.event.desc}</h6>
      </TableCell>
      <TableCell align="left">
        <h6>{props.event.age}</h6>
      </TableCell>
      <TableCell align="left">
        <Button
          variant="danger"
          href="#"
          onClick={() => {
            props.onDelete(props.event);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
