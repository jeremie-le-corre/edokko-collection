import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { games } from "@/data/games";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		const isLoggedIn = sessionStorage.getItem("isLoggedIn");
		if (!isLoggedIn) {
			router.push("/login");
		}
	}, [router]);

	return (
		<>
			<Head>
				<title>Ma Collection de Jeux</title>
			</Head>

			<div className="container">
				<div className="header">
					<h1 className="title">🎮 Ma Collection</h1>
					<p className="subtitle">{games.length} jeux dans ma collection</p>
				</div>

				<div className="grid">
					{games.map((game) => (
						<div key={game.id} className="card">
							<h3 className="card-title">{game.title}</h3>
							<p className="card-info">
								{game.platform} • {game.year}
							</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
