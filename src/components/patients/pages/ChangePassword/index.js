import React from 'react';
import Menu from '../../components/Menu';
import Header from '../../../doctors/components/Header';
import Footer from '../../../public-area/components/Footer';

// import { Container } from './styles';

function ChangePassword() {
	return (
		<>
			<Header />
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Change Password</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Change Password</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="container-fluid">
					<div className="row">

						<Menu />

						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-md-12 col-lg-6">

											<form>
												<div className="form-group">
													<label>Old Password</label>
													<input type="password" className="form-control" />
												</div>
												<div className="form-group">
													<label>New Password</label>
													<input type="password" className="form-control" />
												</div>
												<div className="form-group">
													<label>Confirm Password</label>
													<input type="password" className="form-control" />
												</div>
												<div className="submit-section">
													<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
												</div>
											</form>

										</div>
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

export default ChangePassword;