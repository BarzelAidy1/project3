import './admin.css';
import { observer } from "mobx-react";
import LoginPage from '../login/loginPage';
import Service from '../Service/Service';
import loginStore from "../../data/loginStore";
import BusinessData from "../businessData/BusinessData";
import { Outlet } from "react-router-dom";
import AdminHome from './adminHome';

const AdminPage = observer(() => {

  return (
    <div id="loginForm">
      {loginStore.isLogin ? <AdminHome /> : <LoginPage />}

    </div>

  )
});

export default AdminPage