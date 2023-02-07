import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppStyle } from "./style";


const NavBar = ({ navData }) => {
  return (
    <>
      <Box position="static">
        <Box sx={AppStyle.appBox}>
          <Stack direction="row" spacing={2} sx={AppStyle.AppbarStyle}>
            {/* <NavIcon /> */}
            {navData?.icons}
            <Typography variant="h6" sx={AppStyle.appType}>
              {navData?.headTitle}
            </Typography>
          </Stack>
          <Box sx={AppStyle.iconSx}>
            {navData?.downloadIcon}
            {navData?.homeIcon}
            {navData?.downArrow}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
