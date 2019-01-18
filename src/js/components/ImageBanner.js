import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const gradientMap = {
  light: "gradient gradient--light",
  dark: "gradient gradient--dark"
};

const cloudMap = {
  white: "cloud cloud--white",
  grey: "cloud cloud--grey"
};

export const CrossCenterContent = ({ children }) => (
  <div className="content__table">
    <div className="content__table-cell">{children}</div>
  </div>
);

const ImageBanner = ({
  customClass = "bg--mid-grey",
  backgroudImg,
  cloud,
  gradient,
  children
}) => {
  const bg = backgroudImg ? { backgroundImage: `url(${backgroudImg}) ` } : {};
  return (
    <div
      className={classNames("banner", {
        [customClass]: customClass
      })}
      style={bg}
    >
      {gradientMap[gradient] && <div className={gradientMap[gradient]} />}
      {cloudMap[cloud] && <div className={cloudMap[cloud]} />}
      <div className="banner__content">{children}</div>
    </div>
  );
};

ImageBanner.propTypes = {
  customClass: PropTypes.string,
  backgroudImg: PropTypes.string,
  cloud: PropTypes.string,
  gradient: PropTypes.string,
  children: PropTypes.node
};

export default ImageBanner;
