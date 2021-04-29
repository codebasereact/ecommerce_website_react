import "./App.css";
import Header from "./components/Header/index";
import Homepage from "./pages/Homepage/index";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <div className="variable">
        <p>
          Current Logged on Domain :
          <spam>{process.env.REACT_APP_AUTH_DOMAIN}</spam>
        </p>
        <p>
          Deployable On : <spam>{process.env.REACT_APP_DEPLOY_ENV}</spam>
        </p>
      </div>
    </div>
  );
};

export default App;
