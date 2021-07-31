import React from 'react';

// import { Container } from './styles';

function Register() {
	return (
		<>
			<div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-8 offset-md-2">

							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									<div className="col-md-7 col-lg-6 login-left">
										<img src="img/login-banner.png" className="img-fluid" alt="Doccure Login" />
									</div>
									<div className="col-md-12 col-lg-6 login-right">
									<div class="login-header">
											<h3>Criar Conta de Médico <a href="#">Não é médico?</a></h3>
										</div>
										<form>
										<div className="form-group form-focus">
												<input type="text" className="form-control floating" required />
												<label className="focus-label">Nome*</label>
											</div>
											<div className="form-group form-focus">
												<input type="email" className="form-control floating" required />
												<label className="focus-label">Email*</label>
											</div>
											<div className="form-group form-focus">
												<input type="password" className="form-control floating" required />
												<label className="focus-label">Senha*</label>
											</div>
											<div className="text-right">
												<a className="forgot-link" href="#">Esqueceu a sua senha?</a>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Registrar</button>
											<div className="login-or">
												<span className="or-line"></span>
												<span className="span-or">ou</span>
											</div>
											<div className="row form-row social-login">
												<div className="col-6">
													<a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1"></i> Entrar com Facebook</a>
												</div>
												<div className="col-6">
													<a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Entrar com Gmail</a>
												</div>
											</div>
											<div className="text-center dont-have">Já tem conta? <a href="register.html">Entrar na minha conta</a></div>
										</form>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>
		</>
	);
}

export default Register;