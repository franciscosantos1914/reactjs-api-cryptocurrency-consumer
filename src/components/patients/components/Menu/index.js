import React from 'react';

// import { Container } from './styles';

function Menu() {
	return (
		<>
			<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
				<div className="profile-sidebar">
					<div className="widget-profile pro-widget-content">
						<div className="profile-info-widget">
							<a href="#" className="booking-doc-img">
								<img src="img/patients/patient.jpg" alt="User Image" />
							</a>
							<div className="profile-det-info">
								<h3>Richard Wilson</h3>
								<div className="patient-details">
									<h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
									<h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="dashboard-widget">
						<nav className="dashboard-menu">
							<ul>
								<li className="active">
									<a href="patient-dashboard.html">
										<i className="fas fa-columns"></i>
										<span>Dashboard</span>
									</a>
								</li>
								<li>
									<a href="favourites.html">
										<i className="fas fa-bookmark"></i>
										<span>Favourites</span>
									</a>
								</li>
								<li>
									<a href="chat.html">
										<i className="fas fa-comments"></i>
										<span>Message</span>
										<small className="unread-msg">23</small>
									</a>
								</li>
								<li>
									<a href="profile-settings.html">
										<i className="fas fa-user-cog"></i>
										<span>Profile Settings</span>
									</a>
								</li>
								<li>
									<a href="change-password.html">
										<i className="fas fa-lock"></i>
										<span>Change Password</span>
									</a>
								</li>
								<li>
									<a href="index-2.html">
										<i className="fas fa-sign-out-alt"></i>
										<span>Logout</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>

				</div>
			</div>
		</>
	);
}

export default Menu;