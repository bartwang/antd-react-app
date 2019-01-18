import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import ImageBanner from "../../src/js/components/ImageBanner";

describe("The ImageBanner component", () => {
  let ImageBannerComponent;
  const initProps = {
    backgroudImg: "background image path"
  };

  beforeEach(() => {
    ImageBannerComponent = shallow(<ImageBanner {...initProps} />);
  });

  it("should have a custom background image", () => {
    expect(ImageBannerComponent.first().prop("style")).to.deep.equal({
      backgroundImage: "url(background image path)"
    });
  });
});
