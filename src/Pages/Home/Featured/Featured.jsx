import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import featuredIMG from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 mb-10">
            <SectionsTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}>
            </SectionsTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredIMG} alt="" />
                </div>
                <div className="md:ml-10 text-xl">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get</p>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem magni eligendi repudiandae porro neque eaque, minima voluptas cupiditate nisi vero illo nemo voluptatum obcaecati fugit! Molestias placeat sequi obcaecati modi fuga! Sint, nemo quibusdam! Obcaecati vitae vel enim distinctio. Incidunt itaque nobis facere non reprehenderit libero dicta explicabo corporis.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;