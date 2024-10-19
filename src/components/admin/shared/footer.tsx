import React from 'react';

const Footer = () => {
	return (
		<div className=" flex items-center flex-col md:flex-row justify-between my-4 px-2 md:px-8">
			<p className="text-gray-600 text-center text-sm md:text-base py-2">
				© {new Date().getFullYear()} Grace Peters Curlinary. All rights
				reserved.
			</p>
			<a
				href="https://meltechgrp.com"
				target="_blank"
				rel="noopener noreferrer"
				className="underline text-[10px]">
				Built by Nerds lab
			</a>
		</div>
	);
};

export default Footer;
