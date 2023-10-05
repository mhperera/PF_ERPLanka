import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = ({ carouselImages }) => {
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
            loop={true}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}
			className="mySwiper h-screen"
		>
			{carouselImages.map((image) => (
				<SwiperSlide
					key={image}
					style={{ display: 'flex !important' }}
					className="justify-center items-center"
				>
					<img src={image} alt="" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
