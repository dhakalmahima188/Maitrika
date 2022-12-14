import React from "react";
import pregnantLady from "../../assets/pregnantLady.png";
import birth from "../../assets/newBorn.png";
import vaccine from "../../assets/vaccine.png";
import service from "../../assets/health.png";
import { Button } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

import "./Tasks.css";

export const Tasks = () => {
  const { t } = useTranslation();

  const [targetData, settargetData] = React.useState([
    {
      key: 0,
      image: pregnantLady,
      name: "Mahima Dhakal",
      subject: "Pregnancy Follow Up",
      time: "1 day left",
      category: "text",

      important: 0,
    },

    {
      key: 1,
      image: birth,
      name: "Richa Acharya",
      subject: "Expected Date",
      time: "3 days left",
      important: 1,
      category: "text",
    },
    {
      key: 2,
      image: vaccine,
      name: "Radha Shree",
      subject: "Polio Dosage to Child",
      time: "In 2 weeks",
      important: 0,
      category: "fourm",
    },
    {
      key: 3,
      image: service,
      name: "Sarita Shakya",
      subject: "Whole Body CheckUp",
      time: "In 2 weeks",
      important: 1,
      category: "fourm",
    },
  ]);

  const onDelete = (item) => {
    console.log(item);
    settargetData(
      targetData.filter((e) => {
        return e !== item;
      })
    );
  };

  return (
    <div>
      {targetData.map((task) => {
        return (
          <>
            <div className="tasks__box">
              <img src={task.image} alt="" className="tasks__img" />
              <div className="tasks__textbox">
                <h4 className="tasks__title">{t(task.name)}</h4>
                <h6 className="tasks__contact">{task.subject}</h6>
                <h6 className="tasks__contact">{task.time}</h6>
              </div>
              <Button
                className="done_btn"
                variant="success"
                size="sm"
                onClick={() => {
                  onDelete(task);
                }}
              >
                <MdDone />
              </Button>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Tasks;
