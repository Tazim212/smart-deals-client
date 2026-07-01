import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';


const Services = () => {

    const services = [
        {
            title: "Product Listing",
            description: "Easily add products with images, descriptions, starting bid prices, and auction deadlines to reach potential buyers."
        },
        {
            title: "Real-Time Bidding",
            description: "Place competitive bids on your favorite products and stay updated with the latest highest bid throughout the auction."
        },
        {
            title: "Bid Notifications",
            description: "Receive instant updates when someone outbids you or when an auction is about to end, so you never miss an opportunity."
        },
        {
            title: "Secure User Authentication",
            description: "Sign in securely using email/password or social login to manage your products and bidding activities safely."
        },
        {
            title: "Personal Dashboard",
            description: "Track your listed products, active bids, auction status, and bidding history from one convenient dashboard."
        },
        {
            title: "Fast & Responsive Experience",
            description: "Enjoy a smooth and responsive platform that works seamlessly across desktop, tablet, and mobile devices."
        }
    ]

    return (
        <div className="my-3 py-4 mx-8 ">
            <h1 className="text-3xl text-center font-bold mb-3">Our Services</h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper h-60 w-3/4"
            >
                {
                    services.map((service, index) =>
                        <SwiperSlide key={index}>
                            <div
                                className='pt-10 bg-linear-to-r from-emerald-700
                             to-purple-600 h-50 w-1/2 text-white shadow-lg'>
                                <h1 className='text-2xl font-bold text-center'>{service.title}</h1>
                                <p className='text-center px-1.5 text-md italic'>{service.description}</p>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}
export default Services;