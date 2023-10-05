import { Fragment } from 'react';
import Navbar from '@/components/template/Navbar';
import Wrapper from '@/components/template/Wrapper';
import Carousel from '@/components/ui/Carousel';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'About', href: '/about', current: false },
	{ name: 'Clients', href: '/clients', current: false },
	{ name: 'Contact', href: '/contact', current: false },
];

const carouselImages = [
	'https://www.qblanka.com/asset/uploads/1%20(3).jpg',
	'https://www.qblanka.com/asset/uploads/Graphic1.JPG',
	'https://www.qblanka.com/asset/uploads/2%20n%20(1).jpg',
];

const Layout = ({ children }) => {
	return (
		<>
			<Navbar navigation={navigation} />
			{/* <Carousel carouselImages={carouselImages}/> */}
			<Wrapper>{children}</Wrapper>
		</>
	);
};

export default Layout;
