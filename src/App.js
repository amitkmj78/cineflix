import AllRoutes from "./routes/AllRoutes";
import { Header, Footers } from "./components/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footers />
    </div>
  );
}

export default App;
