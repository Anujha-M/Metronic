import * as React from "react";
import { styled, AppBar, Toolbar, Avatar } from "@mui/material";
import PropTypes from "prop-types";
import MetronicLogo from "../assets/svgIcons/MetronicLogo.svg";
import ManAvatar from "../assets/svgIcons/ManAvatar.svg";
import Icon from "@mdi/react";
import { mdiBellOutline, mdiMagnify, mdiChevronDown } from "@mdi/js";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 700,
  boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
}));

const IconStyle = styled(Icon)(() => ({
  cursor: "pointer",
}));

const AppBarComp = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#FFF",
        height: "auto",
        padding: "20px 30px",
        width: "auto",
        borderBottom: "1px solid #E1E3EA",
      }}
    >
      <Toolbar
        style={{
          padding: "0px",
          minHeight: 44,
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={MetronicLogo} height={24} width={127} />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconStyle
            path={mdiBellOutline}
            size={1}
            color={"rgba(94, 98, 120, 1)"}
          />
          <IconStyle
            path={mdiMagnify}
            size={1}
            color={"rgba(161, 165, 183, 1)"}
          />
          <StyledAvatar>
            <img src={ManAvatar} height={40} width={40} />
          </StyledAvatar>
          <IconStyle
            path={mdiChevronDown}
            size={1}
            color={"rgba(126, 130, 153, 1)"}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

AppBar.propTypes = {
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  title: PropTypes.string,
  sx: PropTypes.object,
};

export default React.memo(AppBarComp);
