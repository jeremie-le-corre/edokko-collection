import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		// Mot de passe
		const correctPassword = process.env.NEXT_PUBLIC_PASSWORD;

		if (password === correctPassword) {
			// Stocker dans sessionStorage
			sessionStorage.setItem("isLoggedIn", "true");
			router.push("/");
		} else {
			setError("Mot de passe incorrect");
			setPassword("");
		}
	};

	return (
		<>
			<Head>
				<title>Login - Ma Collection</title>
			</Head>

			<div style={styles.container}>
				<div style={styles.card}>
					<div style={styles.emoji}>🎮</div>
					<h2 style={styles.title}>Accès Privé</h2>

					<form onSubmit={handleSubmit}>
						<input
							type="password"
							placeholder="Mot de passe"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={styles.input}
							autoFocus
						/>

						{error && <p style={styles.error}>{error}</p>}

						<button type="submit" style={styles.button}>
							Accéder
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

// Styles inline pour simplifier
const styles = {
	container: {
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	},
	card: {
		background: "white",
		padding: "48px",
		borderRadius: "16px",
		boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
		width: "100%",
		maxWidth: "400px",
		textAlign: "center",
	},
	emoji: {
		fontSize: "64px",
		marginBottom: "16px",
	},
	title: {
		fontSize: "24px",
		fontWeight: "600",
		marginBottom: "32px",
		color: "#333",
	},
	input: {
		width: "100%",
		padding: "16px",
		fontSize: "16px",
		border: "2px solid #e0e0e0",
		borderRadius: "8px",
		marginBottom: "16px",
		textAlign: "center",
	},
	button: {
		width: "100%",
		padding: "16px",
		fontSize: "16px",
		fontWeight: "600",
		background: "#667eea",
		color: "white",
		border: "none",
		borderRadius: "8px",
		cursor: "pointer",
	},
	error: {
		color: "#f44336",
		fontSize: "14px",
		marginBottom: "16px",
	},
};
