

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0px 200px 150px 200px'}} src={image} className="w-[100px]" alt="" />
            <div>
                <p className="uppercase">{name}</p>
                <p>{recipe}</p>
            </div>
            <p>${price}</p>
        </div>
    );
};

export default MenuItem;