import { useEffect, useState } from "react";
import { useNavigate, Navigate, Outlet, Link } from "react-router-dom";
import Create from "./create";
import Edit from "./edit";
import array from "./array";
import { Button, Table } from "react-bootstrap";

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useState((e) => {
    const data = localStorage.getItem("user");
    if (data) {
      setLoggedIn(true);
    }
  });

  let history = useNavigate();

  function setID(
    id,
    brand,
    os,
    cpu,
    ram,
    gpu,
    storage,
    screen_size,
    battery,
    refresh_rate,
    pro,
    con
  ) {
    localStorage.setItem("id", id);
    localStorage.setItem("brand", brand);
    localStorage.setItem("os", os);
    localStorage.setItem("cpu", cpu);
    localStorage.setItem("ram", ram);
    localStorage.setItem("gpu", gpu);
    localStorage.setItem("storage", storage);
    localStorage.setItem("screen_size", screen_size);
    localStorage.setItem("battery", battery);
    localStorage.setItem("refresh_rate", refresh_rate);
    localStorage.setItem("pro", pro);
    localStorage.setItem("con", con);
  }
  function deleted(id) {
    var index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    // deleting the entry with index
    array.splice(index, 1);

    // We need to re-render the page for getting
    // the results so redirect to same page.
    history("/dashboard");
  }

  return (
    <>
      {!loggedIn ? (
        <Navigate to="/login" />
      ) : (
        <div className="container">
          <h2>Dashboard</h2>
          <p>Welcome to your dashboard</p>

          {/* <div className="mb-3">
            <div className="btn btn-warning me-3">
              <Link to="/dashboard/create">Create</Link>
            </div>
            <div className="btn btn-warning me-3">
              <Link to="/dashboard/edit">Edit</Link>
            </div>
          </div>
          <Outlet /> */}
          <Outlet />

          <div className="mt-5">
            <Table striped bordered hover size="lg">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>os</th>
                  <th>cpu</th>
                  <th>ram</th>
                  <th>gpu</th>
                  <th>storage</th>
                  <th>screen_size</th>
                  <th>battery</th>
                  <th>refresh_rate</th>
                  <th>pro</th>
                  <th>con</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping though every element 
                        in the array and showing the 
                        data in the form of table */}
                {array.map((item) => {
                  return (
                    <tr>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.brand}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.os}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.cpu}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.ram}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.gpu}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.storage}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.screen_size}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.battery}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.refresh_rate}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.pro}
                      </td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "100px" }}
                      >
                        {item.con}
                      </td>

                      {/* getting theid,name, and 
                                    age for storing these
                                    value in the jsx with 
                                    onclick event */}
                      <td>
                        <Link to="/dashboard/edit">
                          <Button
                            onClick={(e) =>
                              setID(
                                item.id,
                                item.brand,
                                item.os,
                                item.cpu,
                                item.ram,
                                item.gpu,
                                item.storage,
                                item.screen_size,
                                item.battery,
                                item.refresh_rate,
                                item.pro,
                                item.con
                              )
                            }
                            variant="info"
                          >
                            Update
                          </Button>
                        </Link>
                      </td>

                      {/* Using thr deleted function passing
                                    the id of an entry */}
                      <td>
                        <Button
                          onClick={(e) => deleted(item.id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            {/* Button for redirecting to create page for
                insertion of values */}

            <Link className="d-grid gap-2" to="/dashboard/create">
              <Button variant="warning" size="lg">
                Create
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
