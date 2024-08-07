import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sampleImage from '../../assets/new image/sample.jpg';
import logoPerusahaan from '../../assets/new image/logoperusahaanlain.png'

const Company = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <section className="bg-black grid grid-cols-1">
      <div className="p-10 my-auto space-y-16">
        <div className='max-w-6xl mx-auto'>
        <Slider {...settings}>
          <div>
            <img src={sampleImage} alt="Slide 1" className="w-full h-auto rounded-xl" />
          </div>
          <div>
            <img src={sampleImage} alt="Slide 2" className="w-full h-auto rounded-xl" />
          </div>
          <div>
            <img src={sampleImage} alt="Slide 3" className="w-full h-auto rounded-xl" />
          </div>
        </Slider>
        </div>
        <div className="">
          <img src={logoPerusahaan} alt="Logos" className="mx-auto w-full" />
        </div>
      </div>
    </section>
  );
};

export default Company;
