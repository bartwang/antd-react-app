import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";

import AppCard from "../../src/js/components/AppCard";
import Badge from "../../src/js/components/Badge";
import appCardStatus from "../../src/js/constants/appCardStatus";

describe("The AppCard component", () => {
  let AppCardComponent;
  let handleClickSpy;
  const initProps = {
    icon: "icon-visa",
    triangleBgColour: "white"
  };

  beforeEach(() => {
    handleClickSpy = sinon.spy();
    AppCardComponent = shallow(
      <AppCard onClick={handleClickSpy} {...initProps} />
    );
  });

  it("should render triangle correctly", () => {
    const triangleNode = AppCardComponent.find(".app-card__triangle");
    expect(triangleNode).to.have.length(1);
    expect(triangleNode.props().className).to.include("bg--white");
  });

  it("should render Badge with correct value", () => {
    expect(AppCardComponent.find(Badge)).to.have.length(1);
    expect(AppCardComponent.find(Badge).props()).to.deep.equal({
      size: 80,
      icon: "icon-visa",
      customClass: appCardStatus["default"].badge
    });
  });

  it("should render title if it has been passed in", () => {
    const title = "here is a title";
    AppCardComponent = shallow(
      <AppCard onClick={handleClickSpy} title={title} {...initProps} />
    );
    expect(AppCardComponent.find(".app-card__content h6").text()).to.be.equal(
      title
    );
  });

  it("should render hint with correct color by the status if it has been passed in", () => {
    const hint = "this is hint";
    const status = "error";
    const hintColor = appCardStatus[status].hint;

    AppCardComponent = shallow(
      <AppCard
        onClick={handleClickSpy}
        hint={hint}
        status={status}
        {...initProps}
      />
    );
    const hintContainer = AppCardComponent.find(".app-card__content--small");

    expect(hintContainer.text()).to.be.equal(hint);
    expect(hintContainer.props().className).to.include(hintColor);
  });

  it("should fire handleClick when click on it", () => {
    AppCardComponent.simulate("click");
    expect(handleClickSpy.calledOnce).to.have.equal(true);
  });
});
