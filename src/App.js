import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import Navigation from "./components/Nav";
import Page from "./components/Page";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";
import { IconContext } from "react-icons";

function App() {
	const [pages] = useState([
		{
			name: "About Me",
		},
		{ name: "Resume" },
		{ name: "Projects" },
		{
			name: "Contact",
		},
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);
	return (
		<>
			<div className="App">
				<Navigation
					pages={pages}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>

				<div className="hero">
					<div className="hero-section"></div>
				</div>
			</div>
			<main>
				<Page currentPage={currentPage}></Page>
			</main>

			<section id="my-contact" className="contact">
				<div className="contact-info">
					<IconContext.Provider value={{ size: "3em", color: "#2e374d" }}>
						<h3>Contact Information</h3>
						<p>Feel free to contact me with any questions!</p>
						<a href="tel:432-557-2582">
							<AiFillPhone />
						</a>
						<a href="mailto:paul.guerra09@gmail.com" alt="email" target="blank">
							<AiFillMail />
						</a>
						<a
							href="https://www.linkedin.com/in/pauldguerra"
							alt="linkedin"
							target="blank"
						>
							<AiFillLinkedin />
						</a>{" "}
						<a href="https://github.com/pdguerra12" alt="github" target="blank">
							<GoMarkGithub />
						</a>{" "}
					</IconContext.Provider>
				</div>
			</section>

			<footer>Created by Paul Guerra</footer>
		</>
	);
}

export default App;
