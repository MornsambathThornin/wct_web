import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  // Here usestate has been used in order
  // to set and get values from the jsx
  const [brand, setbrand] = useState("");
  const [os, setos] = useState("");
  const [cpu, setcpu] = useState("");
  const [ram, setram] = useState("");
  const [gpu, setgpu] = useState("");
  const [storage, setstorage] = useState("");
  const [screen_size, setscreen_size] = useState("");
  const [battery, setbattery] = useState("");
  const [refresh_rate, setrefresh_rate] = useState("");
  const [pro, setpro] = useState("");
  const [con, setcon] = useState("");
  const [id, setid] = useState("");

  // Used for navigation with logic in javascript
  let history = useNavigate();

  // Getting an index of an entry with an id
  var index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  // Function for handling the edit and
  // pushing changes of editing/updating
  const handelSubmit = (e) => {
    // Preventing from reload
    e.preventDefault();

    // Getting an index of an array
    let a = array[index];

    // Putting the value from the input
    // textfield and replacing it from
    // existing for updation
    a.brand = brand;
    a.os = os;
    a.cpu = cpu;
    a.ram = ram;
    a.gpu = gpu;
    a.storage = storage;
    a.screen_size = screen_size;
    a.battery = battery;
    a.refresh_rate = refresh_rate;
    a.pro = pro;
    a.con = con;

    // Redirecting to main page
    history("/dashboard");
  };

  // Useeffect take care that page will
  // be rendered only once
  useEffect(() => {
    setbrand(localStorage.getItem("brand"));
    setos(localStorage.getItem("os"));
    setcpu(localStorage.getItem("cpu"));
    setram(localStorage.getItem("ram"));
    setgpu(localStorage.getItem("gpu"));
    setstorage(localStorage.getItem("storage"));
    setscreen_size(localStorage.getItem("screen_size"));
    setbattery(localStorage.getItem("battery"));
    setrefresh_rate(localStorage.getItem("refresh_rate"));
    setpro(localStorage.getItem("pro"));
    setcon(localStorage.getItem("con"));
    setid(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2">
        {/* setting a name from the 
                    input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={brand}
            onChange={(e) => setbrand(e.target.value)}
            type="text"
            placeholder="Enter brand"
          />
        </Form.Group>

        {/* setting a age from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={os}
            onChange={(e) => setos(e.target.value)}
            type="text"
            placeholder="OS"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={cpu}
            onChange={(e) => setcpu(e.target.value)}
            type="text"
            placeholder="CPU"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={ram}
            onChange={(e) => setram(e.target.value)}
            type="text"
            placeholder="RAM"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={gpu}
            onChange={(e) => setgpu(e.target.value)}
            type="text"
            placeholder="GPU"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={storage}
            onChange={(e) => setstorage(e.target.value)}
            type="text"
            placeholder="Storage"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={screen_size}
            onChange={(e) => setscreen_size(e.target.value)}
            type="text"
            placeholder="Screen Size"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={battery}
            onChange={(e) => setbattery(e.target.value)}
            type="text"
            placeholder="Battery"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={refresh_rate}
            onChange={(e) => setrefresh_rate(e.target.value)}
            type="text"
            placeholder="Refresh Rate"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={pro}
            onChange={(e) => setpro(e.target.value)}
            type="text"
            placeholder="Pros"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={con}
            onChange={(e) => setcon(e.target.value)}
            type="text"
            placeholder="Cons"
          />
        </Form.Group>

        {/* Hadinling an onclick event 
                    running an edit logic */}
        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>

        {/* Redirecting to main page after editing */}
        <Link className="d-grid gap-2" to="/dashboard">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
