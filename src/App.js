import "./App.css";
import { Event } from "./Components/Home/Event";
import { Person } from "./Components/Person/Person";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { SearchBar } from "./Components/Home/SearchBar";
import { InputField } from "./Components/Home/InputField";
import { Target } from "./Components/Target/Target";
import { Doctor } from "./Components/Doctor/Doctor";
// doctor page
import { DpSidebar } from "./Components/DoctorPage/DpSidebar/DpSidebar"
import { DpFCHV } from "./Components/DoctorPage/DpFCHV/DpFCHV"
import { DpSearchBar } from "./Components/DoctorPage/DpHome/DpSearchBar"
import { DpEvent } from "./Components/DoctorPage/DpHome/DpEvent"
import { DpPerson } from "./Components/DoctorPage/DpPerson/DpPerson"


import { useTranslation } from "react-i18next";
import { getPeople, addPeople, removePeople } from "./localstorage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Tasks } from "./Components/Tasks/Tasks";
import VideoCall from "./Components/Video/VideoCall"

// const languages = [
//   { value: '', text: "Options" },
//   { value: 'en', text: "English" },
//   { value: 'ne', text: "Nepali" },
//   { value: 'hi', text: "Hindi" },
// ]

function App() {
  // const {t} = useTranslation();
  // const [lang, setLang] = useState('en');

  // // This function put query that helps to
  // // change the language
  // const handleChange = e => {
  //   setLang(e.target.value);
  //   let loc = "http://localhost:3000/";
  //   window.location.replace(loc + "?lng=" + e.target.value);
  // }

  const onDelete = (event) => {
    removePeople(event);
    setevents(
      events.filter((e) => {
        return e !== event;
      })
    );
  };
  const onEdit = (event) => {};

  const [events, setevents] = useState([]);

  useEffect(() => {
    setevents(getPeople());
  }, []);

  const [vitals, setvitals] = useState([]);
  const addEvent = (title, desc, age, recentlyGaveBirth, pregnant, xyz) => {
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
      recentlyGaveBirth: recentlyGaveBirth,
      pregnant: pregnant,
      xyz: xyz,
    };
    setevents([...events, myevent]);
    addPeople(myevent);
  };

  const addVital = (title, age) => {
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
  };

  const [vitaldetails, vitalsetdetails] = useState([]);

  const addvitaldetail = (
    height,
    weight,
    birth_date,
    temp,
    pulse,
    cry,
    breastfeeding,
    teeth,
    color
  ) => {
    if (vitaldetails.length === 0) {
      var sn = 1;
    } else {
      sn = vitaldetails[vitaldetails.length - 1].sn + 1;
    }

    const myvitaldetails = {
      sn: sn,
      height: height,
      weight: weight,
      birth_date: birth_date,
      temp: temp,
      pulse: pulse,
      cry: cry,
      breastfeeding: breastfeeding,
      teeth: teeth,
      color: color,
    };
    vitalsetdetails([...vitaldetails, myvitaldetails]);
    console.log(myvitaldetails);
  };

  return (
    <div className="App">
      {/* hi
      <h1>{t('welcome')}</h1>
      <label>{t('choose')}</label>
      <select value={lang} onChange={handleChange}>
        {languages.map(item => {
            return (<option key={item.value} 
            value={item.value}>{item.text}</option>);
        })}
      </select> */}
      <Router>
        <Routes>
          <Route
            path="/tasks"
            element={
              <>
                <Sidebar />
                <Tasks />
              </>
            }
          />

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
                <Person
                  addVital={addVital}
                  vitaldetails={vitaldetails}
                  vitals={vitals}
                  addvitaldetail={addvitaldetail}
                />
              </>
            }
          />

          <Route
            path="/target"
            element={
              <>
                <Sidebar />
                <Target />
              </>
            }
          />

          <Route
            path="/events"
            element={
              <>
                <Sidebar />
              </>
            }
          />

          <Route
            path="/doctor"
            element={
              <>
                <Sidebar />
                <Doctor />
              </>
            }
          />

          <Route
            path="/video"
            element={
              <>
                <Sidebar />
                <VideoCall />
              </>
            }
          />

        {/* Doctor page beginssss */}
        <Route
            path="/doctorpage"
            element={
              <>
                <DpSidebar />
                <DpSearchBar />
                <DpEvent events={events} onDelete={onDelete} onEdit={onEdit} />
              </>
            }
        />

          <Route
            path="doctorpage/person/:name"
            element={
              <>
                <DpSidebar />
                <DpPerson
                  addVital={addVital}
                  vitaldetails={vitaldetails}
                  vitals={vitals}
                  addvitaldetail={addvitaldetail}
                />
              </>
            }
          />

        <Route
            path="/doctorpage/target"
            element={
              <>
                <DpSidebar />
                <Target />
              </>
            }
        />

        <Route
            path="/doctorpage/fchv"
            element={
              <>
                <DpSidebar />
                <DpFCHV />
              </>
            }
        />


        </Routes>

      </Router>
    </div>
  );
}

export default App;
