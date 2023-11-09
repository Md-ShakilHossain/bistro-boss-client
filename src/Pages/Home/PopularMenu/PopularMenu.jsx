import { useEffect, useState } from "react";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    }, [])
    return (
        <section>
            <SectionsTitle
                heading='From Our Menu'
                subHeading='Popular Item'>
            </SectionsTitle>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
            {
                menu.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
            </div>
        </section>
    );
};

export default PopularMenu;