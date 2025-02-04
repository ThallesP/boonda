import { headers } from "next/headers";
import { getMeControllerGetMe } from "@boonda/sdk";
import { unauthorized } from "next/navigation";

export default async function Home() {
	const { status } = await getMeControllerGetMe({
		headers: await headers(),
	});

	if (status === 401) {
		unauthorized();
	}

	return (
		<div>
			<button type="button">Sign Up</button>
		</div>
	);
}
