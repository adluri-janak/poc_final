import { textAlign } from '@mui/system'
import React from 'react';
import {Link} from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Home = () => {
  return (
    <div>
        <div style={{textAlign: 'center'}}>
        <Link to="/getDetails"  ><button className='btn btn-success' >Employee Details</button></Link>
        
        </div>
        <br/>
        
        <h1 style={{textAlign: "center", fontSize: "70px"}}>Welcome to the Employee Registry</h1>
        <div className="text-center" >
        <HowToRegIcon style={{fontSize:"200px"}}/>
        </div>
    </div>
  )
}

export default Home