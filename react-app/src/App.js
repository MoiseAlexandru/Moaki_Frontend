import MainPage from "./components/MainPage";
import Test from "./components/Test";
import UserPage from "./components/users/UserPage";
import LocationPage from "./components/locations/LocationPage";

function App() {
  document.body.setAttribute("data-theme", "default-theme");
  return (
    <MainPage>
      <LocationPage />
    </MainPage>
  );
}

export default App;
