import react from 'react';
import './Dashboard_.css'; // Create CSS file for styling
import { IoPersonAddSharp } from "react-icons/io5";
import { FaUserMinus } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
import { FcInspection } from "react-icons/fc";
import { LuHistory } from "react-icons/lu";
import "./styles.css"

const Dashboard = () => {
    return (
      <div id='tog-sidebar ' className='d-flex justify-content-center align-items-center' >
          <div className="dashboard mt-40  col-10 " >
            <div className="card">
                <div className="icon"><IoPersonAddSharp /></div>
                <div className="title">Add Employee</div>
                <div className="subtitle">Add Employee like Product Analyzer and Product Inspector</div>
            </div>
            <div className="card">
                <div className="icon"><FaUserMinus /></div>
                <div className="title">Remove Employee</div>
                <div className="subtitle">Remove Employee from the system</div>
            </div>
            <div className="card">
                <div className="icon"><MdDriveFolderUpload /></div>
                <div className="title">Product Analysis</div>
                <div className="subtitle">Analyze product performance</div>
            </div>
            <div className="card">
                <div className="icon"><FcInspection /></div>
                <div className="title">Product Inspection</div>
                <div className="subtitle">View product inspection history</div>
            </div>
            <div className="card">
                <div className="icon"><LuHistory /></div>
                <div className="title">History</div>
                <div className="subtitle">View historical data</div>
            </div>
        </div>
      </div>
      
    );
};

export default Dashboard;
