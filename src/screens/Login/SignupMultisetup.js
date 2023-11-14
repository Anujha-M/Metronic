import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { AccountCard } from "../../components";
import { mdiAccount } from "@mdi/js";

const SignupMultisetup = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "35px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography
          sx={{
            color: "#181C32",
            fontSize: 24,
            fontWeight: 600,
            lineHeight: "24px",
          }}
        >
          Choose an account type
        </Typography>
        <Typography
          sx={{
            color: "#A1A5B7",
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "14px",
          }}
        >
          If you need more info, please visit our{" "}
          <span style={{ color: "#2884EF" }}>help page.</span>
        </Typography>
      </Box>
      <AccountCard
        title={"title"}
        subTitle={"subTitle"}
        iconPath={mdiAccount}
      />
      <Box>s</Box>
    </Box>
  );
};

export default memo(SignupMultisetup);
