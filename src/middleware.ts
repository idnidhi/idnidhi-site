import { defineMiddleware } from 'astro:middleware';

// Security headers middleware
export const onRequest = defineMiddleware(async (context, next) => {
	const response = await next();

	// Set security headers
	const headers = new Headers(response.headers);

	// Prevent MIME type sniffing
	headers.set('X-Content-Type-Options', 'nosniff');

	// Prevent clickjacking
	headers.set('X-Frame-Options', 'SAMEORIGIN');

	// Referrer policy
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	// Permissions policy (restrict sensitive APIs)
	headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

	// Content Security Policy
	const cspDirectives = [
		"default-src 'self'",
		"script-src 'self' 'unsafe-inline' https://assets.calendly.com",
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
		"font-src 'self' https://fonts.gstatic.com",
		"img-src 'self' data: https:",
		"connect-src 'self' https://calendly.com",
		"frame-src https://calendly.com",
	];
	headers.set('Content-Security-Policy', cspDirectives.join('; '));

	// Return response with security headers
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
});
