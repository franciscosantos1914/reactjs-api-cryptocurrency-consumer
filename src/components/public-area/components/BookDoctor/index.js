import React from 'react';

// import { Container } from './styles';

function BookDoctor() {
	return (
		<>
			<section className="section section-doctor">

				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<div className="section-header ">
								<h2>Deseja fazer uma consulta?</h2>
								<p>Escolha o médico com quem pretende ter uma consulta</p>
							</div>
							<div className="about-content">
								<p>A OndjoDoctor disponibiliza a oportunidade de fazerers consultas, reservas e marcações. Dê uma olhada na lista disponível de médicos e instituições ou faça uma pesquise e encontre o médico ou a instituiçao que deseja.</p>
								<p>Esta plataforma também permite fazer <span className="text-danger">chamadas de voz ou de vídeo para médicos ou instituições</span> que desejares entrar em contacto.</p>
								<p>Para obter ainda mais benefícios, <span className="text-danger">cria a sua conta</span> e estará habilitado a <span className="text-danger"> fazer consulta e obter receitas em tempo real, poderá também obter registros médicos, receber notificações das mais diversas clínicas, centros médicos e farmácias do território angolano e conversar com médicos e especialistas por meio de chat e mensagens. </span></p>
								<a href="javascript:;">Saiba mais</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="doctor-slider slider d-flex doctor_items">

								<div id="demo" class="carousel slide" data-ride="carousel">

									<div class="carousel-inner">
										<div class="carousel-item active">
											<div className="profile-widget">
												<div className="doc-img">
													<a href="doctor-profile.html">
														<img className="img-fluid" alt="User Image" src="img/doctors/doctor-01.jpg" />
													</a>
													<a href="javascript:void(0)" className="fav-btn">
														<i className="far fa-bookmark"></i>
													</a>
												</div>
												<div className="pro-content">
													<h3 className="title">
														<a href="doctor-profile.html">Ruby Perrin</a>
														<i className="fas fa-check-circle verified"></i>
													</h3>
													<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
													<div className="rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<span className="d-inline-block average-rating">(17)</span>
													</div>
													<ul className="available-info">
														<li>
															<i className="fas fa-map-marker-alt"></i> Florida, USA
														</li>
														<li>
															<i className="far fa-clock"></i> Available on Fri, 22 Mar
														</li>
														<li>
															<i className="far fa-money-bill-alt"></i> $300 - $1000
															<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
														</li>
													</ul>
													<div className="row row-sm">
														<div className="col-6">
															<a href="doctor-profile.html" className="btn view-btn">Ver Perfil</a>
														</div>
														<div className="col-6">
															<a href="booking.html" className="btn book-btn">Marcar Consulta</a>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="carousel-item">
											<div className="profile-widget">
												<div className="doc-img">
													<a href="doctor-profile.html">
														<img className="img-fluid" alt="User Image" src="img/doctors/doctor-02.jpg" />
													</a>
													<a href="javascript:void(0)" className="fav-btn">
														<i className="far fa-bookmark"></i>
													</a>
												</div>
												<div className="pro-content">
													<h3 className="title">
														<a href="doctor-profile.html">Darren Elder</a>
														<i className="fas fa-check-circle verified"></i>
													</h3>
													<p className="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
													<div className="rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star"></i>
														<span className="d-inline-block average-rating">(35)</span>
													</div>
													<ul className="available-info">
														<li>
															<i className="fas fa-map-marker-alt"></i> Newyork, USA
														</li>
														<li>
															<i className="far fa-clock"></i> Available on Fri, 22 Mar
														</li>
														<li>
															<i className="far fa-money-bill-alt"></i> $50 - $300
															<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
														</li>
													</ul>
													<div className="row row-sm">
														<div className="col-6">
															<a href="doctor-profile.html" className="btn view-btn">Ver Perfil</a>
														</div>
														<div className="col-6">
															<a href="booking.html" className="btn book-btn">Marcar Consulta</a>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="carousel-item">
											<div className="profile-widget">
												<div className="doc-img">
													<a href="doctor-profile.html">
														<img className="img-fluid" alt="User Image" src="img/doctors/doctor-03.jpg" />
													</a>
													<a href="javascript:void(0)" className="fav-btn">
														<i className="far fa-bookmark"></i>
													</a>
												</div>
												<div className="pro-content">
													<h3 className="title">
														<a href="doctor-profile.html">Deborah Angel</a>
														<i className="fas fa-check-circle verified"></i>
													</h3>
													<p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
													<div className="rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star"></i>
														<span className="d-inline-block average-rating">(27)</span>
													</div>
													<ul className="available-info">
														<li>
															<i className="fas fa-map-marker-alt"></i> Georgia, USA
														</li>
														<li>
															<i className="far fa-clock"></i> Available on Fri, 22 Mar
														</li>
														<li>
															<i className="far fa-money-bill-alt"></i> $100 - $400
															<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
														</li>
													</ul>
													<div className="row row-sm">
														<div className="col-6">
															<a href="doctor-profile.html" className="btn view-btn">Ver Perfil</a>
														</div>
														<div className="col-6">
															<a href="booking.html" className="btn book-btn">Marcar Consulta</a>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="carousel-item">
											<div className="profile-widget">
												<div className="doc-img">
													<a href="doctor-profile.html">
														<img className="img-fluid" alt="User Image" src="img/doctors/doctor-04.jpg" />
													</a>
													<a href="javascript:void(0)" className="fav-btn">
														<i className="far fa-bookmark"></i>
													</a>
												</div>
												<div className="pro-content">
													<h3 className="title">
														<a href="doctor-profile.html">Sofia Brient</a>
														<i className="fas fa-check-circle verified"></i>
													</h3>
													<p className="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
													<div className="rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star"></i>
														<span className="d-inline-block average-rating">(4)</span>
													</div>
													<ul className="available-info">
														<li>
															<i className="fas fa-map-marker-alt"></i> Louisiana, USA
														</li>
														<li>
															<i className="far fa-clock"></i> Available on Fri, 22 Mar
														</li>
														<li>
															<i className="far fa-money-bill-alt"></i> $150 - $250
															<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
														</li>
													</ul>
													<div className="row row-sm">
														<div className="col-6">
															<a href="doctor-profile.html" className="btn view-btn">Ver Perfil</a>
														</div>
														<div className="col-6">
															<a href="booking.html" className="btn book-btn">Marcar Consulta</a>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="carousel-item">
											<div className="profile-widget">
												<div className="doc-img">
													<a href="doctor-profile.html">
														<img className="img-fluid" alt="User Image" src="img/doctors/doctor-05.jpg" />
													</a>
													<a href="javascript:void(0)" className="fav-btn">
														<i className="far fa-bookmark"></i>
													</a>
												</div>
												<div className="pro-content">
													<h3 className="title">
														<a href="doctor-profile.html">Marvin Campbell</a>
														<i className="fas fa-check-circle verified"></i>
													</h3>
													<p className="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
													<div className="rating">
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star filled"></i>
														<i className="fas fa-star"></i>
														<span className="d-inline-block average-rating">(66)</span>
													</div>
													<ul className="available-info">
														<li>
															<i className="fas fa-map-marker-alt"></i> Michigan, USA
														</li>
														<li>
															<i className="far fa-clock"></i> Available on Fri, 22 Mar
														</li>
														<li>
															<i className="far fa-money-bill-alt"></i> $50 - $700
															<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
														</li>
													</ul>
													<div className="row row-sm">
														<div className="col-6">
															<a href="doctor-profile.html" className="btn view-btn">Ver Perfil</a>
														</div>
														<div className="col-6">
															<a href="booking.html" className="btn book-btn">Marcar Consulta</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="carousel-item">
										<div className="profile-widget">
											<div className="doc-img">
												<a href="doctor-profile.html">
													<img className="img-fluid" alt="User Image" src="img/doctors/doctor-06.jpg" />
												</a>
												<a href="javascript:void(0)" className="fav-btn">
													<i className="far fa-bookmark"></i>
												</a>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<a href="doctor-profile.html">Katharine Berthold</a>
													<i className="fas fa-check-circle verified"></i>
												</h3>
												<p className="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
												<div className="rating">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star"></i>
													<span className="d-inline-block average-rating">(52)</span>
												</div>
												<ul className="available-info">
													<li>
														<i className="fas fa-map-marker-alt"></i> Texas, USA
													</li>
													<li>
														<i className="far fa-clock"></i> Available on Fri, 22 Mar
													</li>
													<li>
														<i className="far fa-money-bill-alt"></i> $100 - $500
														<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<a href="doctor-profile.html" className="btn view-btn">Ver Perfil</a>
													</div>
													<div className="col-6">
														<a href="booking.html" className="btn book-btn">Marcar Consulta</a>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="carousel-item">
										<div className="profile-widget">
											<div className="doc-img">
												<a href="doctor-profile.html">
													<img className="img-fluid" alt="User Image" src="img/doctors/doctor-07.jpg" />
												</a>
												<a href="javascript:void(0)" className="fav-btn">
													<i className="far fa-bookmark"></i>
												</a>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<a href="doctor-profile.html">Linda Tobin</a>
													<i className="fas fa-check-circle verified"></i>
												</h3>
												<p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
												<div className="rating">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star"></i>
													<span className="d-inline-block average-rating">(43)</span>
												</div>
												<ul className="available-info">
													<li>
														<i className="fas fa-map-marker-alt"></i> Kansas, USA
													</li>
													<li>
														<i className="far fa-clock"></i> Available on Fri, 22 Mar
													</li>
													<li>
														<i className="far fa-money-bill-alt"></i> $100 - $1000
														<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<a href="doctor-profile.html" className="btn view-btn">Ver Perfil</a>
													</div>
													<div className="col-6">
														<a href="booking.html" className="btn book-btn">Marcar Consulta</a>
													</div>
												</div>
											</div>
										</div>
									</div>

									<a class="carousel-control-prev" href="#demo" data-slide="prev">
										<span class="carousel-control-prev-icon bg-dark"></span>
									</a>
									<a class="carousel-control-next" href="#demo" data-slide="next">
										<span class="carousel-control-next-icon bg-dark"></span>
									</a>

								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BookDoctor;