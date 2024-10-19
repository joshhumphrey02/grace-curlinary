import { Badge } from '@/components/ui/badge';

type Props = {
	status: 'PENDING' | 'READ' | 'CANCELED';
};
export default function RequestStatusBadge(props: Props) {
	const statusMap = {
		['PENDING']: {
			label: 'Pending',
			variant: 'pending',
		},
		['READ']: {
			label: 'Read',
			variant: 'verified',
		},
		['CANCELED']: {
			label: 'Canceled',
			variant: 'default',
		},
	};

	const value = statusMap[props.status] as any;
	return <Badge variant={value.variant}>{value.label}</Badge>;
}
