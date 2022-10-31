import "../../App.css";
import React from "react";
import { EventItem } from "./EventItem";
import "reactjs-popup/dist/index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Event = (props) => {
  const {t} = useTranslation()
  return (
    <div>
      <div className="Form_area">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
            
                  <h5>{t('Patient Name')}</h5>
                </TableCell>
                <TableCell align="left">
                  <h5>{t('Location')}</h5>
                </TableCell>
                <TableCell align="left">
                  <h5>{t('Age')}</h5>
                </TableCell>
                <TableCell align="center">
                  <h5>{t('Action')}</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.events.map((event) => {
                return (
                  <EventItem
                    key={event.sn}
                    event={event}
                    onDelete={props.onDelete}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
