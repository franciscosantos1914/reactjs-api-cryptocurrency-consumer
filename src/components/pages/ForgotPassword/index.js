import React from 'react';
import Header from '../../public-area/components/Header'
import Footer from '../../public-area/components/Footer'

// import { Container } from './styles';

function ForgotPassword() {
	return (
		<>
			<Header />
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-8 offset-md-2">

							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="img/login-banner.png" class="img-fluid" alt="Login Banner" />
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Forgot Password?</h3>
											<p class="small text-muted">Enter your email to get a password reset link</p>
										</div>

										<form>
											<div class="form-group form-focus">
												<input type="email" class="form-control floating" />
												<label class="focus-label">Email</label>
											</div>
											<div class="text-right">
												<a class="forgot-link" href="login.html">Remember your password?</a>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
										</form>

									</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>
			<Footer />
		</>
	);
}

export default ForgotPassword;