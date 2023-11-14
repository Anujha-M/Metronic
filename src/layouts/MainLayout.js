import { Suspense } from "react";
import { Outlet } from "react-router";
import { Box, Container, styled } from "@mui/material";
import { Loader } from "../components";

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "0px !important",
}));

const MainLayout = () => {
  return (
    <StyledContainer maxWidth="xl" style={{ background: "grey" }}>
      {/* appBar 60px height */}
      <div style={{ height: 60, background: "blue" }}></div>
      <Box className="container">
        <Box className="sideNav">
          <app-side-nav></app-side-nav>
        </Box>
        <Box className="mainContent">
          <Suspense fallback={() => <Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default MainLayout;
