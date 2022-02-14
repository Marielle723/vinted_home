import React from "react";
import ReactDOM from "react-dom";
// import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Filter = (props) => {
  return (
    <>
      <div className="filter-slider">
        <p>Prix entre :</p>
        {/* <div className="collapseArea">
        <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
          Toggle
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              magni, voluptas debitis similique porro a molestias consequuntur
              earum odio officiis natus, amet hic, iste sed dignissimos esse
              fuga! Minus, alias.
            </CardBody>
          </Card>
        </UncontrolledCollapse> */}
        {/* </div> */}

        <div className="sliderArea">
          <Range
            marks={{
              0: `€ 0`,
              1000: `€ 1000`,
            }}
            min={0}
            max={1000}
            defaultValue={[50, 200]}
            tipFormatter={(value) => `€ ${value}`}
            tipProps={{
              placement: "top",
              visible: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
