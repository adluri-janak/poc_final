import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const EmpDetails1 = ({clock}) => {

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
                value={clock.values.reporting_manager}
                onChange={clock.handleChange}
              />
              {formik.errors.reporting_manager ? (
                <div style={{ color: "red" }}>{formik.errors.reporting_manager}</div>
              ) : null}
            </div>
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
                value={clock.values.technical_lead}
                onChange={clock.handleChange}
              />
              {formik.errors.technical_lead ? (
                <div style={{ color: "red" }}>{formik.errors.technical_lead}</div>
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
                value={clock.values.cg_email}
                onChange={clock.handleChange}
              />
              {formik.errors.cg_email ? (
                <div style={{ color: "red" }}>{formik.errors.cg_email}</div>
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
                <b>Resource Status</b>
              </label>
              <input
                type="text"
                id="resource_status"
                className="form-control border-dark"
                placeholder="Enter your resource status"
                name="resource_status"
                value={clock.values.resource_status}
                onChange={clock.handleChange}
              />
              {formik.errors.resource_status ? (
                <div style={{ color: "red" }}>{formik.errors.resource_status}</div>
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
                <b>Employee ID</b>
              </label>
              <input
                type="text"
                id="employee_id"
                className="form-control border-dark"
                placeholder="Enter your employee id"
                name="employee_id"
                value={clock.values.employee_id}
                onChange={clock.handleChange}
              />
              {formik.errors.employee_id ? (
                <div style={{ color: "red" }}>
                  {formik.errors.employee_id}
                </div>
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
                <b>Global ID</b>
              </label>
              <input
                type="text"
                id="global_id"
                className="form-control border-dark"
                placeholder="Enter your global id"
                name="global_id"
                value={clock.values.global_id}
                onChange={clock.handleChange}
              />
              {formik.errors.global_id ? (
                <div style={{ color: "red" }}>{formik.errors.global_id}</div>
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
                <b>SSO ID</b>
              </label>
              <input
                type="text"
                id="sso_id"
                className="form-control border-dark"
                placeholder="Enter your sso id"
                name="sso_id"
                value={clock.values.sso_id}
                onChange={clock.handleChange}
              />
              {formik.errors.sso_id ? (
                <div style={{ color: "red" }}>
                  {formik.errors.sso_id}
                </div>
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
                <b>Axa Email</b>
              </label>
              <input
                type="text"
                id="axa_email"
                className="form-control border-dark"
                placeholder="Enter your axa email address"
                name="axa_email"
                value={clock.values.axa_email}
                onChange={clock.handleChange}
              />
              {formik.errors.axa_email ? (
                <div style={{ color: "red" }}>
                  {formik.errors.axa_email}
                </div>
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
                value={clock.values.cg_start_date}
                onChange={clock.handleChange}
              />
              {formik.errors.cg_start_date ? (
                <div style={{ color: "red" }}>
                  {formik.errors.cg_start_date}
                </div>
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
                <b>Axa Start Date</b>
              </label>
              <input
                type="text"
                id="axa_start_date"
                className="form-control border-dark"
                placeholder="Enter your axa start date"
                name="axa_start_date"
                value={clock.values.axa_start_date}
                onChange={clock.handleChange}
              />
              {formik.errors.axa_start_date ? (
                <div style={{ color: "red" }}>
                  {formik.errors.axa_start_date}
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
                <b>Axa Billing Date</b>
              </label>
              <input
                type="text"
                id="axa_billing_date"
                className="form-control border-dark"
                placeholder="Enter your axa billing date"
                name="axa_billing_date"
                value={clock.values.axa_billing_date}
                onChange={clock.handleChange}
              />
              {formik.errors.axa_billing_date ? (
                <div style={{ color: "red" }}>
                  {formik.errors.axa_billing_date}
                </div>
              ) : null}
            </div>
            
          </div>
    </div>
  )
}

export default EmpDetails1;