"use client";

import { authClient } from "@/lib/auth-client";

export default function Home() {
	const { data, error } = authClient.useSession();

	return (
		<div>
			<div>
				<p>{JSON.stringify(data?.user)}</p>
				<p>{JSON.stringify(error)}</p>
			</div>
			<button
				onClick={() =>
					authClient.signUp.email({
						email: "test@test.com",
						password: "teste111111",
						name: "test",
					})
				}
				type="button"
			>
				Sign Up
			</button>
		</div>
	);
}
