import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MainLayoutWrapper, OutletWrapper } from "../styles/CommonEmotion";

const MainLayout = () => {
  return (
    <>
      <MainLayoutWrapper>
        <MainHeader />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <Footer />
      </MainLayoutWrapper>
    </>
  );
};

export default MainLayout;
