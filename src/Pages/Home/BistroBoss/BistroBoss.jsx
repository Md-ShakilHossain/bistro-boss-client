import image from '../../../assets/home/chef-service.jpg';
import './BistroBoss.css'

const BistroBoss = () => {
    return (
        <div className='bg-img p-24 bg-fixed'>
            {/* <img src={image} alt="" /> */}
            <div className='p-24 bg-white'>
                <h2 className='text-5xl text-center mb-2'>Bistro Boss</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBoss;