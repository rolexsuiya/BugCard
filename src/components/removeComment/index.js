import { Box, Typography } from "@mui/material";
import React from "react";
import { CricleIcon } from "../icon/cricleIcon";
import { ListNested } from "../listNested/listNested";
import { removeStyle } from "./styles";

export const RemoveComment = ({ handleClick=()=>false,title = "Remove this commented out code" }) => {
  
  return (
    <Box sx={removeStyle.paperBlock}>
      <Box sx={removeStyle.flexBlock} onClick={handleClick}>
        <Box>
          <Typography sx={removeStyle.typeText}>
            {title}
          </Typography>
        </Box>
        <Box sx={removeStyle.centerBlock}>
          <Box sx={removeStyle.dotIcon}></Box>
          <Typography style={removeStyle.lineText}>
            L29
          </Typography>
        </Box>
      </Box>

      <Box sx={removeStyle.centerBlockSX}>
        <Box sx={removeStyle.removeBottomBlock}>
         <CricleIcon/>
          <ListNested
          onClickNav={()=>handleClick()}
            sxButton={removeStyle.dropList}
            titlePrimary={" Code Smell"}
            sxTitle={removeStyle.codeSmellText}
          />

          <Box sx={removeStyle.dotIcon}></Box>
        </Box>

        <Box sx={removeStyle.removeBottomBlock}>
          <ListNested
            sxButton={removeStyle.dropList}
            titlePrimary={" Major"}
            sxTitle={removeStyle.codeSmellText}
          />
          <Box sx={removeStyle.dotIcon}></Box>
        </Box>
      </Box>
    </Box>
  );
};
