import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  // Making usestate for setting and
  // fetching a value in jsx
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

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    const ids = uuid(); // Creating unique id
    let uni = ids.slice(0, 8); // Slicing unique id

    // Fetching a value from usestate and
    // pushing to javascript object
    let a = brand,
      b = os,
      c = cpu,
      d = ram,
      z = gpu,
      f = storage,
      g = screen_size,
      h = battery,
      i = refresh_rate,
      j = pro,
      k = con;
    array.push({
      id: uni,
      Name: a,
      Age: b,
      cpu: c,
      ram: d,
      gpu: z,
      storage: f,
      screen_size: g,
      battery: h,
      refresh_rate: i,
      pro: j,
      con: k,
    });

    // Redirecting to home page after creation done
    history("/dashboard");
  };

  return (
    <div>
      <Form className="d-grid gap-2">
        {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={(e) => setbrand(e.target.value)}
            type="text"
            placeholder="Enter Brand"
          />
        </Form.Group>

        {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setos(e.target.value)}
            type="text"
            placeholder="OS"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setcpu(e.target.value)}
            type="text"
            placeholder="CPU"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setram(e.target.value)}
            type="text"
            placeholder="RAM"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setgpu(e.target.value)}
            type="text"
            placeholder="GPU"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setstorage(e.target.value)}
            type="text"
            placeholder="Storage"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setscreen_size(e.target.value)}
            type="text"
            placeholder="Screen Size"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setbattery(e.target.value)}
            type="text"
            placeholder="Battery"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setrefresh_rate(e.target.value)}
            type="text"
            placeholder="Refresh Rate"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setpro(e.target.value)}
            type="text"
            placeholder="Pros"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setcon(e.target.value)}
            type="text"
            placeholder="Cons"
          />
        </Form.Group>

        {/* handing a onclick event in button for
                    firing a function */}
        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>

        {/* Redirecting back to home page */}
        <Link className="d-grid gap-2" to="/dashboard">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;
