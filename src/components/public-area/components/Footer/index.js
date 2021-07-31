import React from 'react';

// import { Container } from './styles';

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer-top">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-3 col-md-6">

								<div className="footer-widget footer-about">
									<div className="footer-logo">
										<img src="img/footer-logo.png" alt="logo" />
									</div>
									<div className="footer-about-content">
										<p>Levamos a saúde até você!</p>
										<div className="social-icon">
											<ul>
												<li>
													<a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-twitter"></i> </a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-dribbble"></i> </a>
												</li>
											</ul>
										</div>
										<div className="footer-widget footer-contact mt-5">
											<h2 className="footer-title">Contactos</h2>
											<div className="footer-contact-info">
												<div className="footer-address">
													<span><i className="fas fa-map-marker-alt"></i></span>
													<p> Rua 35, Zango 0<br /> Viana, Luanda | Angola</p>
												</div>
												<p>
													<i className="fas fa-phone-alt"></i>
													+244 922 333 444
												</p>
												<p className="mb-0">
													<i className="fas fa-envelope"></i>
													ondjodoctor@ondjodoctor.com
												</p>
											</div>
										</div>
									</div>
								</div>

							</div>

							<div className="col-lg-3 col-md-6">

								<div className="footer-widget footer-menu">
									<h2 className="footer-title">Pacientes</h2>
									<ul>
										<li><a href="#">Pesquisar Médicos</a></li>
										<li><a href="#">Painel Administrativo</a></li>
										<li><a href="#">Favoritos</a></li>
										<li><a href="#">Chat e Mensagens</a></li>
										<li><a href="#">Reservas/Marcações</a></li>
										<li><a href="#">Lista de Marcações</a></li>
										<li><a href="#">Lista de Receitas</a></li>
										<li><a href="#">Registros Médicos</a></li>
										<li><a href="#">Faturas e Cobranças</a></li>
									</ul>
								</div>

							</div>

							<div className="col-lg-3 col-md-6">

								<div className="footer-widget footer-menu">
									<h2 className="footer-title">Médicos</h2>
									<ul>
										<li><a href="#">Pesquisar Pacientes</a></li>
										<li><a href="#">Painel Administrativo</a></li>
										<li><a href="#">Gestão de Pacientes</a></li>
										<li><a href="#">Chat e Mensagens</a></li>
										<li><a href="#">Gestão de Compromissos</a></li>
										<li><a href="#">Horários e Calendários</a></li>
										<li><a href="#">Controlo de Consultas<br /> por Marcação</a></li>
										<li><a href="#">Avaliações</a></li>
									</ul>
								</div>

							</div>

							<div className="col-lg-3 col-md-6">

								<div className="footer-widget footer-menu">
									<h2 className="footer-title">Gerais</h2>
									<ul>
										<li><a href="#">Entrar na Conta</a></li>
										<li><a href="#">Criar uma Conta</a></li>
										<li><a href="#">Pesquisa</a></li>
										<li><a href="#">SMS</a></li>
										<li><a href="#">Chamada de Voz</a></li>
										<li><a href="#">VideoChamada</a></li>
										<li><a href="#">Calendário</a></li>
										<li><a href="#">Faturas e<br /> Visualização de Faturas</a></li>
									</ul>
								</div>

							</div>

						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="container">

						<div className="copyright">
							<div className="col-md-12 col-lg-12">

								<div className="copyright-menu">
									<ul className="policy-menu text-center">
										<li><a href="#">Termos e Condicões</a></li>
										<li><a href="#">Política de Privacidade</a></li>
										<li><a href="javascript:;">&copy; Todos os direitos reservados | OndjoDoctor</a></li>
									</ul>
								</div>

							</div>
						</div>

					</div>
				</div>

			</footer>
		</>
	);
}

export default Footer;