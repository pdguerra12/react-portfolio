import React from "react";

function Resume() {
	return (
		<section id="resume" class="resume">
			<div class="container">
				<div class="section-title">
					<h2>Resume</h2>
					<p>Please enjoy my resume below tailored to software development! </p>
				</div>

				<div class="row">
					<div class="col-lg-6" data-aos="fade-up">
						<h3 class="resume-title">Summary</h3>
						<div class="resume-item pb-0">
							<h4>Paul Guerra</h4>
							<p>
								<em>
									Motivated and hard-working individual aspiring to be a Full
									Stack Web Developer, and put everything I learn into practice
									in the software development world. Bilingual - fluent in both
									English and Spanish.{" "}
								</em>
							</p>
							<ul>
								<li>San Antonio, TX</li>
								<li>(551) 580-8095</li>
								<li>paul.guerra09@gmail.com</li>
							</ul>
						</div>

						<h3 class="resume-title">Education</h3>
						<div class="resume-item">
							<h4>Coding Bootcamp</h4>
							<h5>October 2021 - Present</h5>
							<p>
								<em>University of Texas at San Antonio, San Antonio, TX</em>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
