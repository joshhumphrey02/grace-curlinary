import { cn } from '@/lib/utils';
import * as React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {}
const NairaIcon: React.FC<IconProps> = (props) => (
	<svg
		fill="#d5d4d4"
		width="24px"
		height="24px"
		viewBox="0 0 24 24"
		id="naira"
		data-name="Flat Color"
		xmlns="http://www.w3.org/2000/svg"
		className={cn('text-white', props.className)}
		{...props}>
		<path
			id="primary"
			d="M20,13H18V11h2a1,1,0,0,0,0-2H18V3a1,1,0,0,0-2,0V9H11.48L7.87,2.51A1,1,0,0,0,6,3V9H4a1,1,0,0,0,0,2H6v2H4a1,1,0,0,0,0,2H6v6a1,1,0,0,0,2,0V15h4.52l3.61,6.49A1,1,0,0,0,17,22a1.07,1.07,0,0,0,.25,0A1,1,0,0,0,18,21V15h2a1,1,0,0,0,0-2Zm-4-2v2H13.7l-1.11-2ZM8,6.86,9.19,9H8ZM8,13V11h2.3l1.11,2Zm8,4.14L14.81,15H16Z"
			style={{
				fill: '#d5d4d4',
			}}
		/>
	</svg>
);
export default NairaIcon;
