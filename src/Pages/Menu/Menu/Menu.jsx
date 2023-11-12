import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner3 from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../Hooks/useMenu";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover img={banner3} title="Our Menu"></Cover>
            <SectionsTitle subHeading="don't Miss" heading="Today's Offer"></SectionsTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
                items={dessert}
                title="dessert"
                coverImg={dessertImg}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                title="pizza"
                coverImg={pizzaImg}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title="salad"
                coverImg={saladImg}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title="soup"
                coverImg={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;