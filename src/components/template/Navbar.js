import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TfiEmail } from 'react-icons/tfi';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaYoutubeSquare,
} from 'react-icons/fa';
import Button from '../ui/Button';
import { useRouter } from 'next/router';

const Navbar = ({ navigation, onClickNavItem }) => {

	const router = useRouter();

	return (
		<>
			<nav>
				<div className="flex flex-row justify-between items-center w-screen py-2 bg-primary-dark text-white font-normal px-8 text-base">
					<div className="flex">
						<TfiEmail className="scale-1 mr-5" />
						<span className="-mt-[6px]">
							sample@erplanka.com
							<span className="ml-5"> | </span>
						</span>
						<BsWhatsapp className="scale-1 mx-5" />
						<Link
							href="https://wa.me/+94777397487?text=More%20informations%20about%20ERP%20Lanka"
							className="-mt-[6px]"
						>
							+94 77 739 7487
						</Link>
					</div>

					<div className="flex">
						<FaFacebookSquare className="scale-1 mr-5" />
						<FaTwitterSquare className="scale-1 mr-5" />
						<BsLinkedin className="scale-1 mr-5" />
						<FaYoutubeSquare className="scale-1 mr-5" />
					</div>
				</div>

				<div className="flex flex-row justify-between items-center w-screen px-8 py-4">
					<Image
						src="/images/mis_erp_solutions.png"
						alt=""
						width={200}
						height={100}
					/>
					<ul className="flex flex-row justify-end items-center w-screen px-8">
						{navigation.map((navItem) => (
							<li key={navItem.name}>
								<Link
									href={navItem.href}
									className={`block py-2 px-4 hover:text-primary-dark border-b-2 ${ (router.pathname==navItem.href) ? 'border-primary' : 'border-transparent' }`}
									onClick={()=>{onClickNavItem(navItem.href);}}
								>
									{navItem.name}
								</Link>
							</li>
						))}
						<li>
							<Button>Login</Button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
