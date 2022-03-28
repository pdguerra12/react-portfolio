import React from "react";

function About() {
	return (
		<section id="about" class="about">
			<div class="container">
				<div class="section-title">
					<h2>About</h2>
					<p>
						Hello! My name is Paul Guerra. My current mission is to be the best
						web developer ever! I am currently taking an awesome bootcamp course
						at UTSA with a great teacher, and teaching assistants. I plan on
						taking everything I learn into the professional world and continue
						to put it all into practice. I am a dedicated professional who will
						do all he can to be the best.
					</p>
				</div>

				<div class="row">
					<div class="col-lg-4" data-aos="fade-right">
						<img
							src="assets/img/profile-img.jpg"
							class="img-fluid"
							id="aboutPic"
							alt=""
						/>
					</div>
					<div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
						<h3>Aspiring Full-Stack Web Developer</h3>
						<p class="fst-italic">Important information about me!</p>
						<div class="row">
							<div class="col-lg-6">
								<ul>
									<li>
										<i class="bi bi-chevron-right"></i> <strong>GitHub:</strong>
										<span>https://github.com/pdguerra12</span>
									</li>
									<li>
										<i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
										<span>(551) 580-8095</span>
									</li>
									<li>
										<i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
										<span>San Antonio, TX</span>
									</li>
								</ul>
							</div>
							<div class="col-lg-6">
								<ul>
									<li>
										<i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
										<span>paul.guerra09@gmail.com</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
