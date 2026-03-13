import Header from "./components/sections/header/header.tsx";
import Welcome from "./components/sections/welcome/welcome.tsx";
import Changes from "./components/sections/changes/changes.tsx";
import Promo from "./components/sections/promo/promo.tsx";
import Collaboration from "./components/sections/collaboration/collaboration.tsx";
import Sales from "./components/sections/sales/sales.tsx";
import Footer from "./components/sections/footer/footer.tsx";
import Copyright from "./components/sections/copyright/copyright.tsx";

function App() {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Welcome />
      <Changes />
      <Promo />
      <Collaboration />
      <Sales />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
