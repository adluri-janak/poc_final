import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./Navbar.css";
import RefreshIcon from "@mui/icons-material/Refresh";

const Navbar = ({ details, setDetails }) => {
  const URL = "http://localhost:5000";

  const navigate = useNavigate();
  //   const handleLogout = () => {
  //     authService.logout();
  //     navigate("/");
  //     window.location.reload();
  //   };

  const currentUrl = window.location.href;
  let convertedUrl = currentUrl.split("/");

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="mb-4">
      <nav className="navbar navbar-fixed-top navbar-light bg-success">
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <Link
              title="Create New User"
              className="btn btn-light mt-3"
              to="/createDetail"
            >
              Create User
            </Link>
          </div>
          
          <a className="navbar-brand text-light" style={{textAlign: "center"}}>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                paddingLeft: "85px",
              }}
            >
              {" "}
              EMPLOYEE DATA
            </h1>
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <button className="mt-3 btn btn-light" 
            style={
              currentUrl.split("/")[convertedUrl.length - 1] ==
                "viewDetails" ||
              currentUrl.split("/")[convertedUrl.length - 1] ==
                "createDetail" ||
              currentUrl.split("/")[convertedUrl.length - 1] ==
                "updateDetail" ||
              currentUrl.split("/")[convertedUrl.length - 1] == ""
                ? {
                    display: "none",
                  }
                : {marginRight: '8px', borderRadius: '60%'}
            }
            ><b>{details.length}</b></button>
            <Link title="Home" className="btn btn-light mt-3 ml-2" to="/">
              Home
            </Link>
            <Link
              to="/getDetails"
              title="Employee Details"
              className="mt-3 btn btn-light"
              style={
                currentUrl.split("/")[convertedUrl.length - 1] ==
                  "getDetails" ||
                currentUrl.split("/")[convertedUrl.length - 1] ==
                  "viewDetails" ||
                currentUrl.split("/")[convertedUrl.length - 1] ==
                  "updateDetail" ||
                currentUrl.split("/")[convertedUrl.length - 1] == ""
                  ? {
                      display: "none",
                    }
                  : {marginLeft: '10px'}
              }
            >
              Details{" "}
              <span className="badge bg-success text-light">
                {details.length}
              </span>
            </Link>

            <button
              style={
                currentUrl.split("/")[convertedUrl.length - 1] ==
                  "viewDetails" ||
                currentUrl.split("/")[convertedUrl.length - 1] ==
                  "createDetail" ||
                currentUrl.split("/")[convertedUrl.length - 1] ==
                  "updateDetail" ||
                currentUrl.split("/")[convertedUrl.length - 1] == ""
                  ? {
                      display: "none",
                    }
                  : null
              }
              onClick={handleRefresh}
              title="Refresh"
              className="mt-3 mx-2 btn btn-light"
            >
              <RefreshIcon />
            </button>
          </div>

          {/* <button
            className="btn btn-light mt-3"
            // onClick={handleLogout}
            style={
              
              currentUrl.split("/")[convertedUrl.length - 1] !== "123"
                ? {
                    marginLeft: 150,
                    marginBottom: 15,
                    
                    visibility: "hidden",
                  }
                : { marginLeft: 150, marginBottom: 15 }
            }
          >
            Logout
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
