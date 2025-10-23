import Header from "../Header/Header";
import Navigations from "../../pages/Navigations";
import Footer from "../Footer/Footer";

import "../../shared/styles/style.css";

function App() {
  return (
    <>
      <div className="appRoot">
        <Header />
        <main className="appMain">
          <Navigations />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
