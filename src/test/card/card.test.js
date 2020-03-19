import React from "react";
import { configure, shallow, render } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../../App";
import { Card } from "../../components/card/card.component";

configure({ adapter: new Adapter() });

describe("<Card>", function() {
  it("Should be", function() {
    const wrapper = render(<App />);

    expect(wrapper.find(Card)).to.not.undefined;
  });

  chai.use(chaiEnzyme());
});
