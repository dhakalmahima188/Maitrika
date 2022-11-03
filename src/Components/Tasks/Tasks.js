import React from "react";
import pregnantLady from "../../assets/pregnantLady.png";
import birth from "../../assets/newBorn.png";
import vaccine from "../../assets/vaccine.png";
import service from "../../assets/health.png";
import { Button } from "react-bootstrap";
import { MdDone } from "react-icons/md";

export const Tasks = () => {
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
        name: "Radha Acharya",
        subject: "Expected Date",
        time: "3 days left",
        important: 1,
        category: "text",
      },
      {
        key: 2,
        image: vaccine,
        name: "Radha Acharya",
        subject: "Polio Dosage to Child",
        time: "In 2 weeks",
        important: 0,
        category: "fourm",
      },
      {
        key: 3,
        image: service,
        name: "Yunika BAjracharya",
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
            <div style={{ width: "20rem" }} className="box">
              <img className=" tasks__img " src={task.image} />
              <h4> {task.name}</h4>
              <div> {task.subject}</div>
              <div> {task.time}</div>
              <div>
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
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Tasks;
