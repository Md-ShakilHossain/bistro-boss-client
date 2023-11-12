import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center bg-[#15151599] py-28 px-52">
                        <h1 className="mb-5 text-7xl uppercase font-bold">{title}</h1>
                        <p className="text-2xl font-semibold mb-5">Would you like to try a dish?</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;