import React from 'react';

// import { Container } from './styles';

function Header() {
	return (
		<>
			<header className="header">
				<nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						<a id="mobile_btn" href="javascript:void(0);">
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<a href="#" className="navbar-brand logo">
							<img src="img/logo.png" className="img-fluid" alt="Logo" />
						</a>
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<a href="#" className="menu-logo">
								<img src="img/logo.png" className="img-fluid" alt="Logo" />
							</a>
							<a id="menu_close" className="menu-close" href="javascript:void(0);">
								<i className="fas fa-times"></i>
							</a>
						</div>
						<ul className="main-nav">
							<li className="active">
								<a href="#"><i className="fa fa-home"></i> Home </a>
							</li>
							<li className="has-submenu">
								<a href="#"><i className="fa fa-user-plus"></i> Médicos <i className="fas fa-chevron-down change_position"></i></a>

								<div class="btn-group btn_group">
									<button type="button" class="btn btn-transparent btn-sm text-white">Médicos</button>
									<button type="button" class="btn btn-transparent dropdown-toggle dropdown-toggle-split text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Pesquisa</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Criar Conta</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Entrar na Conta</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Painel Administrativo</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Gestão de Pacientes</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Chat e Mensagens</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Gestão de Compromissos</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Horários e Calendários</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">
											Faturas e Controle<br /> de Pagamentos</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">
											Controlo de Consultas<br /> por Marcação</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Avaliações</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Configurações</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Perfil do Médico</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Perfil do Paciente</a>
										<div class="dropdown-divider"></div>
									</div>
								</div>

								<ul className="submenu">
									<li><a href="#">Pesquisa</a></li>
									<li><a href="#">Criar Conta</a></li>
									<li><a href="#">Entrar na Conta</a></li>
									<li><a href="#">Painel Administrativo</a></li>
									<li><a href="#">Gestão de Pacientes</a></li>
									<li><a href="#">Chat e Mensagens</a></li>
									<li><a href="#">Gestão de Compromissos</a></li>
									<li><a href="#">Horários e Calendários</a></li>
									<li><a href="#">Faturas e Controle<br /> de Pagamentos</a></li>
									<li><a href="#">Controlo de Consultas<br /> por Marcação</a></li>
									<li><a href="#">Avaliações</a></li>
									<li><a href="#">Configurações</a></li>
									<li><a href="#">Perfil do Médico</a></li>
									<li><a href="#">Perfil do Paciente</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="#"><i className="fa fa-users"></i> Pacientes <i className="fas fa-chevron-down change_position"></i></a>

								<div class="btn-group btn_group">
									<button type="button" class="btn btn-transparent btn-sm text-white">Pacientes</button>
									<button type="button" class="btn btn-transparent dropdown-toggle dropdown-toggle-split text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Pesquisa</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Criar Conta</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Entrar na Conta</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Painel Administrativo</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Gestão de Pacientes</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Chat e Mensagens</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Gestão de Compromissos</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Horários e Calendários</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">
											Faturas e Controle<br /> de Pagamentos</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">
											Controlo de Consultas<br /> por Marcação</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Avaliações</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Configurações</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Perfil do Médico</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Perfil do Paciente</a>
									</div>
								</div>

								<ul className="submenu">
									<li><a href="#">Pesquisar por Médico</a></li>
									<li><a href="#">Criar Conta</a></li>
									<li><a href="#">Entrar na Conta</a></li>
									<li><a href="#">Painel Administrativo</a></li>
									<li><a href="#">Favoritos</a></li>
									<li><a href="#">Chat e Mensagens</a></li>
									<li><a href="#">Reservas/Marcações</a></li>
									<li><a href="#">Reservas Confirmadas<br /> e não Confirmadas</a></li>
									<li><a href="#">Lista de Marcações</a></li>
									<li><a href="#">Lista de Receitas</a></li>
									<li><a href="#">Registros Médicos</a></li>
									<li><a href="#">Pagamentos</a></li>
									<li><a href="#">Faturas e Cobranças</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="#"><i className="fa fa-window-maximize"></i> Gerais <i className="fas fa-chevron-down change_position"></i></a>

								<div class="btn-group btn_group">
									<button type="button" class="btn btn-transparent btn-sm text-white">Gerais</button>
									<button type="button" class="btn btn-transparent dropdown-toggle dropdown-toggle-split text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Pesquisa</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">SMS</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Chamada de Voz</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">VideoChamada</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Calendário</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Entrar na Conta</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Criar uma Conta</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Faturas e<br /> Visualização de Faturas</a>
									</div>
								</div>

								<ul className="submenu">
									<li><a href="#">Pesquisa</a></li>
									<li><a href="#">SMS</a></li>
									<li><a href="#">Chamada de Voz</a></li>
									<li><a href="#">VideoChamada</a></li>
									<li><a href="#">Calendário</a></li>
									<li><a href="#">Entrar na Conta</a></li>
									<li><a href="#">Criar uma Conta</a></li>
									<li><a href="#">Faturas e<br /> Visualização de Faturas</a></li>
								</ul>
							</li>
							<li>
								<a href="#" target="_blank"><i className="fa fa-cogs"></i> Administração</a>
							</li>
							<li className="login-link">
								<a href="#">Entrar / Registrar </a>
							</li>
						</ul>
					</div>
					<ul className="nav header-navbar-rht">
						<li className="nav-item contact-item">
							<div className="header-contact-img">
								<i className="fa fa-stethoscope"></i>
							</div>
							<div className="header-contact-detail">
								<p className="contact-header">Contactos</p>
								<p className="contact-info-header"> +244 922 333 444</p>
							</div>
						</li>
						<li className="nav-item dropdown has-arrow logged-item">
							<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
								<span className="user-img">
									<img className="rounded-circle" src="img/doctors/doctor-thumb-02.jpg" width="31" alt="Darren Elder" />
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<div className="user-header">
									<div className="avatar avatar-sm">
										<img src="img/doctors/doctor-thumb-02.jpg" alt="User Image" className="avatar-img rounded-circle" />
									</div>
									<div className="user-text">
										<h6>Darren Elder</h6>
										<p className="text-muted mb-0">Doctor</p>
									</div>
								</div>
								<a className="dropdown-item" href="doctor-dashboard.html">Dashboard</a>
								<a className="dropdown-item" href="doctor-profile-settings.html">Profile Settings</a>
								<a className="dropdown-item" href="login.html">Logout</a>
							</div>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;