import Header from "./components/sections/header/header.tsx";
import Welcome from "./components/sections/welcome/welcome.tsx";
import Changes from "./components/sections/changes/changes.tsx";
import Promo from "./components/sections/promo/promo.tsx";
import Collaboration from "./components/sections/collaboration/collaboration.tsx";

function App() {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Welcome />
      <Changes />
      <Promo />
      <Collaboration />
    </div>
  )
}

export default App
