import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import { Badge } from "../";

describe("Badge />", () => {
  it("renders standard Badge correctly", () => {
    const component = renderer.create(<Badge variant="standard">Badge</Badge>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard disabled Badge correctly", () => {
    const component = renderer.create(
      <Badge variant="standard" disabled>
        Badge
      </Badge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline Badge correctly", () => {
    const component = renderer.create(<Badge variant="outline">Badge</Badge>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline disabled Badge correctly", () => {
    const component = renderer.create(
      <Badge variant="outline" disabled>
        Badge
      </Badge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent Badge correctly", () => {
    const component = renderer.create(
      <Badge variant="transparent">Badge</Badge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent disabled Badge correctly", () => {
    const component = renderer.create(
      <Badge variant="transparent" disabled>
        Badge
      </Badge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders link Badge correctly", () => {
    const component = renderer.create(
      <Badge href="/" variant="standard">
        Badge
      </Badge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should invoke an onClick handler when passed", () => {
    const onClick = jest.fn();
    const component = shallow(
      <Badge variant="standard" onClick={onClick}>
        Dummy Label
      </Badge>
    );

    component.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
