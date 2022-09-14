import React, { useState, createContext} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import { useFormik } from "formik";
import Navbar from "./Components/Navbar";
import EmployeeDatum from "./Components/EmployeeDatum";
import EditEmployeeData from "./Components/EditEmployeeData";
import EmployeeData from "./Components/EmployeeData";
import CreateEmployeeData from "./Components/CreateEmployeeData";
import CreateEmpData from "./Components/CreateEmpData";

export const store = createContext();
const App = () => {
  const URL = "http://localhost:5000";
  const [details, setDetails] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
  ]);

  const [cone, setCone] = useState({
    first_name: "",
    last_name: "",
    reporting_manager: "",
    technical_lead: "",
    resource_status: "",
    gender: "",
    employee_id: "",
    global_id: "",
    skill: "",
    technology: "",
    bu: "",
    resource_type: "",
    grade: "",
    pyramid: "",
    base_location: "",
    anchor_location: "",
    sso_id: "",
    cg_email: "",
    axa_email: "",
    cg_start_date: "",
    axa_start_date: "",
    axa_billing_date: "",
    axa_contract_renewal: "",
    plan_view_setup: "",
    current_squad: "",
    address: "",
    phone_number: "",
    alternate_phone_number: "",
    user_id: "",
    project_code: "",
    remote_desktop: "",
    onboarding_ticket: "",
    offboarding_ticket: "",
    release_date: "",
    resigned: "",
    comments: ""
});

const formik = useFormik({
  initialValues: {
    first_name: "",
    last_name: "",
    reporting_manager: "",
    technical_lead: "",
    resource_status: "",
    gender: "",
    employee_id: "",
    global_id: "",
    skill: "",
    technology: "",
    bu: "",
    resource_type: "",
    grade: "",
    pyramid: "",
    base_location: "",
    anchor_location: "",
    sso_id: "",
    cg_email: "",
    axa_email: "",
    cg_start_date: "",
    axa_start_date: "",
    axa_billing_date: "",
    axa_contract_renewal: "",
    plan_view_setup: "",
    current_squad: "",
    address: "",
    phone_number: "",
    alternate_phone_number: "",
    user_id: "",
    project_code: "",
    remote_desktop: "",
    onboarding_ticket: "",
    offboarding_ticket: "",
    release_date: "",
    resigned: "",
    comments: ""
    },
  });
  return (
    <store.Provider value={[cone, setCone]}>
      <BrowserRouter>
      <Navbar details={details} setDetails={setDetails} />
      <Routes>
        <Route
          path="/"
          element={<Home clock={formik} details={details} setDetails={setDetails}/>}
        />
        <Route
          path="/createDetail"
          element={
            <CreateEmpData
              details={details}
              setDetails={setDetails}
              clock={formik}
            />
          }
        />
        <Route
          path="/getDetails"
          element={
            <EmployeeData
              details={details}
              setDetails={setDetails}
              clock={formik}
            />
          }
        />
        <Route
          path="/updateDetail"
          element={
            <EditEmployeeData
              details={details}
              setDetails={setDetails}
              clock={formik}
            />
          }
        />
        <Route
          path="/viewDetails"
          element={
            <EmployeeDatum
              details={details}
              setDetails={setDetails}
              clock={formik}
            />
          }
        />
      </Routes>
    </BrowserRouter>
    </ store.Provider>
    
  );
};

export default App;
