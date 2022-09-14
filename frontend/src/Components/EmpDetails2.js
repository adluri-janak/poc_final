import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const EmpDetails2 = ({clock}) => {

  const formik = useFormik({
    initialValues: {
      dummy: ""
    },
    onSubmit: async (clock) => {
      try {
        await axios.post(`${URL}/createDetail`, clock.values).then((res) => {
          console.log(res.data);
        });
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

        // togglePopup();
      } catch (err) {
        console.log(err);
      }
    },
    validate: (clock) => {
      let errors = {};
      if (!clock.values.first_name) {
        errors.first_name = "First Name is Required";
      }
      if (!clock.values.last_name) {
        errors.last_name = "Last Name is Required";
      }
      if (!clock.values.reporting_manager) {
        errors.reporting_manager = "Reporting manager is Required";
      }
      if (!clock.values.technical_lead) {
        errors.technical_lead = "Technical lead is Required";
      }
      if (!clock.values.resource_status) {
        errors.resource_status = "Resource status is Required";
      }
      if (!clock.values.gender) {
        errors.gender = "Gender is Required";
      }
      if (!clock.values.employee_id) {
        errors.employee_id = "Employee id is Required";
      }
      if (!clock.values.global_id) {
        errors.global_id = "Global id is Required";
      }
      if (!clock.values.skill) {
        errors.skill = "Skill is Required";
      }
      if (!clock.values.technology) {
        errors.technology = "Technology is Required";
      }
      if (!clock.values.bu) {
        errors.bu = "BU is Required";
      }
      if (!clock.values.resource_type) {
        errors.resource_type = "Resource type is Required";
      }
      if (!clock.values.grade) {
        errors.grade = "Grade is Required";
      }
      if (!clock.values.pyramid) {
        errors.pyramid = "Pyramid is Required";
      }
      if (!clock.values.base_location) {
        errors.base_location = "Base Location is Required";
      }
      if (!clock.values.anchor_location) {
        errors.anchor_location = "Anchor Location is Required";
      }
      if (!clock.values.sso_id) {
        errors.sso_id = "Sso ID is Required";
      }
      if (!clock.values.cg_email) {
        errors.cg_email = "Cg Email is Required";
      }
      if (!clock.values.axa_email) {
        errors.axa_email = "Axa Email is Required";
      }
      if (!clock.values.cg_start_date) {
        errors.cg_start_date = "Cg Start Date is Required";
      }
      if (!clock.values.axa_start_date) {
        errors.axa_start_date = "Axa Start Date is Required";
      }
      if (!clock.values.axa_billing_date) {
        errors.axa_billing_date = "Axa Billing Date is required";
      }
      if (!clock.values.axa_contract_renewal) {
        errors.axa_contract_renewal = "Axa Contract Renewal is Required";
      }
      if (!clock.values.plan_view_setup) {
        errors.plan_view_setup = "Plan View Setup is Required";
      }
      if (!clock.values.current_squad) {
        errors.current_squad = "Current Squad is Required";
      }
      if (!clock.values.address) {
        errors.address = "Address is Required";
      }
      if (!clock.values.phone_number) {
        errors.phone_number = "PhoneNumber is Required";
      }
      if (!clock.values.alternate_phone_number) {
        errors.alternate_phone_number = "AlternatePhoneNumber is Required";
      }
      if (!clock.values.user_id) {
        errors.user_id = "UserId is Required";
      }
      if (!clock.values.project_code) {
        errors.project_code = "Project Code is Required";
      }
      if (!clock.values.remote_desktop) {
        errors.remote_desktop = "Remote Desktop is Required";
      }
      if (!clock.values.onboarding_ticket) {
        errors.onboarding_ticket = "Onboarding Ticket is Required";
      }
      if (!clock.values.offboarding_ticket) {
        errors.offboarding_ticket = "Offboarding Ticket is Required";
      }
      if (!clock.values.release_date) {
        errors.release_date = "ReleaseDate is Required";
      }
      if (!clock.values.resigned) {
        errors.resigned = "Resigned is Required";
      }
      if (!clock.values.comments) {
        errors.comments = "Comments is Required";
      }
      return errors;
    },
  });
  return (
    <div>
        <div className="row g-3 justify-content-center align-items-center mt-2">
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
                value={clock.values.axa_contract_renewal}
                onChange={clock.handleChange}
              />
              {formik.errors.axa_contract_renewal ? (
                <div style={{ color: "red" }}>
                  {formik.errors.axa_contract_renewal}
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
                value={clock.values.plan_view_setup}
                onChange={clock.handleChange}
              />
              {formik.errors.plan_view_setup ? (
                <div style={{ color: "red" }}>
                  {formik.errors.plan_view_setup}
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
                value={clock.values.current_squad}
                onChange={clock.handleChange}
              />
              {formik.errors.current_squad ? (
                <div style={{ color: "red" }}>
                  {formik.errors.current_squad}
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
                value={clock.values.user_id}
                onChange={clock.handleChange}
              />
              {formik.errors.user_id ? (
                <div style={{ color: "red" }}>{formik.errors.user_id}</div>
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
                value={clock.values.project_code}
                onChange={clock.handleChange}
              />
              {formik.errors.project_code ? (
                <div style={{ color: "red" }}>
                  {formik.errors.project_code}
                </div>
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
                value={clock.values.remote_desktop}
                onChange={clock.handleChange}
              />
              {formik.errors.remote_desktop ? (
                <div style={{ color: "red" }}>
                  {formik.errors.remote_desktop}
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
                value={clock.values.onboarding_ticket}
                onChange={clock.handleChange}
              />
              {formik.errors.onboarding_ticket ? (
                <div style={{ color: "red" }}>
                  {formik.errors.onboarding_ticket}
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
                value={clock.values.offboarding_ticket}
                onChange={clock.handleChange}
              />
              {formik.errors.offboarding_ticket ? (
                <div style={{ color: "red" }}>
                  {formik.errors.offboarding_ticket}
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
                value={clock.values.release_date}
                onChange={clock.handleChange}
              />
              {formik.errors.release_date ? (
                <div style={{ color: "red" }}>
                  {formik.errors.release_date}
                </div>
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
                value={clock.values.resigned}
                onChange={clock.handleChange}
              />
              {formik.errors.resigned ? (
                <div style={{ color: "red" }}>{formik.errors.resigned}</div>
              ) : null}
            </div>
            
          </div>
    </div>
  )
}

export default EmpDetails2;