import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import Badge from "../../src/js/components/Badge";

describe("The Badge component", () => {
  let BadgeComponent;

  it("should render default badge with correct className according to the custom props", () => {
    const customProps = {
      size: 24,
      icon: "icon-name",
      customClass: "another-class",
      children: null
    };
    BadgeComponent = shallow(<Badge {...customProps} />);

    expect(BadgeComponent.props().className).to.include("badge");
    expect(BadgeComponent.props().className).to.include("icon-name");
    expect(BadgeComponent.props().className).to.include("another-class");
    expect(BadgeComponent.props().className).to.include("badge--size-24");
  });

  it("should render number badge with correct className and children according to the custom props", () => {
    const customProps = {
      type: "number",
      size: 18,
      customClass: "another-class"
    };
    BadgeComponent = shallow(<Badge {...customProps}>3</Badge>);

    expect(BadgeComponent.props().className).to.include("another-class");
    expect(BadgeComponent.props().className).to.include("badge--numbersize-18");
    expect(BadgeComponent.find("i").text()).to.be.equal("3");
  });

  it("should render status badge correctly", () => {
    const customProps = {
      type: "status",
      size: 56,
      status: "active",
      customClass: "custom-class"
    };
    BadgeComponent = shallow(<Badge {...customProps}>10</Badge>);

    expect(BadgeComponent.props().className).to.include("status-badge--active");
    expect(BadgeComponent.props().className).to.include(
      "status-badge--size-56"
    );
    expect(BadgeComponent.children().find("div").length).to.be.equal(1);
    expect(BadgeComponent.find("i").text()).to.be.equal("10");
    expect(BadgeComponent.find("i").props().className).to.include(
      "badge--numbersize-56"
    );
    expect(BadgeComponent.find("i").props().className).to.include(
      "custom-class"
    );
  });
});
