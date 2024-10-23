import { clsx, type ClassValue } from 'clsx';
import { format, isThisYear, isToday } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const uniqueId = () => {
	return uuidv4();
};

export function formatProductTime(
	time: Date,
	opt?: { hideTimeForFullDate: boolean }
) {
	let date = new Date(time);
	const { hideTimeForFullDate } = opt || {
		hideTimeForFullDate: false,
	};

	if (isToday(date)) {
		return format(date, 'h:mm a');
	} else if (isThisYear(date)) {
		return format(date, `MMM d${hideTimeForFullDate ? '' : ', h:mm a'}`);
	}
	return format(date, `MM/dd/yyyy${hideTimeForFullDate ? '' : ', h:mm a'}`);
}
export function ratingToWord(rating: number) {
	if (rating === 0) {
		return '';
	} else if (rating <= 1) {
		return 'poor';
	} else if (rating <= 2) {
		return 'average';
	} else if (rating <= 3) {
		return 'good';
	} else if (rating <= 4) {
		return 'very good';
	}
	return 'excellent';
}
export function toNaira(amountInKobo: number) {
	return +(amountInKobo / 100).toFixed(2);
}

export function toKobo(amountInNaira: number) {
	return amountInNaira * 100;
}

export function formatToNaira(
	amountInKobo: number,
	fractionDigits: number = 2
) {
	return formatMoney(toNaira(amountInKobo), 'NGN', fractionDigits);
}

export function formatMoney(
	amount: number,
	currency: string,
	fractionDigits: number = 2
) {
	return new Intl.NumberFormat('en-NG', {
		style: 'currency',
		currency,
		minimumFractionDigits: fractionDigits,
		maximumFractionDigits: fractionDigits,
		currencyDisplay: 'code',
	}).format(amount);
}
export function formatNumber(amount: number = 0) {
	return new Intl.NumberFormat('en-NG').format(amount);
}
export function formatDateDistance(date: string) {
	const seconds = Math.floor(
		(new Date().getTime() - new Date(date).getTime()) / 1000
	);
	let interval = Math.floor(seconds / 31536000);
	if (interval > 1) {
		return `${interval}y ago`;
	}

	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return `${interval}d ago`;
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return `${interval}h ago`;
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return `${interval}m ago`;
	}
	return `${Math.floor(seconds)}s ago`;
}
export function formatPhoneNumber(phoneNumber: string) {
	const cleaned = phoneNumber.replace(/\D/g, '');

	if (cleaned.length < 7) return phoneNumber;

	const firstPart = cleaned.slice(0, cleaned.length - 3);
	const secondPart = cleaned.slice(cleaned.length - 3);

	const groupedFirstPart = firstPart.match(/.{1,4}/g)?.join(' ') || firstPart;

	return `${groupedFirstPart} ${secondPart}`;
}
