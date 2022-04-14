import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

function Projects() {
	const projectList = [
		{
			name: "TimeKiller-0 (TK0)",
			image: require("../../images/TK0.png"),
			description: "TimeKiller-0: Javascript/MySQL/NPM/Heroku",
			link: "https://timekiller-0.herokuapp.com/",
		},
		{
			name: "CINEMANIACS",
			image: require("../../images/CINEMANIACS.png"),
			description: "CINEMANIACS: Javascript/API/HTML/CSS",
			link: "https://alfonsof4.github.io/CINEMANIACS/",
		},
		{
			name: "Weather Dashboard",
			image: require("../../images/WD.png"),
			description: "Weather Dashboard: Javascript/API/HTML/CSS",
			link: "https://pdguerra12.github.io/Weather-Dashboard/",
		},
		{
			name: "Git It Done",
			image: require("../../images/GID.png"),
			description: "Git It Done: Javascript/API/HTML/CSS",
			link: "https://pdguerra12.github.io/git-it-done/",
		},
		{
			name: "Work Day Scheduler",
			image: require("../../images/WDS.png"),
			description: "Work Day Scheduler: Javascript/HTML/CSS",
			link: "https://pdguerra12.github.io/workday-scheduler/",
		},
		{
			name: "Taskmaster Pro",
			image: require("../../images/Taskmaster-Pro.png"),
			description: "Taskmaster Pro: Javascript/HTML/CSS",
			link: "https://pdguerra12.github.io/taskmaster-pro/",
		},
		{
			name: "run-buddy",
			image: require("../../images/run-buddy.jpg"),
			description: "Run Buddy: HTML/CSS",
			link: "https://pdguerra12.github.io/run-buddy/",
		},
	];

	const render = (proj) => {
		return (
			<Row className="row">
				<Col>
					<Card className="project" style={{ width: "20rem", height: "28rem" }}>
						<Card.Img className="work-1" variant="top" src={proj.image} />
						<Card.Body>
							<Card.Title>{proj.name}</Card.Title>
							<Card.Text>{proj.description}</Card.Text>
							<Button href={proj.link}>Go to Website</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	};

	return (
		<>
			<Card.Header>
				{" "}
				<h1>Projects</h1>
			</Card.Header>
			<CardGroup className="justify-content-center projContainer">
				{projectList.map(render)}
			</CardGroup>
		</>
	);
}

export default Projects;
