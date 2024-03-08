import { Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import HeaderBottom from "../../../assets/images/common/HeaderBottom.svg";
import Animation from "animation";
import { MKBox } from "components";

const Title = ({ title, titleJustify, description, isImageBottom, align, maxWidth, subTitle }) => {
  return (
    <MKBox display={"flex"} flexDirection={"column"} alignItems={align}>
      <Animation direction="right">
        <MKBox
          component={"div"}
          display="flex"
          gap={"10px"}
          alignItems="center"
          justifyContent={titleJustify}
        >
          <MKBox
            minWidth={"10px"}
            height={"10px"}
            width={"10px"}
            bgcolor="#1F66D6"
            borderRadius={"15px"}
          />
          <Typography variant="h4" color="#004FD2" fontWeight={800} textTransform="uppercase">
            {title}
          </Typography>
          <MKBox
            minWidth={"10px"}
            height={"10px"}
            width={"10px"}
            bgcolor="#1F66D6"
            borderRadius={"15px"}
          />
        </MKBox>
      </Animation>
      {subTitle && (
        <Animation direction="left">
          <Typography variant="h4" color="#454E58" fontWeight={800}>
            {subTitle}
          </Typography>
        </Animation>
      )}
      {description && (
        <Animation direction="right">
          <MKBox mt={2}>
            <Typography
              variant="body2"
              fontWeight="regular"
              color="secondary"
              fontSize={"18px"}
              maxWidth={maxWidth}
              mb={1}
              pr={2}
            >
              {description}
            </Typography>
          </MKBox>
        </Animation>
      )}
      {isImageBottom && (
        <Animation direction="left">
          <MKBox>
            <MKBox component={"img"} alt="header-animated" src={HeaderBottom} />
          </MKBox>
        </Animation>
      )}
    </MKBox>
  );
};

Title.defaultProps = {
  titleJustify: "flex-start",
  description: "",
  subTitle: "",
  isImageBottom: false,
  align: "flex-start",
  maxWidth: "500px",
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleJustify: PropTypes.any,
  description: PropTypes.string,
  subTitle: PropTypes.string,
  isImageBottom: PropTypes.bool,
  align: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Title;
