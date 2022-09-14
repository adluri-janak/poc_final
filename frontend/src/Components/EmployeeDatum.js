import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { store } from "../App";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup2 from "./Popup2";
import "./Popup2.css";

const EmployeeDatum = ({ clock, details, setDetails }) => {
  const URL = "http://localhost:5000";
  const [timer, setTimer] = useState(0);
  const [cone, setCone] = useContext(store);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`${URL}/getDetails`).then(
      (res) => {
        setDetails(res.data);
      },
      [timer]
    );
  },[]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = async (id) => {
    await axios.get(`${URL}/getDetail/${id}`).then((res) => {
      clock.setValues(res.data);
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/deleteDetail/${id}`).then((res) => {
      console.log(res.data);
      setTimer(timer + 1);
      togglePopup();
    });
  };

  return (
    <div className="container" >
      {cone.map((item) => {
        return (
          <div key={item._id} className="my-3">
            <div
              style={{ textAlign: "center" }}
              className="my-4 d-flex justify-content-between align-items-center"
            >
              <Link to="/getDetails" title="Employee Details">
                <button type="button" class="btn btn-success">
                  Employee Details{" "}
                  <span className="badge bg-light text-dark">
                    {details.length}
                  </span>
                </button>
              </Link>
              <h2>
                {item?.personalDetails?.first_name} {item?.personalDetails?.last_name}'s DATA
              </h2>.
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  to="#"
                  onClick={() => handleDelete(item._id)}
                  className="mx-2"
                  title="Delete"
                >
                  <button className="btn btn-danger">Delete</button>
                </Link>
              
              <Link title="Edit" onClick={() => handleEdit(item._id)} to="/updateDetail">
                <button className="btn btn-success">Edit</button>
              </Link>
              </div>
            </div>

            <ul className="list-group list-group-horizontal d-flex justify-content-start align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>First Name: </b>
                  {item?.personalDetails?.first_name}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Last Name: </b>
                  {item?.personalDetails?.last_name}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Reporting Mgr: </b>
                  {item?.employerDetails?.reporting_manager}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Technical Lead: </b>
                  {item?.employerDetails?.technical_lead}
                </p>
              </li>

              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Gender: </b>
                  {item?.personalDetails?.gender}
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal d-flex justify-content-start align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Employee Id: </b>
                  {item?.employerDetails?.employee_id}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Global Id: </b>
                  {item?.employerDetails?.global_id}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Skill: </b>
                  {item?.skills?.skill}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Tech: </b>
                  {item?.skills?.technology}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>BU: </b>
                  {item?.skills?.bu}
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal d-flex justify-content-start align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Resouce type: </b>
                  {item?.skills?.resource_type}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Grade: </b>
                  {item?.skills?.grade}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Pyramid: </b>
                  {item?.skills?.pyramid}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Base Location: </b>
                  {item?.personalDetails?.base_location}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Anc Location: </b>
                  {item?.skills?.anchor_location}
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal d-flex justify-content-start align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>SSO ID: </b>
                  {item?.employerDetails?.sso_id}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>CG Em: </b>
                  {item?.personalDetails?.cg_email}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>CG St Date: </b>
                  {item?.employerDetails?.cg_start_date}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Axa St Date: </b>
                  {item?.employerDetails?.axa_start_date}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Axa Em: </b>
                  {item?.employerDetails?.axa_email}
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal d-flex justify-content-start align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Axa Bill Dt: </b>
                  {item?.employerDetails?.axa_billing_date}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Axa Cont Renewal: </b>
                  {item?.employerDetails?.axa_contract_renewal}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Plan View Setup: </b>
                  {item?.employerDetails?.plan_view_setup}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Current Squad: </b>
                  {item?.employerDetails?.current_squad}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Address: </b>
                  {item?.personalDetails?.address}
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal d-flex justify-content-start align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Ph Number: </b>
                  {item?.personalDetails?.phone_number}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Alt Ph Num: </b>
                  {item?.personalDetails?.alternate_phone_number}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>User Id: </b>
                  {item?.employerDetails?.user_id}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Project Code: </b>
                  {item?.employerDetails?.project_code}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Remote Desktop: </b>
                  {item?.employerDetails?.remote_desktop}
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal d-flex justify-content-start align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Resource Status: </b>
                  {item?.employerDetails?.resource_status}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Onboarding Ticket: </b>
                  {item?.employerDetails?.onboarding_ticket}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Offboarding Ticket: </b>
                  {item?.employerDetails?.offboarding_ticket}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Release Date: </b>
                  {item?.employerDetails?.release_date}
                </p>
              </li>
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Resigned: </b>
                  {item?.employerDetails?.resigned}
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal d-flex justify-content-center align-items-center my-2">
              <li
                className="list-group-item border-dark list-group-item-action d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "82px" }}
              >
                <p>
                  <b>Comments: </b>
                  {item.comments}
                </p>
              </li>
            </ul>
          </div>
        );
      })}
      {isOpen && (
        <Popup2
          style={{ width: 40, height: 50 }}
          content={
            <div className="d-flex flex-column justify-content-start align-items-start">
              <h2 className="text-dark">
                <b>User has been deleted</b>{" "}
                <DeleteIcon style={{ fontSize: 35, color: "red" }} />
              </h2>
              <div className="mt-3">
                <Link to="/getDetails">
                <button
                  className="btn btn-danger mt-4"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Close
                </button>
                </Link>
                
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default EmployeeDatum;
