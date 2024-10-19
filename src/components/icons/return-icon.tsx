import * as React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const ReturnIcon: React.FC<IconProps> = (props) => (
	<svg
		width="48px"
		height="48px"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			d="M12.9998 8L6 14L12.9998 21"
			stroke="#ff00ff"
			strokeWidth={5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
			stroke="#ff00ff"
			strokeWidth={5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default ReturnIcon;
