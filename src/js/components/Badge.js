import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Badge = ({
  type = "default",
  size = 36,
  icon,
  customClass,
  status = "default",
  children
}) => {
  if (type === "number") {
    return (
      <i className={`badge ${customClass} badge--numbersize-${size}`}>
        {children}
      </i>
    );
  } else if (type === "status") {
    return (
      <div
        className={`status-badge status-badge--${status} status-badge--size-${size}`}
      >
        <i className={`badge ${customClass} badge--numbersize-${size}`}>
          {children}
        </i>
        <div />
      </div>
    );
  } else {
    return (
      <i
        className={classNames("badge", {
          [customClass]: customClass,
          [icon]: icon,
          [`badge--size-${size}`]: size
        })}
      />
    );
  }
};

Badge.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.string,
  customClass: PropTypes.string,
  status: PropTypes.string,
  children: PropTypes.node
};

export default Badge;
