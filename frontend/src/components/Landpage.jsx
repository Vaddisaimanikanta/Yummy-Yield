
import AboutUs from "./About";
import Foodlist from "./Foodlist";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import Navbar from "./Navbar";

export default function Landpage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main 
        heading='Explore Our Menu' 
        para='Discover our wide range of delicious dishes, crafted to satisfy your cravings. From classic favorites to unique specialties, we have something for everyone!' 
      />
    
      <Menu />
      <Main 
        heading='Delicious Delights' 
        para='Indulge in a wide variety of mouth-watering dishes that will tantalize your taste buds. 
              From fresh, vibrant salads to rich, savory desserts, every bite is an unforgettable experience.' 
      />
      <Foodlist/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
