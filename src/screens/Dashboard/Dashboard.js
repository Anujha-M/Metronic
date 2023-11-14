import { memo } from "react";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme();
  return <div>dashboard</div>;
};

export default memo(Dashboard);
