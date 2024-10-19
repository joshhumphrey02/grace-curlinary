import { cn } from '@/lib/utils';

interface HtmlTextProps extends Partial<HTMLDivElement> {
	text: string;
}

export default function HtmlText(props: HtmlTextProps) {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: props.text }}
			className={cn(props.className)}></div>
	);
}
