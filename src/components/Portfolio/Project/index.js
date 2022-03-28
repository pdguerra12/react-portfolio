import React from "react";

function Project() {
	return (
		<section id="portfolio" class="portfolio section-bg">
			<div class="container">
				<div class="section-title">
					<h2>Portfolio</h2>
					<p>
						This portfolio contains a list of some projects I have completed
						using a variety of browser based technologies, deployment platforms,
						and databases. Check out my Github linked in the navigation bar or
						in the "About" section for my extensive list of projects.
					</p>
				</div>

				<div class="row" data-aos="fade-up">
					<div class="col-lg-12 d-flex justify-content-center">
						<ul id="portfolio-flters">
							<li data-filter="*" class="filter-active">
								All
							</li>
							<li data-filter=".filter-app">App</li>
							<li data-filter=".filter-web">Web</li>
							<li data-filter=".filter-card">Command-Line</li>
						</ul>
					</div>
				</div>

				<div
					class="row portfolio-container"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<div class="portfolio-wrap">
							<img
								src="assets/img/portfolio/portfolio-1.jpg"
								class="img-fluid"
								alt=""
							/>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-1.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="App 1"
								>
									<i class="bx bx-plus"></i>
								</a>
								<a href="./portfolio-details/1.html" title="More Details">
									<i class="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<div class="portfolio-wrap">
							<img
								src="assets/img/portfolio/portfolio-2.jpg"
								class="img-fluid"
								alt=""
							/>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-2.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Command-Line 1"
								>
									<i class="bx bx-plus"></i>
								</a>
								<a href="./portfolio-details/2.html" title="More Details">
									<i class="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<div class="portfolio-wrap">
							<img
								src="assets/img/portfolio/portfolio-3.jpg"
								class="img-fluid"
								alt=""
							/>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-3.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Web 1"
								>
									<i class="bx bx-plus"></i>
								</a>
								<a href="./portfolio-details/3.html" title="More Details">
									<i class="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<div class="portfolio-wrap">
							<img
								src="assets/img/portfolio/portfolio-4.jpg"
								class="img-fluid"
								alt=""
							/>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-4.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Web 2"
								>
									<i class="bx bx-plus"></i>
								</a>
								<a href="./portfolio-details/4.html" title="More Details">
									<i class="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<div class="portfolio-wrap">
							<img
								src="assets/img/portfolio/portfolio-5.jpg"
								class="img-fluid"
								alt=""
							/>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-5.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Web 3"
								>
									<i class="bx bx-plus"></i>
								</a>
								<a href="./portfolio-details/5.html" title="More Details">
									<i class="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<div class="portfolio-wrap">
							<img
								src="assets/img/portfolio/portfolio-6.jpg"
								class="img-fluid"
								alt=""
							/>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-6.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="App 2"
								>
									<i class="bx bx-plus"></i>
								</a>
								<a href="./portfolio-details/6.html" title="More Details">
									<i class="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<div class="portfolio-wrap">
							<img
								src="assets/img/portfolio/portfolio-7.jpg"
								class="img-fluid"
								alt=""
							/>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-7.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Web 4"
								>
									<i class="bx bx-plus"></i>
								</a>
								<a href="portfolio-details/7.html" title="More Details">
									<i class="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;
