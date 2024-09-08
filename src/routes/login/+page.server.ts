import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const login = formData.get('login');
        const password = formData.get('password');

        if (!login || !password) {
            return fail(400, { error: 'Both fields are required' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(login.toString())) {
            return fail(400, { error: 'Invalid email address' });
        }

        if (password.toString().length < 6 ) {
            return fail(400, { error: 'Password must be at least 6 characters long' });
        }

        console.log('Login:', login, 'Password:', password);

        return {
            success: true
        };
    }
};