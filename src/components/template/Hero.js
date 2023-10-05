import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
	return (
		<section className="bg-cover bg-center bg-gradient-to-r from-primary to-secondary h-128 relative flex items-center !-mx-24">
			<div className="container mx-auto px-8 text-left relative z-10 w-2/3">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
					Welcome to ERP Lanka
				</h1>
				<p className="mt-4 text-lg text-white font-medium">
					We provide top-notch services to meet your needs.
				</p>
				<div className="mt-8">
					<Button
						href="/contact"
						className="btn-lg"
					>
						Contact Us
					</Button>
				</div>
			</div>

			<div className="container mx-auto relative z-10 w-1/3">
				<Image
                    id='hero_image'
					src="/images/hero.svg"
					width={100}
					height={400}
					alt="Hero Image"
                    className='!w-11/12 mx-auto max-w-xs'
				/>
			</div>
		</section>
	);
};

export default Hero;
