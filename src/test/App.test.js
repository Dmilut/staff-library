import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import App from "../App";
import chaiEnzyme from "chai-enzyme";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App Component testing", function() {
  it("App renders title", () => {
    const wrapper = shallow(<App />);
    const title = <h1>Staff library</h1>;

    expect(wrapper).to.contain(title);
  });

  chai.use(chaiEnzyme());
});
