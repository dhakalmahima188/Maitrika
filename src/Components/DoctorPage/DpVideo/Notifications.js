
import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from "react-i18next";

import { SocketContext } from '../../../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const {t} = useTranslation()

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} {t("is calling:")}</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
         {  t(" Answer")}
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;