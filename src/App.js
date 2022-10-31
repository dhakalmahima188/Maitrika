import "./App.css";
import { Event } from "./Components/Home/Event";
import { Person } from "./Components/Person/Person";
import { Sidebar } from "./Components/Sidebar";
import { SearchBar } from "./Components/Home/SearchBar";
import { InputField } from "./Components/Home/InputField";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const onDelete = (event) => {
    setevents(
      events.filter((e) => {
        return e !== event;
      })
    );
  };
  const onEdit = (event) => {};

  const [events, setevents] = useState([]);

  const [vitals, setvitals] = useState([]);
  const addEvent = (title, desc, age, xyz) => {
    if (events.length === 0) {
      var sn = 1;
    } else {
      sn = events[events.length - 1].sn + 1;
    }
    const myevent = {
      sn: sn,
      title: title,
      desc: desc,
      age: age,
      xyz: xyz,
    };
    setevents([...events, myevent]);
    console.log(myevent);
  };




  const addVital = (title,  age) => {
    if (vitals.length === 0) {
      var sn = 1;
    } else {
      sn = vitals[vitals.length - 1].sn + 1;
    }

    const myvitals = {
      sn: sn,
      title: title, 
      age: age,
  
    };
    setvitals([...vitals, myvitals]);
    console.log(myvitals);
  }




  return (
    <div className="App">
      <Router>
        <Routes>
          <Route />
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <InputField addEvent={addEvent} />
                <SearchBar />
                <Event events={events} onDelete={onDelete} onEdit={onEdit} />
              </>
            }
          />
           <Route
            path="/person/:name"
            element={
              <>
                  <Sidebar />
              <Person addVital={addVital} vitals={vitals}/>
            
                
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
