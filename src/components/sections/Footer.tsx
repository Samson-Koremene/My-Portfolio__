import React from "react";

const Footer: React.FC = () => {
	return (
		<footer style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: "1rem 0",
			background: "#f8f9fa",
			marginTop: "2rem"
		}}>
			<div style={{ display: "flex", gap: "1.5rem" }}>
				<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="https://x.com/SKoremene46279">
						<path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 12 8.29c0 .34.04.67.1.99C8.09 9.13 4.6 7.38 2.24 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.77 2.83 1.94 3.61-.72-.02-1.4-.22-1.99-.55v.06c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.34 0-.67-.02-1-.06A12.13 12.13 0 0 0 7.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59c-.77.34-1.6.58-2.47.7z" fill="#1DA1F2"/>
					</svg>
				</a>
				<a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="https://ng.linkedin.com/in/samson-koremene-32343725b">
						<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.36-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v6.5z" fill="#0077B5"/>
					</svg>
				</a>
				<a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="https://github.com/Samson-Koremene">
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" fill="#181717"/>
					</svg>
				</a>
			</div>
			<div style={{ marginTop: "1rem", color: "#6c757d" }}>
				© {new Date().getFullYear()} Samtech. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
