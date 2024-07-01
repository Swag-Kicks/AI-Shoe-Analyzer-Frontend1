import Sidebar from "./uplader_Sidebar";
import DesignDashboard from "./DesignDashboard";
import SidebarDashboard from "./Company_sidebar";
import Body from "./Company_body";
import Dashboard from "./company_card";
import AddEmployee from "./Company_Add_emp";

const EmployeeDashboard = () => {
    return (
      
      <>
        <SidebarDashboard/>
        <DesignDashboard/>
        {/* <Dashboard/> */}
        <AddEmployee/>
      </>
        
       
    )
  }
  
  export default EmployeeDashboard