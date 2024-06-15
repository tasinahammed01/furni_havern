import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => {
    return (
        <div>
             <Carousel>
                <div className='h-[650px] w-[95%] m-auto'>
                    <img src="https://i.ibb.co/HK9zCTG/Screenshot-14.png" />
                </div>
                <div className='h-[650px] w-[95%] m-auto'>
                    <img src="https://i.ibb.co/HK9zCTG/Screenshot-14.png" />
                </div>
                <div className='h-[650px] w-[95%] m-auto'>
                    <img src="https://i.ibb.co/HK9zCTG/Screenshot-14.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Home;