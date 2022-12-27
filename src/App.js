
import { Route, Routes } from "react-router-dom";
import BookSearch from "./BooK-Search-App/BookSearch";
import OpenBook from "./BooK-Search-App/OpenBook";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookSearch/>}/>
        <Route path="/open" element={<OpenBook/>}/>

      </Routes>
    </div>
  );
}

export default App;


