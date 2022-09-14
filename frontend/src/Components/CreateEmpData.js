import React, { useState } from "react";
// import styles from "./NewUser.module.css"
import "antd/dist/antd.css";
import { Button, message, Steps } from "antd";
import PersonalDetails from "./PersonalDetails";
import EmpDetails1 from "./EmpDetails1";
import EmpDetails2 from "./EmpDetails2";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { store } from "../App.js";
import axios from "axios";
import Popup from "./Popup";
import "./Popup.css";
import Popup4 from "./Popup4";
import "./Popup4.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ErrorIcon from "@mui/icons-material/Error";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import SendIcon from '@mui/icons-material/Send';

const CreateEmpData = ({ clock }) => {
  const [current, setCurrent] = React.useState(0);
  //const [cone, setCone] = React.useContext(store);
  const URL = "http://localhost:5000";
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [sample, setSample] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [filled, setFilled] = useState(0);

  const { Step } = Steps;
  const steps = [
    {
      title: "Personal Details",
      content: <PersonalDetails clock={clock} />,
    },
    {
      title: "Employee Details",
      content: <EmpDetails1 clock={clock} />,
    },
    {
      title: "Employer Details",
      content: <EmpDetails2 clock={clock} />,
    },
    {
      title: "Skills",
      content: <Skills clock={clock} />,
    },
  ];
  const inStyles = {
    stepsContent: {
      width: "800px",
      margin: "0 auto",
    },
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const handleReload = () => {
    window.location.reload();
  }

  const handleSubmit = () => {
    var a = 0
    for (var [keys, values] of Object.entries(clock.values)) {
      
      //if values are empty
      if (values == "") {
        a+=1;
        console.log(a)
        console.log("Input fields are empty")
      }
      // setSample(sample+1)
    }

    if (a != 0) {
      console.log("Printed");
      setFilled(filled + 1);
      togglePopup2();
    }
    //console.log("clock.values",clock.values);

    const postData ={
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
    if(a == 0) {
      axios.post(`${URL}/createDetail`, postData).then((res) => {
        console.log(res.data);
      });

      //after hitting submit and post is succesful all clock values will be reset to ""
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
      togglePopup();
    }
  };

  return (
    <div className="container">
      {/* className={styles.newUserDetailsParent} */}
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {/* <div className="d-flex justify-content-around align-items-center"> */}

      <div className="steps-action d-flex justify-content-around align-items-center">
        <div className="d-flex justify-content-around align-items-center">
          <div><p style={{color: 'rgba(221, 248, 221, 0.516)'}}>....................................</p></div>
        <div style={inStyles.stepsContent} className="steps-content">
            <h2 style={{ textAlign: "center" }}>{steps[current].title}</h2>
            {steps[current].content}
          </div>
          
        
        <div className="d-flex flex-column justify-content-center align-items-center">
        {current === steps.length - 1 && (
          
              <Button
                type="primary"
                title="Refresh"
                onClick={handleReload}
                style={{
                  backgroundColor: "green",
                  width: "80px",
                  height: "40px",
                  borderRadius: "7px",
                  marginBottom: "140px",
                }}
                className="mt-3"
              >
                {/* <RefreshIcon /> */}
                <b>STEP 1</b>
              </Button>
            )}
            {current > 0 && (
              <Button
              title="Previous"
                style={{
                  // margin: "0 8px",
                  
                  backgroundColor: "white",
                  width: "120px",
                  height: "40px",
                  borderRadius: "7px",
                  color: "green",
                  border: "1px solid black",
                }}
                onClick={() => prev()}
              >
                <b><KeyboardDoubleArrowLeftIcon style={{fontSize: '40px', paddingBottom: '8px'}}/></b>
              </Button>
            )}
            
            {current < steps.length - 1 && (
              <Button
                type="primary"
                title="Next"
                style={{
                  backgroundColor: "green",
                  width: "120px",
                  height: "40px",
                  borderRadius: "7px",
                  // marginBottom: "30px",
                }}
                className="mt-3"
                onClick={() => next()}
              >
                <b><KeyboardDoubleArrowRightIcon style={{fontSize: '40px', paddingBottom: '8px'}}/></b>
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                title="Submit"
                onClick={() => {
                  // message.success('Processing complete!');
                  handleSubmit();
                  // togglePopup();
                }}
                style={{
                  backgroundColor: "green",
                  width: "120px",
                  height: "40px",
                  borderRadius: "7px",
                  marginBottom: "30px",
                }}
                className="mt-3"
              >
                <b>SUBMIT</b>
              </Button>
            )}
          </div>
          </div>
      {isOpen && (
        <Popup
          style={{ width: 30, height: 20 }}
          content={
            <div className="d-flex flex-column justify-content-start align-items-start">
              <h2 className="text-dark">
                <b>Details have been created</b>{" "}
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
      </div>
      
      {isOpen2 && filled != 0 && (
        <Popup4
          style={{ width: 30, height: 20 }}
          content={
            <div className="d-flex flex-column justify-content-start align-items-start">
              <h2 className="text-dark">
                <b>Details were missing</b>{" "}
                <ErrorIcon style={{ fontSize: 60, color: "red" }} />
              </h2>
              <h5>Kindly, fill the form completely and then Submit....</h5>
              <div className="mt-3">
                <button
                  className="btn btn-danger mt-4"
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  Close
                </button>
                {/* <Link
                  to="/getDetails"
                  className="btn btn-light mt-4 mx-2"
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  Employee Details
                </Link> */}
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};
export default CreateEmpData;
