import BliscoBreadCake from "../assets/b2.png";
import BliscoClissicgold from "../assets/b1.png";
import Bliscoroundbread from "../assets/b3.png";
import BliscoCoconutBread from "../assets/b4.png";
import BliscoJumbBread from "../assets/b4.png";
import BliscoPeanut from "../assets/b8.png";
import BliscoChinChin from "../assets/b9.png";
import BliscoMultiGrain from "../assets/b5.png";
import BliscoCakeBread from "../assets/b7.png";
import blisco1 from "../assets/b6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MiniProduct() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-fit md:h-[160px] py-7 md:py-4 md:pt-[30px] w-full miniproduct-container">
      <Slider {...settings}>
        {Details.map((item, index) => {
          return <MiniProductDesign key={index} Data={item} />;
        })}
      </Slider>
    </div>
  );
}

const MiniProductDesign = (props) => {
  const { image } = props.Data;
  return (
    <div className="shadow-xl w-[80px] h-[80px] object-cover flex justify-center items-center rounded-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="md:w-full w-[80px] h-[80px] md:h-[100px] object-contain md:object-fill"
      />
    </div>
  );
};

const Details = [
  {
    image: BliscoBreadCake,
  },
  {
    image: blisco1,
  },
  {
    image: BliscoClissicgold,
  },
  {
    image: BliscoCakeBread,
  },
  {
    image: Bliscoroundbread,
  },
  {
    image: BliscoChinChin,
  },
  {
    image: BliscoCoconutBread,
  },
  {
    image: BliscoJumbBread,
  },
  {
    image: BliscoPeanut,
  },
  {
    image: BliscoMultiGrain,
  },
];
