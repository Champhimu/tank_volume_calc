import React from "react";
import { useState } from "react";

const Tankvolume = () => {
  const [image, setImage] = useState("vert_cylin");
  const [result, setResult] = useState("");
  const [tankCapacity, setTankCapacity] = useState("");
  const [currentConversion, setCurrentConversion] = useState("1");
  const [print, setPrint] = useState(false);

  const onSelectChange = (event) => {
    console.log("event", event.target.value);

    const value = event.target.value;
    console.log(value);
    event.preventDefault();
    setCurrentConversion(value);

    if (event.target.value === "1") {
      setImage("vert_cylin");
    } else if (value === "2") {
      setImage("frustrum");
    } else if (value === "3") {
      setImage("rect_prism");
    }
  };

  const calculateChanges = (e) => {
    const data = new FormData(e.currentTarget);
    const actualData = {
      height: data.get("height"),
      diameter: data.get("diameter"),
      width: data.get("width"),
      length: data.get("length"),
      bottomdiameter: data.get("bottomdiameter"),
    };
    console.log(actualData);
    setPrint(false);

    if (currentConversion === "1") {
      const height = actualData.height;
      console.log(height);
      const diameter = actualData.diameter;
      console.log(diameter);

      const radius = diameter / 2;
      const volume = 3.14 * Math.pow(radius, 2) * height;
      setResult(volume);
      const capacity = volume * 28.31;
      setTankCapacity(capacity);
    } else if (currentConversion === "2") {
      const height = actualData.height;
      const diameter = actualData.diameter;
      const bottomdiameter = actualData.bottomdiameter;

      const topradius = diameter / 2;
      const botradius = bottomdiameter / 2;

      const volume =
        (1 / 3) *
        3.14 *
        height *
        (Math.pow(topradius, 2) +
          topradius * botradius +
          Math.pow(botradius, 2));
      setResult(volume);
      const capacity = volume * 28.31;
      setTankCapacity(capacity);
    } else if (currentConversion === "3") {
      const length = actualData.length;
      const width = actualData.width;
      const height = actualData.height;

      const volume = length * width * height;
      setResult(volume);
      const capacity = volume * 28.31;
      setTankCapacity(capacity);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tank Type: </h5>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={onSelectChange}
              >
                <option value="1">Vertical cylinder</option>
                <option value="2">Frustrum</option>
                <option value="3">Rectangular prism</option>
              </select>
              <img
                src={require(`../tank_images/${image}.png`)}
                alt="images"
                className="mt-2"
                width= "100%"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dimensions </h5>
              <p className="card-text">
                Enter tank inside dimensions using integers, decimals or
                fractions
              </p>
              <form className="form-inline" onChange={calculateChanges}>
                  {currentConversion === "1" || currentConversion === "2" || currentConversion === "3" ? 
                  <div className="form-group">
                  <label
                    className="col-form-label col-md-4 mr-2"
                    for="input-height"
                  >
                    Height
                  </label>
                  <input
                    className="form-control-sm col-md-4"
                    id="input-height"
                    type="number"
                    min="0"
                    name="height"
                  />
                  <label className="col-form-label col-md-1">ft</label>
                </div>
                  : ""}
                  
                  {currentConversion === '1' || currentConversion ==="2" ? 
                  <div className="form-group">
                    <label
                      className="col-form-label col-md-4 mr-2"
                      for="input-diameter"
                    >
                      Diameter
                    </label>
                    <input
                      className="form-control-sm col-md-4"
                      id="input-diameter"
                      type="number"
                      min="0"
                      name="diameter"
                    />
                    <label className="col-form-label col-md-1">ft</label>
                  </div>
                  : " " }

                  {currentConversion === "2" ? 
                  <div className="form-group">
                    <label
                      className="col-form-label col-md-4 mr-2"
                      for="input-bottom-diameter"
                    >
                      Botton Diameter
                    </label>
                    <input
                      className="form-control-sm col-md-4"
                      id="input-bottom-diameter"
                      type="number"
                      min="0"
                      name="bottomdiameter"
                    />
                    <label className="col-form-label col-md-1">ft</label>
                  </div>
                  : " " }

                  {currentConversion === "3" ?
                  <div className="form-group">
                    <label
                      className="col-form-label col-md-4 mr-2"
                      for="input-length"
                    >
                      Length
                    </label>
                    <input
                      className="form-control-sm col-md-4"
                      id="input-length"
                      type="number"
                      min="0"
                      name="length"
                    />
                    <label className="col-form-label col-md-1">ft</label>
                  </div>
                  : " "}

                  {currentConversion === "3" ?
                  <div className="form-group">
                    <label
                      className="col-form-label col-md-4 mr-2"
                      for="input-width"
                    >
                      Width
                    </label>
                    <input
                      className="form-control-sm col-md-4"
                      id="input-width"
                      type="number"
                      min="0"
                      name="width"
                    />
                    <label className="col-form-label col-md-1">ft</label>
                  </div>
                  : " " }

                    <div class="col-xs-4 col-md-4">
                      <button class="btn btn-primary btn-block btn-sm p-2 " id="button-confirm" type="button" onClick={()=> setPrint(true)} >Calculate</button>
                    </div>

                    <div className="form-group">
                    <label
                      className="col-form-label col-md-4 mr-2"
                      for="input-width"
                    >
                      Tank Volume
                    </label>
                    <input
                      className="form-control-sm col-md-4"
                      id="read-tank-volume"
                      type="number"
                      min="0"
                      value={print ? result : " "}
                      name="tankVolume"
                      readOnly
                      
                    />
                    <label className="col-form-label col-md-1">ft</label>
                  </div>

                  <div className="form-group">
                    <label
                      className="col-form-label col-md-4 mr-2"
                      for="input-width"
                    >
                      Total Capacity in L
                    </label>
                    <input
                      className="form-control-sm col-md-4"
                      id="read-tank-capcity"
                      type="number"
                      min="0"
                      value={print ? tankCapacity : " "}
                      name="tankCapacity"
                      readOnly
                    />
                    <label className="col-form-label col-md-1">L</label>
                  </div>
                </form>
            </div>
          </div>
        </div>  
        </div>
    </>
  );
};

export default Tankvolume;
