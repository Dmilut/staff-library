import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import { SearchBox } from "../../components/search-box/search-box.component";
import chaiEnzyme from "chai-enzyme";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Search testing", function() {
  it("Should have input field", function() {
    const wrapper = shallow(<SearchBox />);
    
    expect(wrapper.find("input")).to.have.length(1);
  });

  chai.use(chaiEnzyme());
});
