import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "../styles/animations.css";
import "../styles/TestimonialCarousel.css";

const testimonials = [
  {
    name: "Rahul Gupta",
    text: "This company transformed my startup web platform with scalable architecture.",
    img: "https://www.dhanlaxmienterprise.in/static/media/C0014.85157141de54cf8d5aa0.png",
  },
  {
    name: "Sarah Smith",
    text: "Professional and efficient. My web app works flawlessly!",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Lee",
    text: "Their team is amazing! Great support and excellent design.",
    img: "https://via.placeholder.com/100",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-container slide-in">
      <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.img} alt={testimonial.name} className="avatar" />
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
