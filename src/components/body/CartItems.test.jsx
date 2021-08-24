import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CartItems from "./CarItems";
import { expect } from "@jest/globals";

Enzyme.configure({ adapter: new Adapter() });
describe("should render CartItem", () => {

  const listCars = (length) => {
      let cars = {
        dealer: {
            name: "ТЦ Кунцево",
            city: "Москва",
            address: "ул. Горбунова, 29",
            name: "ТЦ Кунцево",
            url: "http://www.volkswagen-kuntsevo.ru",
          },
          id: "2f311014-06fe-47ae-848d-ca9e8ff3eda8",
          images: [
            "https://183024.selcdn.ru/vwgr_available_cars/volks…eg_cr/touareg_cr/touareg_cr_status/suv/2T2T/1.png",
          ],
          model_name: "Новый Touareg",
          price: 795890,
          features: []
    }
    for (let i = 0; i < length; i++) {
      let test = "test-features";
      cars.features.push(test);
    }
    return cars;
  };

  let component;

  it("button show-more", () => {
    let props = {
        cars : listCars(5)
    }  
    component = shallow(<CartItems {...props} />);
    let button = component.find(".auto__show-more");
    let otherCount = props.cars.features.length - 3;
    expect(button.length).toBe(1);
    expect(button.text()).toBe("еще " + otherCount + " особенности");
    expect(component.find('.auto__feature').length).toBe(3)
    button.simulate('click');
    expect(component.find('.auto__feature').length).toBe(props.cars.features.length)

  });
  it("button do not show", () => {
    let props = {
        cars : listCars(2)
    }  
    component = shallow(<CartItems {...props} />);
    let button = component.find(".auto__show-more");
    expect(button.length).toBe(0);
  });
});

