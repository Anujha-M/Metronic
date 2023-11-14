import { memo } from "react";
import { Box, Typography } from "@mui/material";
import Icon from "@mdi/react";

const AccountCard = ({ title, subTitle, iconPath }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "22px",
      }}
    >
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          gap: "16px",
          borderRadius: "8px",
          border: "1px dashed #D8D8E5",
          alignItems: "center",
        }}
      >
        <Icon size={1.2} path={iconPath} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            sx={{
              color: "#181C32",
              fontSize: 15,
              fontWeight: 600,
              lineHeight: "16px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#7E8299",
              fontSize: 13,
              fontWeight: 600,
              lineHeight: "21px",
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(AccountCard);
