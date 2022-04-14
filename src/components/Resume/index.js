import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pdf from "../../images/PG_Resume.pdf";

function Resume() {
	return (
		<>
			<Card className="resumeCard">
				<Card.Header>
					{" "}
					<h1>Resume Highlights</h1>
				</Card.Header>
				<Card.Body>
					<Card.Title>Technical Skills</Card.Title>
					<Card.Text>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Javascript</li>
							<li>jQuery</li>
							<li>Bootstrap</li>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>SQL</li>
							<li>MySQL</li>
							<li>NoSQL</li>
							<li>React.js</li>
							<li>MongoDB</li>
							<li>Mongoose</li>
							<li>GraphQL</li>
						</ul>
					</Card.Text>
					<Card.Title>Additional Skills</Card.Title>
					<Card.Text>
						<ul>
							<li>Leadership, Mentoring, Training</li>
							<li>Call Center Vendor Experience</li>
							<li>Procedure Auth Specialist</li>
							<li>Operations Development</li>
							<li>Call Center Management</li>
							<li>Management Experience</li>
							<li>Technology Operations</li>
							<li>Citrix Facets 510</li>
							<li>SaaS Orientation</li>
							<li>Zendesk</li>
						</ul>
					</Card.Text>
					<Button href={pdf} variant="primary">
						Download Resume PDF
					</Button>
				</Card.Body>
			</Card>
		</>
	);
}
export default Resume;
