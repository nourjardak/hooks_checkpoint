import Movielist from "./Component/Movielist";
import { movieList } from "./assets/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
    <div className="container-fluid">
      <Movielist movieList={movieList} />
    </div>
  );
}

export default App;
