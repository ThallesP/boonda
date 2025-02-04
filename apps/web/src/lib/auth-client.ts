import { createAuthClient } from "better-auth/react";
const { signIn, signUp, signOut, useSession } = createAuthClient({
	baseURL: "http://localhost:3000", // the base url of your auth server
});

export { signIn, signUp, signOut, useSession };
