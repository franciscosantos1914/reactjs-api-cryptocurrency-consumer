import React from 'react';
import Menu from '../../components/Menu'

// import { Container } from './styles';

function Invoices() {
	return (
		<>
		<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Invoices</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Invoices</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="container-fluid">

					<div className="row">

					<Menu />

						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card card-table">
								<div className="card-body">
								
									<div className="table-responsive">
										<table className="table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Invoice No</th>
													<th>Patient</th>
													<th>Amount</th>
													<th>Paid On</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0010</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
														</h2>
													</td>
													<td>$450</td>
													<td>14 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0009</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient1.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Charlene Reed <span>#PT0001</span></a>
														</h2>
													</td>
													<td>$200</td>
													<td>13 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0008</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient2.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Travis Trimble <span>#PT0002</span></a>
														</h2>
													</td>
													<td>$100</td>
													<td>12 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0007</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient3.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Carl Kelly <span>#PT0003</span></a>
														</h2>
													</td>
													<td>$350</td>
													<td>11 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0006</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient4.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Michelle Fairfax <span>#PT0004</span></a>
														</h2>
													</td>
													<td>$275</td>
													<td>10 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0005</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient5.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Gina Moore <span>#PT0005</span></a>
														</h2>
													</td>
													<td>$600</td>
													<td>9 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0004</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient6.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Elsie Gilley <span>#PT0006</span></a>
														</h2>
													</td>
													<td>$50</td>
													<td>8 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0003</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient7.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Joan Gardner <span>#PT0007</span></a>
														</h2>
													</td>
													<td>$400</td>
													<td>7 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0002</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient8.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Daniel Griffing <span>#PT0008</span></a>
														</h2>
													</td>
													<td>$550</td>
													<td>6 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<a href="invoice-view.html">#INV-0001</a>
													</td>
													<td>
														<h2 className="table-avatar">
															<a href="patient-profile.html" className="avatar avatar-sm mr-2">
																<img className="avatar-img rounded-circle" src="img/patients/patient9.jpg" alt="User Image" />
															</a>
															<a href="patient-profile.html">Walter Roberson <span>#PT0009</span></a>
														</h2>
													</td>
													<td>$100</td>
													<td>5 Nov 2019</td>
													<td className="text-right">
														<div className="table-action">
															<a href="invoice-view.html" className="btn btn-sm bg-info-light">
																<i className="far fa-eye"></i> View
															</a>
															<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
																<i className="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
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

export default Invoices;