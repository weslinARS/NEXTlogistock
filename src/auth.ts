import bcrypt from 'bcryptjs';
import type { DefaultSession } from 'next-auth';
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import * as y from 'yup';
import { $Enums } from '../generated/prisma';
import prisma from '../lib/prisma';

export const SignInSchema = y.object({
	email: y
		.string()
		.email('El correo no es valido')
		.required('El correo es requerido')
		.trim(),
	password: y.string().required('La constraseña es requerida'),
});

declare module 'next-auth' {
	interface Session {
		user: {
			email: string;
			role: $Enums.UserRole;
			firstName: string;
			lastName: string;
			id: string;
		} & DefaultSession['user'];
	}

	interface User {
		id: string;
		email: string;
		role: $Enums.UserRole;
		firstName: string;
		lastName: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string;
		role: $Enums.UserRole;
		firstName: string;
		lastName: string;
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	callbacks: {
		session({ session, token }) {
			session.user.id = token.id;
			session.user.role = token.role;
			session.user.firstName = token.firstName;
			session.user.lastName = token.lastName;
			session.user.email = token.email as string;
			session.user.name = `${token.firstName} ${token.lastName}`;
			return session;
		},

		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.role = user.role;
				token.firstName = user.firstName;
				token.lastName = user.lastName;
				token.email = user.email;
			}
			return token;
		},
	},
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				try {
					console.debug('credentials are', credentials);
					const { email, password } = await SignInSchema.validate(credentials);
					const user = await prisma.user.findUnique({
						where: {
							email: credentials.email as string,
						},
					});

					if (!user) {
						throw new Error('El usuario no fue encontrado');
					}
					const passwordMatch = await bcrypt.compare(
						credentials.password as string,
						user.password
					);

					if (!passwordMatch) throw new Error('contraseña incorrecta');

					return user;
				} catch (error) {
					console.debug('error is :', error);
					return null;
				}
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
});

export { handlers as GET, handlers as POST };
