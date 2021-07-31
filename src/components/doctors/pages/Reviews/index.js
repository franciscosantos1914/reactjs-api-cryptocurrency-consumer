import React from 'react';
import Menu from '../../components/Menu';

// import { Container } from './styles';

function Reviews() {
	return (
		<>
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Reviews</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Reviews</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="container-fluid">

					<div className="row">

						<Menu />

						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="doc-review review-listing">

								<ul className="comments-list">

									<li>
										<div className="comment">
											<img className="avatar rounded-circle" alt="User Image" src="img/patients/patient.jpg" />
											<div className="comment-body">
												<div className="meta-data">
													<span className="comment-author">Richard Wilson</span>
													<span className="comment-date">Reviewed 2 Days ago</span>
													<div className="review-count rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star"></i>
													</div>
												</div>
												<p className="recommended"><i className="far fa-thumbs-up"></i> I recommend the doctor</p>
												<p className="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div className="comment-reply">
													<a className="comment-btn" href="#">
														<i className="fas fa-reply"></i> Reply
													</a>
													<p className="recommend-btn">
														<span>Recommend?</span>
														<a href="#" className="like-btn">
															<i className="far fa-thumbs-up"></i> Yes
														</a>
														<a href="#" className="dislike-btn">
															<i className="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>

										<ul className="comments-reply">

											<li>
												<div className="comment">
													<img className="avatar rounded-circle" alt="User Image" src="img/doctors/doctor-thumb-02.jpg" />
													<div className="comment-body">
														<div className="meta-data">
															<span className="comment-author">Dr. Darren Elder</span>
															<span className="comment-date">Reviewed 3 Days ago</span>
														</div>
														<p className="comment-content">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit,
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
															Ut enim ad minim veniam.
															Curabitur non nulla sit amet nisl tempus
														</p>
														<div className="comment-reply">
															<a className="comment-btn" href="#">
																<i className="fas fa-reply"></i> Reply
															</a>
														</div>
													</div>
												</div>
											</li>

										</ul>

									</li>

									<li>
										<div className="comment">
											<img className="avatar rounded-circle" alt="User Image" src="img/patients/patient2.jpg" />
											<div className="comment-body">
												<div className="meta-data">
													<span className="comment-author">Travis Trimble</span>
													<span className="comment-date">Reviewed 4 Days ago</span>
													<div className="review-count rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
													</div>
												</div>
												<p className="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div className="comment-reply">
													<a className="comment-btn" href="#">
														<i className="fas fa-reply"></i> Reply
													</a>
													<p className="recommend-btn">
														<span>Recommend?</span>
														<a href="#" className="like-btn">
															<i className="far fa-thumbs-up"></i> Yes
														</a>
														<a href="#" className="dislike-btn">
															<i className="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="comment">
											<img className="avatar rounded-circle" alt="User Image" src="img/patients/patient3.jpg" />
											<div className="comment-body">
												<div className="meta-data">
													<span className="comment-author">Carl Kelly</span>
													<span className="comment-date">Reviewed 5 Days ago</span>
													<div className="review-count rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
													</div>
												</div>
												<p className="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div className="comment-reply">
													<a className="comment-btn" href="#">
														<i className="fas fa-reply"></i> Reply
													</a>
													<p className="recommend-btn">
														<span>Recommend?</span>
														<a href="#" className="like-btn">
															<i className="far fa-thumbs-up"></i> Yes
														</a>
														<a href="#" className="dislike-btn">
															<i className="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="comment">
											<img className="avatar rounded-circle" alt="User Image" src="img/patients/patient4.jpg" />
											<div className="comment-body">
												<div className="meta-data">
													<span className="comment-author">Michelle Fairfax</span>
													<span className="comment-date">Reviewed 6 Days ago</span>
													<div className="review-count rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
													</div>
												</div>
												<p className="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div className="comment-reply">
													<a className="comment-btn" href="#">
														<i className="fas fa-reply"></i> Reply
													</a>
													<p className="recommend-btn">
														<span>Recommend?</span>
														<a href="#" className="like-btn">
															<i className="far fa-thumbs-up"></i> Yes
														</a>
														<a href="#" className="dislike-btn">
															<i className="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="comment">
											<img className="avatar rounded-circle" alt="User Image" src="img/patients/patient5.jpg" />
											<div className="comment-body">
												<div className="meta-data">
													<span className="comment-author">Gina Moore</span>
													<span className="comment-date">Reviewed 1 Week ago</span>
													<div className="review-count rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
													</div>
												</div>
												<p className="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div className="comment-reply">
													<a className="comment-btn" href="#">
														<i className="fas fa-reply"></i> Reply
													</a>
													<p className="recommend-btn">
														<span>Recommend?</span>
														<a href="#" className="like-btn">
															<i className="far fa-thumbs-up"></i> Yes
														</a>
														<a href="#" className="dislike-btn">
															<i className="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="comment">
											<img className="avatar rounded-circle" alt="User Image" src="img/patients/patient9.jpg" />
											<div className="comment-body">
												<div className="meta-data">
													<span className="comment-author">Walter Roberson</span>
													<span className="comment-date">Reviewed 1 Week ago</span>
													<div className="review-count rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
													</div>
												</div>
												<p className="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div className="comment-reply">
													<a className="comment-btn" href="#">
														<i className="fas fa-reply"></i> Reply
													</a>
													<p className="recommend-btn">
														<span>Recommend?</span>
														<a href="#" className="like-btn">
															<i className="far fa-thumbs-up"></i> Yes
														</a>
														<a href="#" className="dislike-btn">
															<i className="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="comment">
											<img className="avatar rounded-circle" alt="User Image" src="img/patients/patient8.jpg" />
											<div className="comment-body">
												<div className="meta-data">
													<span className="comment-author">Daniel Griffing</span>
													<span className="comment-date">Reviewed on 1 Nov 2019</span>
													<div className="review-count rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
													</div>
												</div>
												<p className="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div className="comment-reply">
													<a className="comment-btn" href="#">
														<i className="fas fa-reply"></i> Reply
													</a>
													<p className="recommend-btn">
														<span>Recommend?</span>
														<a href="#" className="like-btn">
															<i className="far fa-thumbs-up"></i> Yes
														</a>
														<a href="#" className="dislike-btn">
															<i className="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>
									</li>

								</ul>

							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	);
}

export default Reviews;