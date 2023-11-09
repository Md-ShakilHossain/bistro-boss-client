import image from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div className='relative'>
            <img src={image} alt="" />
            <div className='w-3/4 absolute top-20 left-36 py-16 px-28 bg-white'>
                <h2 className='text-5xl text-center mb-2'>Bistro Boss</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBoss;