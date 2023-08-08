import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { MainLayoutWrapper, OutletWrapper } from "../styles/CommonEmotion";
import BackHeader from "./BackHeader";

const SubLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainLayoutWrapper>
        <div onClick={() => navigate(-1)}>
          <BackHeader />
        </div>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </MainLayoutWrapper>
    </>
  );
};

export default SubLayout;
