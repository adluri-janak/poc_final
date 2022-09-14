import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Skills = ({clock}) => {

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
                value={clock.values.skill}
                onChange={clock.handleChange}
              />
              {formik.errors.skill ? (
                <div style={{ color: "red" }}>{formik.errors.skill}</div>
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
                value={clock.values.technology}
                onChange={clock.handleChange}
              />
              {formik.errors.technology ? (
                <div style={{ color: "red" }}>{formik.errors.technology}</div>
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
                value={clock.values.bu}
                onChange={clock.handleChange}
              />
              {formik.errors.bu ? (
                <div style={{ color: "red" }}>{formik.errors.bu}</div>
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
                value={clock.values.grade}
                onChange={clock.handleChange}
              />
              {formik.errors.grade ? (
                <div style={{ color: "red" }}>{formik.errors.grade}</div>
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
                value={clock.values.pyramid}
                onChange={clock.handleChange}
              />
              {formik.errors.pyramid ? (
                <div style={{ color: "red" }}>{formik.errors.pyramid}</div>
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
                value={clock.values.anchor_location}
                onChange={clock.handleChange}
              />
              {formik.errors.anchor_location ? (
                <div style={{ color: "red" }}>
                  {formik.errors.anchor_location}
                </div>
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
                value={clock.values.resource_type}
                onChange={clock.handleChange}
              />
              {formik.errors.resource_type ? (
                <div style={{ color: "red" }}>
                  {formik.errors.resource_type}
                </div>
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
              {formik.errors.comments ? (
                <div style={{ color: "red" }}>{formik.errors.comments}</div>
              ) : null}
            </div>
          </div>
    </div>
  )
}

export default Skills;