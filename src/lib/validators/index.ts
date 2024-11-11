import { z } from 'zod';
export const MessageFormSchema = z.object({
	fullName: z.string().min(2, {
		message: 'Your full name must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Please enter a valid email address.',
	}),
	phone: z.string().min(10, {
		message: 'Please enter a valid phone number.',
	}),
	town: z.string().min(2, {
		message: 'Please enter a valid Town Name.',
	}),
	message: z.string().optional(),
	allowMarketing: z.boolean().optional(),
});
export type MessageFormInput = z.infer<typeof MessageFormSchema>;

export const signupSchema = z.object({
	email: z.string().email('Please enter a valid email'),
	password: z
		.string()
		.min(8, 'Password is too short. Minimum 8 characters required.')
		.max(255),
});
export type SignupInput = z.infer<typeof signupSchema>;

export const resetPasswordSchema = z.object({
	token: z.string().min(1, 'Invalid token'),
	password: z.string().min(8, 'Password is too short').max(255),
});
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

export const AuthLoginSchema = z.object({
	email: z.string().email('Please enter a valid email.'),
	password: z
		.string()
		.min(8, 'Password is too short. Minimum 8 characters required.')
		.max(255),
});
export type AuthLoginInput = z.infer<typeof AuthLoginSchema>;

export const manualResetPasswordSchema = z.object({
	currentPassword: z.string().min(8, 'Password is too short').max(255),
	newPassword: z.string().min(8, 'Password is too short').max(255),
	confirmPassword: z.string().min(8, 'Password is too short').max(255),
});
export type ManualResetPasswordInput = z.infer<
	typeof manualResetPasswordSchema
>;

export const ImageType = z.object({
	url: z.string(),
});

export const PostFormSchema = z.object({
	title: z.string().min(2, {
		message: 'Title must be at least 2 characters.',
	}),
	content: z.string().min(10, {
		message: 'Content must be at least 10 characters.',
	}),
	id: z.string().optional(),
	images: z.array(ImageType).min(1, {
		message: 'Upload atleast one image',
	}),
	category: z.string().optional(),
});
export type PostFormInput = z.infer<typeof PostFormSchema>;

export const Feature = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	content: z.string().min(5, {
		message: 'description must be at least 5 characters.',
	}),
	id: z.string().optional(),
});
export const Spec = z.object({
	name: z.string().min(2, {
		message: 'Specification name must be at least 2 characters.',
	}),
	contents: z.array(Feature),
});

export const ProductFormSchema = z.object({
	name: z.string().min(2, {
		message: 'product name must be at least 2 characters.',
	}),
	price: z.string().optional(),
	description: z.string().min(5, {
		message: 'description must be at least 5 characters.',
	}),
	id: z.string().optional(),
	category: z.string().min(2, {
		message: 'Please select a category',
	}),
	// subCategory: z.string().optional(),
	images: z.array(ImageType).min(1, {
		message: 'Upload at least one image',
	}),
	// features: z.array(Feature).optional(),
	// specs: z.array(Spec).optional(),
});

export type ProductFormInput = z.infer<typeof ProductFormSchema>;

export const AuthSignupFormSchema = z.object({
	firstName: z.string().min(2, {
		message: 'Your first name must be at least 2 characters.',
	}),
	lastName: z.string().min(2, {
		message: 'Your last name must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Please enter a valid email address.',
	}),
	phone: z.string().min(10, {
		message: 'Please enter a valid phone number.',
	}),
	password: z.string().min(8, {
		message: 'Your password must be at least 8 characters.',
	}),
});
export type AuthSignupFormInput = z.infer<typeof AuthSignupFormSchema>;
