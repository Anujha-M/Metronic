import { Suspense } from "react";
import { Outlet } from "react-router";
import { Loader } from "../components";
import { StyledContainer } from "./MainLayout";

const Layout = () => {
  return (
    <StyledContainer>
      <Suspense fallback={() => <Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default Layout;
