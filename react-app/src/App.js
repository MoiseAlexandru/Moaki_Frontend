import MainPage from "./components/MainPage";
import Test from "./components/Test";
import UsersList from "./components/UsersList";


function App() {
  document.body.setAttribute("data-theme", "default-theme");
  return (
    <MainPage>
      <UsersList />
    </MainPage>
  );
}

export default App;
