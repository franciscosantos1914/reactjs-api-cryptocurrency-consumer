import React from 'react';

// import { Container } from './styles';

function Register() {
	return (
		<>
			<div className="main-wrapper login-body">
				<div className="login-wrapper">
					<div className="container">
						<div className="loginbox">
							<div className="login-left">
								<img className="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
							</div>
							<div className="login-right">
								<div className="login-right-wrap">
									<h1>Register</h1>
									<p className="account-subtitle">Access to our dashboard</p>

									<form>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Name" />
										</div>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Email" />
										</div>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Password" />
										</div>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Confirm Password" />
										</div>
										<div className="form-group mb-0">
											<button className="btn btn-primary btn-block" type="submit">Register</button>
										</div>
									</form>

									<div className="login-or">
										<span className="or-line"></span>
										<span className="span-or">or</span>
									</div>

									<div className="social-login">
										<span>Register with</span>
										<a href="#" className="facebook"><i className="fa fa-facebook"></i></a><a href="#" className="google"><i className="fa fa-google"></i></a>
									</div>

									<div className="text-center dont-have">Already have an account? <a href="login.html">Login</a></div>
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