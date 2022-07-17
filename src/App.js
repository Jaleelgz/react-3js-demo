import "./App.css";
import Box from "./Components/Box/Box";
import ItemCanvas from "./Components/Canvas/Canvas";
import SphereItem from "./Components/Sphere/Sphere";
import Car from "./Components/Car/Car";
import Nissan from "./Components/Nissan/Nissan"

function App() {
  return (
    <div className="App App-header">
      <div className="txtContainer">
        <h3 className="headTxt">3D Technology with React &amp; 3js</h3>
        <p className="subTxt">This is a demo site</p>
      </div>
      <div className="canvasContainer">
      <ItemCanvas>
        <Box />
      </ItemCanvas>

      <ItemCanvas>
        <SphereItem/>
      </ItemCanvas>


      </div>
      <div className="canvasContainer">
      <ItemCanvas>
        <Car/>
      </ItemCanvas>
      </div>

      <div className="canvasContainer">
      <ItemCanvas>
        <Nissan/>
      </ItemCanvas>
      </div>
    </div>
  );
}

export default App;
