import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Items from "./components/Items/Items";

function App() {
  const [favorite, setFavorite] = useState([]);

  const handleFavorite = (item) => {
    setFavorite([...favorite, item]);
    console.log(favorite);
  }
  return (
    <div className="bg-slate-100">
      <Header />
      <Banner />
      <Items handleFavorite={handleFavorite}/>
      <Footer/>
    </div>
  );
}

export default App;
