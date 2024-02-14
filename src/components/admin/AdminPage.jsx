import './admin.css';
import { observer } from "mobx-react";
import LoginPage from '../login/loginPage';
import Service from '../Service/Service';
import loginStore from "../../data/loginStore";
import BusinessData from "../businessData/BusinessData";
import { Outlet } from "react-router-dom";

const AdminPage = observer(() => {

  return (
    <div id="loginForm">
      {loginStore.isLogin ? <BusinessData /> : <LoginPage />}
      <Outlet />
    </div>
    
  )
});

export default AdminPage