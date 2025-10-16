import { Outlet } from "react-router";
import Navbar from "../ShareComponent/Navbar/Navbar";
import Footer from "../ShareComponent/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
