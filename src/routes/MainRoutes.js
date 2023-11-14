import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { MainLayout, Layout } from "../layouts";

const Dashboard = lazy(() => import("../screens/Dashboard/Dashboard"));

const SignupPersonalInfo = lazy(() =>
  import("../screens/Login/SignupPersonalInfo")
);
const SignupMultiSetup = lazy(() =>
  import("../screens/Login/SignupMultiSetup")
);

const MainRoutes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "signup-personal-info",
        element: <SignupPersonalInfo />,
      },
      {
        path: "signup-multiple-setup",
        element: <SignupMultiSetup />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default MainRoutes;
