import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { dataLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (dataLogin?.email !== "admin@admin.com") navigate("/");

    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto bg-blue" >
            <p className="d-block px-4 py-3">
              <img src={process.env.PUBLIC_URL + 'logo-box.png'} width="34" height="34" alt="" />
            </p>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li className="nav-item py-2">
                <a href="/" aria-current="page">
                  <img src={process.env.PUBLIC_URL + 'home.png'} alt="" />
                  <p className="text-light">
                    Dashboard
                  </p>
                </a>
              </li>
              <li className="nav-item py-2">
                <a href="/cars" aria-current="page" >
                  <img src={process.env.PUBLIC_URL + 'fi_truck.png'} alt="" />
                  <p className="text-light">
                    Cars
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="col-2">
                <p className="navbar-brand mx-1">
                  <img src={process.env.PUBLIC_URL + 'logo.png'} alt="logo" width="100" height="34" />
                </p>
              </div>
              <div className="col-5">
                <p className="mx-1" href="#">
                  <img src={process.env.PUBLIC_URL + 'fi_menu.png'} alt="menu" />
                </p>     
              </div>
              <div className="col-5">
                <div className="row">
                  <div className="col-7">
                    <form className="form-inline input-icons    ">
                      <i>
                          <img className="icon" src={process.env.PUBLIC_URL + 'fi_search.png'} alt="logo" />
                      </i>
                      <input className="border border-1 input-field pt-1 size-input" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-light btn-outline-primary font-search" type="submit" >Search</button>
                    </form>
                  </div>
                  <div className="col-5">
                    <img src={process.env.PUBLIC_URL + 'profil.png'} alt="" />
                    <span className="px-2">
                      <button onClick={handleLogout} className="btn btn-primary-outline">logout</button>
                    </span>
                    <img src={process.env.PUBLIC_URL + 'fi_chevron-down.png'} alt="" />
                  </div>
                </div>
              </div>
            </nav>
            <main className="col">
              <div className="row">
                <div className="col-2">
                  <div className="d-block my-2">
                    <span className="font-sidebar mx-1">DASHBOARD</span>
                  </div>
                  <div className="d-block my-4 bg-dashboard">
                    <span className="d-block font-sidebar mx-1 pt-2">Dashboard</span>
                  </div>      
                </div>
                <div className="col p-3">
                  <div className="d-block mb-3">
                    <span className="font-source">Dashboard</span> 
                    <img className="mx-1" src={process.env.PUBLIC_URL + 'fi_next.png'} alt="" />
                    <span className="font-source">Dashboard</span>
                  </div>
                  <div className="d-block mb-3">
                    <span className="font-title">Dashboard</span>
                  </div>
                  <div className="d-block mb-2">
                    <img className="mx-1" src={process.env.PUBLIC_URL + 'list.png'} alt="" />
                    <span className="font-sidebar">List Order</span>
                  </div>
                  <div>
                    <table id="example" className="display">
                      <thead>
                          <tr>
                              <th className="col-1 text-center font-sidebar">No</th>
                              <th className="col-2 font-sidebar">
                                User Email            
                                <img src={process.env.PUBLIC_URL + 'fi_sort.png'} alt="logo" />
                              </th>
                              <th className="col-2 font-sidebar">
                                Car
                                <img src={process.env.PUBLIC_URL + 'fi_sort.png'} alt="logo" />
                              </th>
                              <th className="col-2 font-sidebar">
                                Start Rent
                                <img src={process.env.PUBLIC_URL + 'fi_sort.png'} alt="logo" />
                              </th>
                              <th className="col-2 font-sidebar">
                                Finish Rent
                                <img src={process.env.PUBLIC_URL + 'fi_sort.png'} alt="logo" />
                              </th>
                              <th className="col-2 font-sidebar">
                                Price
                                <img src={process.env.PUBLIC_URL + 'fi_sort.png'} alt="logo" />
                              </th>
                              <th className="col font-sidebar">
                                Status
                                <img src={process.env.PUBLIC_URL + 'fi_sort.png'} alt="logo" />
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="my-5">
                            <td className="text-center font-sidebar">1</td>
                            <td className="font-sidebar">User Email</td>
                            <td className="font-sidebar">Car</td>
                            <td className="font-sidebar">Start Rent</td>
                            <td className="font-sidebar">Finish Rent</td>
                            <td className="font-sidebar">Price</td>
                            <td className="font-sidebar">Status</td>
                          </tr>
                          <tr className="my-5">
                            <td className="text-center font-sidebar">2</td>
                            <td className="font-sidebar">User Email</td>
                            <td className="font-sidebar">Car</td>
                            <td className="font-sidebar">Start Rent</td>
                            <td className="font-sidebar">Finish Rent</td>
                            <td className="font-sidebar">Price</td>
                            <td className="font-sidebar">Status</td>
                          </tr>
                          <tr className="my-5">
                            <td className="text-center font-sidebar">3</td>
                            <td className="font-sidebar">User Email</td>
                            <td className="font-sidebar">Car</td>
                            <td className="font-sidebar">Start Rent</td>
                            <td className="font-sidebar">Finish Rent</td>
                            <td className="font-sidebar">Price</td>
                            <td className="font-sidebar">Status</td>
                          </tr>
                          <tr className="my-5">
                            <td className="text-center font-sidebar">4</td>
                            <td className="font-sidebar">User Email</td>
                            <td className="font-sidebar">Car</td>
                            <td className="font-sidebar">Start Rent</td>
                            <td className="font-sidebar">Finish Rent</td>
                            <td className="font-sidebar">Price</td>
                            <td className="font-sidebar">Status</td>
                          </tr>
                          <tr className="my-5">
                            <td className="text-center font-sidebar">5</td>
                            <td className="font-sidebar">User Email</td>
                            <td className="font-sidebar">Car</td>
                            <td className="font-sidebar">Start Rent</td>
                            <td className="font-sidebar">Finish Rent</td>
                            <td className="font-sidebar">Price</td>
                            <td className="font-sidebar">Status</td>
                          </tr>
                      </tbody>
                    </table>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </>
  );
};

export default Dashboard;