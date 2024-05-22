import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import ListeRestaurant from "../src/components/restaurants/ListeRestaurants";
import ListeTableaux from "../src/components/tableaux/ListeRestaurants";
import barça from '../src/assets/carrousel/pexels-mihai-vlasceanu-4623974.jpg';

const Restaurants = () => {
    return <>
        <Header />
        <figure>
          <img src={barça} alt="barça" />
        </figure>
        <ListeTableaux/>
        <Footer />
    </>
}

export default Restaurants;