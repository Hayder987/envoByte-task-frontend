import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
