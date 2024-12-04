import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import LinksBox from "./components/LinksBox";
import "./sass/main.scss";

function App() {
  return (
    <div>
      <AppLayout>
        <Header />
        <LinksBox />
      </AppLayout>
      <Attribution />
    </div>
  );
}

export default App;
