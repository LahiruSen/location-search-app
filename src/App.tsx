import Map from "./components/Map";
import LocationSearch from "./components/Location";


function App() {
  
  return <div className="h-screen w-screen grid grid-cols-12">
    <div className="col-span-3 p-2">
    <LocationSearch></LocationSearch>
    </div>
    <div className="col-span-9">
    <Map></Map>
    </div>

</div>

}

export default App
