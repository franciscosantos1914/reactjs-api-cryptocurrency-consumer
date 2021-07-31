import React from 'react';

// import { Container } from './styles';

function ForgotPassword() {
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
									<h1>Forgot Password?</h1>
									<p className="account-subtitle">Enter your email to get a password reset link</p>

									<form>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Email" />
										</div>
										<div className="form-group mb-0">
											<button className="btn btn-primary btn-block" type="submit">Reset Password</button>
										</div>
									</form>

									<div className="text-center dont-have">Remember your password? <a href="login.html">Login</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ForgotPassword;