import MainPage from "./components/MainPage";
import Test from "./components/Test";
import UserPage from "./components/users/UserSearchPage";
import LocationSearchPage from "./components/locations/LocationSearchPage";

function App() {
  document.body.setAttribute("data-theme", "default-theme");
  return (
    <MainPage>
      <LocationSearchPage />
    </MainPage>
  );
}

export default App;
