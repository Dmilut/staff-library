import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CardList } from "../../components/card-list/card-list.component";
import App from "../../App";

configure({ adapter: new Adapter() });

describe("<CardList>", function() {
  it("Should be", function() {
    const wrapper = shallow(<App />);
    
    expect(wrapper.find(CardList)).to.have.length(1);
  });

  chai.use(chaiEnzyme());
});
