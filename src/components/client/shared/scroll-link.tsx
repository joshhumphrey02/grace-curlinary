'use client';
import React from 'react';
import { Link } from 'react-scroll';

interface Props {
	to: string;
	name: string;
	className?: string;
}

const ScrollLink = ({ to, name, className }: Props) => {
	return (
		<Link
			activeClass=""
			to={to}
			spy={true}
			className={className}
			smooth={true}
			offset={-200}
			duration={3000}>
			{name}
		</Link>
	);
};

export default ScrollLink;
