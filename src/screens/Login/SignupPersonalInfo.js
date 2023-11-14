import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import { MuiButton, MuiTextInput } from "../../components";
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiApple } from "@mdi/js";
import google from "../../assets/Icon.png";
import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material";

const SignupPersonalInfo = () => {
  const theme = useTheme();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const showPassword = true;
  return (
    <Grid container xs={6} justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Typography sx={{ color: "#181C32", fontSize: 24 }} align="center">
          Account Details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ color: "#A1A5B7", fontSize: 14 }} align="center">
          Add your personal info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          sx={{
            textTransform: "none",
            borderColor: "#E1E3EA",
            borderWidth: 1,
            color: "#7E8299",
            fontSize: 12,
          }}
          variant="outlined"
          fullWidth
          startIcon={<img src={google} width={20} height={20} />}
        >
          Sign in with Google
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          sx={{
            textTransform: "none",
            borderColor: "#E1E3EA",
            borderWidth: 1,
            color: "#7E8299",
            fontSize: 12,
          }}
          fullWidth
          variant="outlined"
          startIcon={<Icon path={mdiApple} size={0.8} color={"#000000"} />}
        >
          Sign in with Apple
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ color: "#A1A5B7", fontSize: 12 }}>Or with email</Divider>
      </Grid>

      <Grid item xs={6}>
        <MuiTextInput label="First Name" />
      </Grid>
      <Grid item xs={6}>
        <MuiTextInput label="Last Name" />
      </Grid>
      <Grid item xs={12}>
        <MuiTextInput label="Creator Name" />
      </Grid>
      <Grid item xs={12}>
        <MuiTextInput label="Email" />
      </Grid>
      <Grid item xs={12}>
        <MuiTextInput label="Phone Number" />
      </Grid>
      <Grid item xs={12}>
        <MuiTextInput label="Password" />
      </Grid>
      <Grid item xs={12}>
        <MuiTextInput label="Confirm Password" />
      </Grid>
      <Grid container sx={{ marginLeft: 2, paddingTop: 1 }}>
        <CheckBox
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 18, color: "#A1A5B7" },
            color: "#A1A5B7",
          }}
        />

        <Typography sx={{ color: "#5E6278", fontSize: 13 }}>
          I Accept the
          <span style={{ color: "#3E97FF", fontSize: 13 }}> Terms</span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            width: "100%",
            backgroundColor: "#3E97FF",
            textTransform: "none",
          }}
          variant="contained"
        >
          Continue
        </Button>
        <p style={{ textAlign: "center", color: "#A1A5B7", fontSize: 14 }}>
          Already have an Account?
          <span style={{ color: "#3E97FF", fontSize: 14 }}> Sign in</span>
        </p>
      </Grid>
    </Grid>
  );
};

export default memo(SignupPersonalInfo);
