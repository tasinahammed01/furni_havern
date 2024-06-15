import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaUserLock,
  FaCashRegister,
  FaHeadset,
  FaShippingFast,
} from "react-icons/fa";

const Bannar = () => {
  return (
    <div>
      <Carousel>
        <div className="lg:h-[650px] w-[95%] m-auto">
          <img src="https://i.ibb.co/HK9zCTG/Screenshot-14.png" />
        </div>
        <div className="lg:h-[650px] w-[95%] m-auto">
          <img src="https://i.ibb.co/HK9zCTG/Screenshot-14.png" />
        </div>
        <div className="lg:h-[650px] w-[95%] m-auto">
          <img src="https://i.ibb.co/HK9zCTG/Screenshot-14.png" />
        </div>
      </Carousel>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-between md:w-[80%] mx-auto md:text-xl font-bold mb-4">
        <div className="flex justify-center items-center gap-2">
          <FaUserLock></FaUserLock>Secure payments
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaCashRegister></FaCashRegister>30 days return period
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaHeadset></FaHeadset>24/7 customer support
        </div>
        <div className="flex justify-center items-center gap-2">
            <FaShippingFast></FaShippingFast>
          Flexible shipping
        </div>
      </div>
    </div>
  );
};

export default Bannar;
