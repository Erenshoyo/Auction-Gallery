import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Items from "./components/Items/Items";

function App() {
  const [favorite, setFavorite] = useState([]);

  const handleFavorite = (item) => {
    const isAdded = favorite.find((f) => f.id === item.id);

    if (!isAdded) {
      setFavorite([...favorite, item]);
    } else {
      alert("Item already added.");
    }
  };

  const handleRemoveFavorite = (id) => {
    const updatedList = favorite.filter((f) => f.id !== id);
    setFavorite(updatedList);
  };

  return (
    <div className="bg-slate-100">
      <Header />
      <Banner />
      <Items
        handleFavorite={handleFavorite}
        favorite={favorite}
        handleRemoveFavorite={handleRemoveFavorite}
      />
      <Footer />
    </div>
  );
}

export default App;
