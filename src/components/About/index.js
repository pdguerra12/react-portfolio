import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import headshot from "../../images/paulguerra.jpg";

function About() {
	return (
		<>
			<Container>
				<Row id="aboutMe">
					<Col>
						<h1 id="about">About Me</h1>
						<p>
							Hello! My name is Paul Guerra. My current mission is to be the
							best web developer ever! I am currently taking an awesome bootcamp
							course at UTSA with a great teacher, and teaching assistants. I
							plan on taking everything I learn into the professional world and
							continue to put it all into practice. I am a dedicated
							professional who will do all he can to be the best.
						</p>
					</Col>
					<Figure>
						<Figure.Image
							width={171}
							height={180}
							src={headshot}
							className="img-fluid"
							alt="Candid photo of Paul Guerra"
						/>
					</Figure>
				</Row>
			</Container>
		</>
	);
}

export default About;
