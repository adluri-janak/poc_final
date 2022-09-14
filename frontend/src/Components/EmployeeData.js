import React, { useState, useEffect, useContext } from "react";
import { store } from "../App";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Popup2 from "./Popup2";
import "./Popup2.css";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const EmployeeData = ({ clock, details, setDetails }) => {
  const URL = "http://localhost:5000";
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cone, setCone] = useContext(store);
  const [searchedData, setSearchedData] = useState("");
  const [name, setName] = useState("");
  const [invalidData, setInvalidData] = useState(0);
  const [nani, setNani] = useState(0);

  // console.log(search)
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getDet = () => {
    axios.get(`${URL}/getDetails`).then((res) => {
      setDetails(res.data);
    });
  };
  useEffect(() => {
    axios.get(`${URL}/getDetails`).then((res) => {
      setDetails(res.data);
    });
  },[]);

  const handleView = (id) => {
    for (let i = 0; i < details.length; i++) {
      if (details[i]._id == id) {
        setCone([details[i]]);
      }
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    let ad = search.split("");

    for (var i = 0; i < details.length; i++) {
      if (search.length == 0) {
        setNani(nani + 1);
      } else if (search == details[i].personalDetails.first_name) {
        setName(details.filter((item) => search == item.personalDetails.first_name));
      } else if (search == details[i].personalDetails.employee_id) {
        setSearchedData(details.filter((item) => search == item.employerDetails.employee_id));
      } else if (
        search != details[i].personalDetails.first_name ||
        search != details[i].employerDetails.employee_id
      ) {
        setInvalidData(invalidData + 1);
      } else {
        console.log("Not found");
      }
    }
  };

  return (
    <div className="my-4 container-fluid d-flex flex-direction-row justify-content-center align-items-center flex-wrap">
      <div className="input-group d-flex justify-content-center align-items-center">
        <div
          className="form-outline"
          style={{
            width: "400px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          {nani > 0 ? (
            <input
              type="search"
              onChange={handleChange}
              name="search"
              id="form1"
              className="form-control"
              placeholder={`${search.length} results found`}
            />
          ) : (
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              id="form1"
              className="form-control"
              placeholder="Search By Emp ID Or Employee's First Name"
            />
          )}
        </div>
        <button
          type="button"
          onClick={handleSearch}
          className="btn btn-success d-flex justify-content-center align-items-center"
          style={{ height: "40px", width: "40px" }}
          title="Search"
        >
          <SearchIcon />
        </button>
      </div>

      {searchedData ? (
        searchedData.map((item) => {
          return (
            <div className="d-flex flex-column my-3">
              <div
                className="card d-flex flex-direction-row mx-4 my-3"
                style={{ width: "300px", height: "300px", borderRadius: "50%" }}
                title={item.personalDetails?.first_name + " " + item.personalDetails?.last_name}
              >
                <Link
                  to="/viewDetails"
                  onClick={() => handleView(item._id)}
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "300px",
                      height: "300px",
                      // backgroundColor: "rgba(115,219,182)",
                      borderRadius: "50%",
                    }}
                  >
                    <p style={{ fontSize: "150px", paddingTop: "120px" }}>
                      {item?.personalDetails?.first_name
                        ? item.personalDetails?.first_name.charAt(0).toUpperCase()
                        : "U"}
                      {item?.personalDetails?.last_name
                        ? item.personalDetails?.last_name.charAt(0).toUpperCase()
                        : "U"}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center mx-3">
                {/* <Link
            onClick={() => handleEdit(item._id)}
            
            // style={{border: '1px solid black', borderRadius: '50px', padding: '10px'}}
            to="/updateDetail"
          >
            <EditIcon className="edit-link" style={{fontSize: '35px', color: 'black'}}/>
          </Link> */}
                <h2 className="card-title">
                  {item?.personalDetails?.first_name ? item.personalDetails?.first_name : "Unknown"}{" "}
                  {item?.personalDetails?.last_name ? item.personalDetails?.last_name : "User"}
                </h2>
                {/* <Link to="#" onClick={() => handleDelete(item._id)} className="mx-2">
            <DeleteIcon className="delete-icon" style={{fontSize: '35px', color: 'black'}}/>
          </Link> */}
              </div>
            </div>
          );
        })
      ) : name ? (
        name.map((item) => {
          return (
            <div className="d-flex flex-column my-3">
              <div
                className="card d-flex flex-direction-row mx-4 my-3"
                style={{ width: "300px", height: "300px", borderRadius: "50%" }}
                title={item.personalDetails?.first_name + " " + item.personalDetails?.last_name}
              >
                <Link
                  to="/viewDetails"
                  onClick={() => handleView(item._id)}
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "300px",
                      height: "300px",
                      // backgroundColor: "rgba(115,219,182)",
                      borderRadius: "50%",
                    }}
                  >
                    <p style={{ fontSize: "150px" , paddingTop: "120px" }}>
                      {item?.personalDetails?.first_name
                        ? item.personalDetails?.first_name.charAt(0).toUpperCase()
                        : "U"}
                      {item?.personalDetails?.last_name
                        ? item.personalDetails?.last_name.charAt(0).toUpperCase()
                        : "U"}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center mx-3">
                {/* <Link
            onClick={() => handleEdit(item._id)}
            
            // style={{border: '1px solid black', borderRadius: '50px', padding: '10px'}}
            to="/updateDetail"
          >
            <EditIcon className="edit-link" style={{fontSize: '35px', color: 'black'}}/>
          </Link> */}
                <h2 className="card-title">
                  {item?.personalDetails?.first_name ? item.personalDetails?.first_name : "Unknown"}{" "}
                  {item?.personalDetails?.last_name ? item.personalDetails?.last_name : "User"}
                </h2>
                {/* <Link to="#" onClick={() => handleDelete(item._id)} className="mx-2">
            <DeleteIcon className="delete-icon" style={{fontSize: '35px', color: 'black'}}/>
          </Link> */}
              </div>
            </div>
          );
        })
      ) : nani > 0 ? (
        <div className="my-4">
          <h3 className="text-danger text-center">No Results found.....</h3>
          <h3 className="text-danger text-center">
            Please type Something in the Search bar to see the Data
          </h3>
          <div className="my-4 d-flex justify-content-center align-items-center">
            <button className="btn btn-success" onClick={handleReload}>
              Back to Employee Details
            </button>
          </div>
        </div>
      ) : invalidData != 0 ? (
        <div className="my-4">
          <h3 className="text-danger text-center">User Not Found</h3>
          <h3 className="text-danger text-center">
            Please Enter Valid Emp ID/Emp Name......
          </h3>
          <div className="my-4 d-flex justify-content-center align-items-center">
            <button className="btn btn-success" onClick={handleReload}>
              Back to Employee Details
            </button>
          </div>
        </div>
      ) : details.length == 0 ? (
        <div className="my-4">
          
          <h2 className="text-danger text-center">
            No User Data Created......
          </h2>
          <h3 className="text-danger text-center">Please Create the User Data by Clicking on the Create User button above on the Navbar</h3>
          
        </div>
      ) : (
        details.map((item) => {
          return (
            <div className="d-flex flex-column my-3">
              <div
                className="card d-flex flex-direction-row mx-4 my-3"
                style={{ width: "300px", height: "300px", borderRadius: "50%" }}
                title={item.personalDetails?.first_name + " " + item.personalDetails?.last_name}
              >
                <Link
                  to="/viewDetails"
                  onClick={() => handleView(item._id)}
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "300px",
                      height: "300px",
                      // backgroundColor: "rgba(115,219,182)",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontSize: "150px", paddingTop: "120px" }}>
                      {item?.personalDetails?.first_name
                        ? item.personalDetails?.first_name.charAt(0).toUpperCase()
                        : "U"}
                      {item?.personalDetails?.last_name
                        ? item.personalDetails?.last_name.charAt(0).toUpperCase()
                        : "U"}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center mx-3">
                {/* <Link
            onClick={() => handleEdit(item._id)}
            
            // style={{border: '1px solid black', borderRadius: '50px', padding: '10px'}}
            to="/updateDetail"
          >
            <EditIcon className="edit-link" style={{fontSize: '35px', color: 'black'}}/>
          </Link> */}
                <h2 className="card-title" style={{ marginTop: "-20px" }}>
                  {item?.personalDetails?.first_name ? item.personalDetails?.first_name : "Unknown"}{" "}
                  {item?.personalDetails?.last_name ? item.personalDetails?.last_name : "User"}
                </h2>
                {/* <Link to="#" onClick={() => handleDelete(item._id)} className="mx-2">
            <DeleteIcon className="delete-icon" style={{fontSize: '35px', color: 'black'}}/>
          </Link> */}
              </div>
            </div>
          );
        })
      )}
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
                <button
                  className="btn btn-dark mt-4"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Close
                </button>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default EmployeeData;

// {/* <table className="table table-bordered table-striped table-hover my-4" >
//         <thead className="bg-dark text-light">
//           <tr className="text-center">
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Reporting Manager</th>
//             {/* <th>Technical Lead</th> */}
//             <th>Action</th>
//             {/* <th>Resource Status</th>
//             <th>Gender</th>
//             <th>Employee Id</th>
//             <th>Global Id</th>
//             <th>Skill</th>
//             <th>Technology</th>
//             <th>BU</th>
//             <th>Resource Type</th>
//             <th>Grade</th>
//             <th>Pyramid</th>
//             <th>Base Location</th>
//             <th>Anchor Location</th>
//             <th>SSO Id</th>
//             <th>CG Email</th>
//             <th>Axa Email</th>
//             <th>CG Start Date</th>
//             <th>Axa Start Date</th>
//             <th>Axa Billing Date</th>
//             <th>Axa Contract Renewal</th>
//             <th>Plan View Setup</th>
//             <th>Current Squad</th>
//             <th>Address</th>
//             <th>Phone Number</th>
//             <th>Alternate Phone Number</th>
//             <th>User Id</th>
//             <th>Project Code</th>
//             <th>Remote Desktop</th>
//             <th>Onboarding Ticket</th>
//             <th>Offboarding Ticket</th>
//             <th>Release Date</th>
//             <th>Resigned</th>
//             <th>Comments</th> */}
//           </tr>
//         </thead>

//         <tbody>
//           {details.map((item) => {
//             return (
//               <tr>
//                 <td>{item.first_name}</td>
//                 <td>{item.last_name}</td>
//                 <td>{item.reporting_manager}</td>
//                 {/* <td>{item.technical_lead}</td> */}
//                 {/* <td>{item.resource_status}</td>
//                 <td>{item.gender}</td>
//                 <td>{item.employee_id}</td>
//                 <td>{item.global_id}</td>
//                 <td>{item.skill}</td>
//                 <td>{item.technology}</td>
//                 <td>{item.bu}</td>
//                 <td>{item.resouce_type}</td>
//                 <td>{item.grade}</td>
//                 <td>{item.pyramid}</td>
//                 <td>{item.base_location}</td>
//                 <td>{item.anchor_location}</td>
//                 <td>{item.sso_id}</td>
//                 <td>{item.cg_email}</td>
//                 <td>{item.axa_email}</td>
//                 <td>{item.cg_start_date}</td>
//                 <td>{item.axa_start_date}</td>
//                 <td>{item.axa_billing_date}</td>
//                 <td>{item.axa_contract_renewal}</td>
//                 <td>{item.plan_view_setup}</td>
//                 <td>{item.current_squad}</td>
//                 <td>{item.address}</td>
//                 <td>{item.phone_number}</td>
//                 <td>{item.alternate_phone_number}</td>
//                 <td>{item.user_id}</td>
//                 <td>{item.project_code}</td>
//                 <td>{item.remote_desktop}</td>
//                 <td>{item.onboarding_ticket}</td>
//                 <td>{item.offboarding_ticket}</td>
//                 <td>{item.release_date}</td>
//                 <td>{item.resigned}</td>
//                 <td>{item.comments}</td> */}
//                 <div className="d-flex justify-content-center align-items-center">
//                   <Link onClick={() => handleView(item._id)} className="btn btn-primary mx-2" to="/viewDetails">
//                   <RemoveRedEyeIcon />
//                   </Link>
//                   <Link
//                     onClick={() => handleEdit(item._id)}
//                     className="btn btn-success"
//                     to="/updateDetail"
//                   >
//                     <EditIcon />
//                   </Link>
//                   <td
//                     onClick={() => handleDelete(item._id)}
//                     className="btn btn-danger mx-2"
//                   >
//                     <DeleteIcon />
//                   </td>
//                 </div>
//               </tr>
//             );
//           })}
//         </tbody>
//         {isOpen && (
//             <Popup2
//               style={{ width: 40, height: 50 }}
//               content={
//                 <div className="d-flex flex-column justify-content-start align-items-start">
//                   <h2 className="text-dark">
//                     <b>User has been deleted</b>{" "}
//                     <DeleteIcon style={{ fontSize: 35, color: "red" }} />
//                   </h2>
//                   <div className="mt-3">
//                     <button
//                       className="btn btn-dark mt-4"
//                       onClick={() => setIsOpen(!isOpen)}
//                     >
//                       Close
//                     </button>

//                   </div>
//                 </div>
//               }
//             />
//           )}
//       </table> */}
