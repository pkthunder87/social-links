import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import LinksBox from "./components/LinksBox";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <Header />
      <LinksBox />
    </AppLayout>
  );
}

export default App;
