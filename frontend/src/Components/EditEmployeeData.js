import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import "./Popup.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const EditEmployeeData = ({ clock, details }) => {
  const URL = "http://localhost:5000";
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const bad = async () => {
    const updateData ={
      personalDetails:{
          first_name: clock.values.first_name,
          last_name: clock.values.last_name,
          gender: clock.values.gender,
          base_location: clock.values.base_location,
          cg_email: clock.values.cg_email,
          phone_number: clock.values.phone_number,
          alternate_phone_number: clock.values.alternate_phone_number,
          address: clock.values.address
      },
      employerDetails:{
          reporting_manager: clock.values.reporting_manager,
          technical_lead: clock.values.technical_lead,
          resource_status: clock.values.resource_status,
          employee_id: clock.values.employee_id,
          global_id: clock.values.global_id,
          sso_id: clock.values.sso_id,
          axa_email: clock.values.axa_email,
          cg_start_date: clock.values.cg_start_date,
          axa_start_date: clock.values.axa_billing_date,
          axa_billing_date: clock.values.axa_billing_date,
          axa_contract_renewal: clock.values.axa_contract_renewal,
          plan_view_setup: clock.values.plan_view_setup,
          current_squad: clock.values.current_squad,
          user_id: clock.values.user_id,
          project_code: clock.values.project_code,
          remote_desktop: clock.values.remote_desktop,
          onboarding_ticket: clock.values.onboarding_ticket,
          offboarding_ticket: clock.values.offboarding_ticket,
          release_date: clock.values.release_date,
          resigned: clock.values.resigned
      },
      skills:{
          skill: clock.values.skill,
          technology: clock.values.technology,
          bu: clock.values.bu,
          grade: clock.values.grade,
          pyramid: clock.values.pyramid,
          anchor_location: clock.values.anchor_location,
          resource_type: clock.values.resource_type
      },
      comments: clock.values.comments,
    }

    try {
      await axios
        .put(`${URL}/updateDetail/${clock.values._id}`, updateData)
        .then((res) => {
          console.log(res.data);
        });
      togglePopup();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    bad();
    clock.values.first_name = "";
    clock.values.last_name = "";
    clock.values.reporting_manager = "";
    clock.values.technical_lead = "";
    clock.values.resource_status = "";
    clock.values.gender = "";
    clock.values.employee_id = "";
    clock.values.global_id = "";
    clock.values.skill = "";
    clock.values.technology = "";
    clock.values.bu = "";
    clock.values.resource_type = "";
    clock.values.grade = "";
    clock.values.pyramid = "";
    clock.values.base_location = "";
    clock.values.anchor_location = "";
    clock.values.sso_id = "";
    clock.values.cg_email = "";
    clock.values.axa_email = "";
    clock.values.cg_start_date = "";
    clock.values.axa_start_date = "";
    clock.values.axa_billing_date = "";
    clock.values.axa_contract_renewal = "";
    clock.values.plan_view_setup = "";
    clock.values.current_squad = "";
    clock.values.address = "";
    clock.values.phone_number = "";
    clock.values.alternate_phone_number = "";
    clock.values.user_id = "";
    clock.values.project_code = "";
    clock.values.remote_desktop = "";
    clock.values.onboarding_ticket = "";
    clock.values.offboarding_ticket = "";
    clock.values.release_date = "";
    clock.values.resigned = "";
    clock.values.comments = "";
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-light">
          ...............................................
        </p>
        <h1
          className="text-center"
          style={{
            borderRadius: "1px",
            color: "black",
            padding: "5px",
            margin: 5,
          }}
        >
          Update User Details
        </h1>
        <Link to="/getDetails">
          <button type="button" class="btn btn-success">
            Employee Details{" "}
            <span className="badge bg-light text-dark">{details.length}</span>
          </button>
        </Link>
      </div>

      <div
        className="d-flex justify-content-between align-items-start"
        style={{ marginTop: 20 }}
      >
        {/* <p
          style={{
            backgroundColor: "rgba(221, 248, 221, 0.516)",
            color: "rgba(221, 248, 221, 0.516)",
          }}
        >
          
        </p> */}
        <form
          onSubmit={clock.handleSubmit}
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            padding: "20px",
          }}
          // className="d-flex justify-content-start align-items-end"
        >
          <div className="row g-3 justify-content-center align-items-center mt-2">
            <div className="col-auto">
              <label
                htmlFor="first_name"
                className="col-form-label"
                style={{
                  // // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>First Name</b>
              </label>
              <input
                type="text"
                id="first_name"
                className="form-control border-dark"
                placeholder="Enter your first name"
                name="first_name"
                value={clock.values.personalDetails.first_name}
                onChange={clock.handleChange}
              />
              {clock.errors.first_name ? (
                <div style={{ color: "red" }}>{clock.errors.first_name}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="last_name"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Last Name</b>
              </label>
              <input
                type="text"
                id="last_name"
                className="form-control border-dark"
                placeholder="Enter your last name"
                name="last_name"
                value={clock.values.personalDetails.last_name}
                onChange={clock.handleChange}
              />
              {clock.errors.last_name ? (
                <div style={{ color: "red" }}>{clock.errors.last_name}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="reporting_manager"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Reporting Manager</b>
              </label>
              <input
                type="text"
                id="reporting_manager"
                className="form-control border-dark"
                placeholder="Enter your reporting manager"
                name="reporting_manager"
                value={clock.values.employerDetails.reporting_manager}
                onChange={clock.handleChange}
              />
              {clock.errors.reporting_manager ? (
                <div style={{ color: "red" }}>
                  {clock.errors.reporting_manager}
                </div>
              ) : null}
            </div>
          </div>

          <div className="row g-3 justify-content-center align-items-center mt-2">
            <div className="col-auto">
              <label
                htmlFor="technical_lead"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Technical Lead</b>
              </label>
              <input
                type="text"
                id="technical_lead"
                className="form-control border-dark"
                placeholder="Enter your technical lead"
                name="technical_lead"
                value={clock.values.employerDetails.technical_lead}
                onChange={clock.handleChange}
              />
              {clock.errors.technical_lead ? (
                <div style={{ color: "red" }}>
                  {clock.errors.technical_lead}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="resource_status"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Resource status</b>
              </label>
              <input
                type="text"
                id="resource_status"
                className="form-control border-dark"
                placeholder="Enter your resource status"
                name="resource_status"
                value={clock.values.employerDetails.resource_status}
                onChange={clock.handleChange}
              />
              {clock.errors.resource_status ? (
                <div style={{ color: "red" }}>
                  {clock.errors.resource_status}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="gender"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Gender</b>
              </label>
              <input
                type="text"
                id="gender"
                className="form-control border-dark"
                placeholder="Enter your gender"
                name="gender"
                value={clock.values.personalDetails.gender}
                onChange={clock.handleChange}
              />
              {clock.errors.gender ? (
                <div style={{ color: "red" }}>{clock.errors.gender}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="employee_id"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Employee id</b>
              </label>
              <input
                type="text"
                id="employee_id"
                className="form-control border-dark"
                placeholder="Enter your employee id"
                name="employee_id"
                value={clock.values.employerDetails.employee_id}
                onChange={clock.handleChange}
              />
              {clock.errors.employee_id ? (
                <div style={{ color: "red" }}>{clock.errors.employee_id}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="global_id"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Global id</b>
              </label>
              <input
                type="text"
                id="global_id"
                className="form-control border-dark"
                placeholder="Enter your Global id"
                name="global_id"
                value={clock.values.employerDetails.global_id}
                onChange={clock.handleChange}
              />
              {clock.errors.global_id ? (
                <div style={{ color: "red" }}>{clock.errors.global_id}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="skill"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Skill</b>
              </label>
              <input
                type="text"
                id="skill"
                className="form-control border-dark"
                placeholder="Enter your skill"
                name="skill"
                value={clock.values.skills.skill}
                onChange={clock.handleChange}
              />
              {clock.errors.skill ? (
                <div style={{ color: "red" }}>{clock.errors.skill}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="technology"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Technology</b>
              </label>
              <input
                type="text"
                id="technology"
                className="form-control border-dark"
                placeholder="Enter your technology"
                name="technology"
                value={clock.values.skills.technology}
                onChange={clock.handleChange}
              />
              {clock.errors.technology ? (
                <div style={{ color: "red" }}>{clock.errors.technology}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="bu"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>BU</b>
              </label>
              <input
                type="text"
                id="bu"
                className="form-control border-dark"
                placeholder="Enter your BU"
                name="bu"
                value={clock.values.skills.bu}
                onChange={clock.handleChange}
              />
              {clock.errors.bu ? (
                <div style={{ color: "red" }}>{clock.errors.bu}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="resource_type"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Resource type</b>
              </label>
              <input
                type="text"
                id="resource_type"
                className="form-control border-dark"
                placeholder="Enter your resource type"
                name="resource_type"
                value={clock.values.skills.resource_type}
                onChange={clock.handleChange}
              />
              {clock.errors.resource_type ? (
                <div style={{ color: "red" }}>{clock.errors.resource_type}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="grade"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Grade</b>
              </label>
              <input
                type="text"
                id="grade"
                className="form-control border-dark"
                placeholder="Enter your grade"
                name="grade"
                value={clock.values.skills.grade}
                onChange={clock.handleChange}
              />
              {clock.errors.grade ? (
                <div style={{ color: "red" }}>{clock.errors.grade}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="pyramid"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Pyramid</b>
              </label>
              <input
                type="text"
                id="pyramid"
                className="form-control border-dark"
                placeholder="Enter your pyramid"
                name="pyramid"
                value={clock.values.skills.pyramid}
                onChange={clock.handleChange}
              />
              {clock.errors.pyramid ? (
                <div style={{ color: "red" }}>{clock.errors.pyramid}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="base_location"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Base location</b>
              </label>
              <input
                type="text"
                id="base_location"
                className="form-control border-dark"
                placeholder="Enter your base location"
                name="base_location"
                value={clock.values.personalDetails.base_location}
                onChange={clock.handleChange}
              />
              {clock.errors.base_location ? (
                <div style={{ color: "red" }}>{clock.errors.base_location}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="anchor_location"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Anchor location</b>
              </label>
              <input
                type="text"
                id="anchor_location"
                className="form-control border-dark"
                placeholder="Enter your Anchor location"
                name="anchor_location"
                value={clock.values.skills.anchor_location}
                onChange={clock.handleChange}
              />
              {clock.errors.anchor_location ? (
                <div style={{ color: "red" }}>
                  {clock.errors.anchor_location}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="sso_id"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>SSO id</b>
              </label>
              <input
                type="text"
                id="sso_id"
                className="form-control border-dark"
                placeholder="Enter your sso id"
                name="sso_id"
                value={clock.values.employerDetails.sso_id}
                onChange={clock.handleChange}
              />
              {clock.errors.sso_id ? (
                <div style={{ color: "red" }}>{clock.errors.sso_id}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="cg_email"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>CG Email</b>
              </label>
              <input
                type="text"
                id="cg_email"
                className="form-control border-dark"
                placeholder="Enter your cg email"
                name="cg_email"
                value={clock.values.personalDetails.cg_email}
                onChange={clock.handleChange}
              />
              {clock.errors.cg_email ? (
                <div style={{ color: "red" }}>{clock.errors.cg_email}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="axa_email"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>AXA Email</b>
              </label>
              <input
                type="text"
                id="axa_email"
                className="form-control border-dark"
                placeholder="Enter your axa email"
                name="axa_email"
                value={clock.values.employerDetails.axa_email}
                onChange={clock.handleChange}
              />
              {clock.errors.axa_email ? (
                <div style={{ color: "red" }}>{clock.errors.axa_email}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="cg_start_date"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>CG Start Date</b>
              </label>
              <input
                type="text"
                id="cg_start_date"
                className="form-control border-dark"
                placeholder="Enter your cg start date"
                name="cg_start_date"
                value={clock.values.employerDetails.cg_start_date}
                onChange={clock.handleChange}
              />
              {clock.errors.cg_start_date ? (
                <div style={{ color: "red" }}>{clock.errors.cg_start_date}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="axa_start_date"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>AXA Start Date</b>
              </label>
              <input
                type="text"
                id="axa_start_date"
                className="form-control border-dark"
                placeholder="Enter your axa start date"
                name="axa_start_date"
                value={clock.values.employerDetails.axa_start_date}
                onChange={clock.handleChange}
              />
              {clock.errors.axa_start_date ? (
                <div style={{ color: "red" }}>
                  {clock.errors.axa_start_date}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="axa_billing_date"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>AXA Billing Date</b>
              </label>
              <input
                type="text"
                id="axa_billing_date"
                className="form-control border-dark"
                placeholder="Enter your axa billing date"
                name="axa_billing_date"
                value={clock.values.employerDetails.axa_billing_date}
                onChange={clock.handleChange}
              />
              {clock.errors.axa_billing_date ? (
                <div style={{ color: "red" }}>
                  {clock.errors.axa_billing_date}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="axa_contract_renewal"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>AXA Contract Renewal</b>
              </label>
              <input
                type="text"
                id="axa_contract_renewal"
                className="form-control border-dark"
                placeholder="Enter your axa contract renewal"
                name="axa_contract_renewal"
                value={clock.values.employerDetails.axa_contract_renewal}
                onChange={clock.handleChange}
              />
              {clock.errors.axa_contract_renewal ? (
                <div style={{ color: "red" }}>
                  {clock.errors.axa_contract_renewal}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="plan_view_setup"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Plan View Setup</b>
              </label>
              <input
                type="text"
                id="plan_view_setup"
                className="form-control border-dark"
                placeholder="Enter your plan view setup"
                name="plan_view_setup"
                value={clock.values.employerDetails.plan_view_setup}
                onChange={clock.handleChange}
              />
              {clock.errors.plan_view_setup ? (
                <div style={{ color: "red" }}>
                  {clock.errors.plan_view_setup}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="current_squad"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Current Squad</b>
              </label>
              <input
                type="text"
                id="current_squad"
                className="form-control border-dark"
                placeholder="Enter your current squad"
                name="current_squad"
                value={clock.values.employerDetails.current_squad}
                onChange={clock.handleChange}
              />
              {clock.errors.current_squad ? (
                <div style={{ color: "red" }}>{clock.errors.current_squad}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="address"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Address</b>
              </label>
              <input
                type="text"
                id="address"
                className="form-control border-dark"
                placeholder="Enter your address"
                name="address"
                value={clock.values.personalDetails.address}
                onChange={clock.handleChange}
              />
              {clock.errors.address ? (
                <div style={{ color: "red" }}>{clock.errors.address}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="phone_number"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                id="phone_number"
                className="form-control border-dark"
                placeholder="Enter your phone number"
                name="phone_number"
                value={clock.values.personalDetails.phone_number}
                onChange={clock.handleChange}
              />
              {clock.errors.phone_number ? (
                <div style={{ color: "red" }}>{clock.errors.phone_number}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="alternate_phone_number"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Alternate Phone Number</b>
              </label>
              <input
                type="text"
                id="alternate_phone_number"
                className="form-control border-dark"
                placeholder="Enter your alternate phone number"
                name="alternate_phone_number"
                value={clock.values.personalDetails.alternate_phone_number}
                onChange={clock.handleChange}
              />
              {clock.errors.alternate_phone_number ? (
                <div style={{ color: "red" }}>
                  {clock.errors.alternate_phone_number}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="user_id"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>User Id</b>
              </label>
              <input
                type="text"
                id="user_id"
                className="form-control border-dark"
                placeholder="Enter your user id"
                name="user_id"
                value={clock.values.employerDetails.user_id}
                onChange={clock.handleChange}
              />
              {clock.errors.user_id ? (
                <div style={{ color: "red" }}>{clock.errors.user_id}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="project_code"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Project Code</b>
              </label>
              <input
                type="text"
                id="project_code"
                className="form-control border-dark"
                placeholder="Enter your project code"
                name="project_code"
                value={clock.values.employerDetails.project_code}
                onChange={clock.handleChange}
              />
              {clock.errors.project_code ? (
                <div style={{ color: "red" }}>{clock.errors.project_code}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="remote_desktop"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Remote Desktop</b>
              </label>
              <input
                type="text"
                id="remote_desktop"
                className="form-control border-dark"
                placeholder="Enter your remote desktop"
                name="remote_desktop"
                value={clock.values.employerDetails.remote_desktop}
                onChange={clock.handleChange}
              />
              {clock.errors.remote_desktop ? (
                <div style={{ color: "red" }}>
                  {clock.errors.remote_desktop}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="onboarding_ticket"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Onboarding Ticket</b>
              </label>
              <input
                type="text"
                id="onboarding_ticket"
                className="form-control border-dark"
                placeholder="Enter your onboarding ticket"
                name="onboarding_ticket"
                value={clock.values.employerDetails.onboarding_ticket}
                onChange={clock.handleChange}
              />
              {clock.errors.onboarding_ticket ? (
                <div style={{ color: "red" }}>
                  {clock.errors.onboarding_ticket}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="offboarding_ticket"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Offboarding Ticket</b>
              </label>
              <input
                type="text"
                id="offboarding_ticket"
                className="form-control border-dark"
                placeholder="Enter your offboarding ticket"
                name="offboarding_ticket"
                value={clock.values.employerDetails.offboarding_ticket}
                onChange={clock.handleChange}
              />
              {clock.errors.offboarding_ticket ? (
                <div style={{ color: "red" }}>
                  {clock.errors.offboarding_ticket}
                </div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="release_date"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Release Date</b>
              </label>
              <input
                type="text"
                id="release_date"
                className="form-control border-dark"
                placeholder="Enter your release date"
                name="release_date"
                value={clock.values.employerDetails.release_date}
                onChange={clock.handleChange}
              />
              {clock.errors.release_date ? (
                <div style={{ color: "red" }}>{clock.errors.release_date}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="resigned"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Resigned</b>
              </label>
              <input
                type="text"
                id="resigned"
                className="form-control border-dark"
                placeholder="Enter your resigned status"
                name="resigned"
                value={clock.values.employerDetails.resigned}
                onChange={clock.handleChange}
              />
              {clock.errors.resigned ? (
                <div style={{ color: "red" }}>{clock.errors.resigned}</div>
              ) : null}
            </div>
            <div className="col-auto">
              <label
                htmlFor="comments"
                className="col-form-label"
                style={{
                  // border: "1px solid white",
                  borderRadius: "5px",
                  // backgroundColor: "green",
                  color: "black",
                  padding: "5px",
                  margin: 5,
                }}
              >
                <b>Comments</b>
              </label>
              <input
                type="text"
                id="comments"
                className="form-control border-dark"
                placeholder="Enter your comments"
                name="comments"
                value={clock.values.comments}
                onChange={clock.handleChange}
              />
              {clock.errors.comments ? (
                <div style={{ color: "red" }}>{clock.errors.comments}</div>
              ) : null}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <button
              className="btn btn-success text-light"
              onClick={(e) => handleUpdate(e)}
            >
              Update
            </button>
          </div>

          {isOpen && (
            <Popup
              style={{ width: 30, height: 20 }}
              content={
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <h2 className="text-dark">
                    <b>Details have been updated</b>{" "}
                    <DoneOutlineIcon style={{ fontSize: 60, color: "green" }} />
                  </h2>
                  <div className="mt-3">
                    <button
                      className="btn btn-danger mt-4"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Close
                    </button>
                    <Link
                      to="/getDetails"
                      className="btn btn-light mt-4 mx-2"
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      Employee Details
                    </Link>
                  </div>
                </div>
              }
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeData;
