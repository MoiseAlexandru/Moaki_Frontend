import MainPage from "./components/MainPage";
import Test from "./components/Test";
import UsersList from "./components/UsersList";
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
