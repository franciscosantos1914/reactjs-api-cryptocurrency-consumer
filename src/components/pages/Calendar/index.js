import React from 'react';
import Header from '../../public-area/components/Header'
import Footer from '../../public-area/components/Footer'

// import { Container } from './styles';

function Calendar() {
	return (
		<>
			<Header />
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Calendar</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Calendar</h2>
						</div>
						<div className="col-auto text-right float-right ml-auto">
							<a href="#" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#add_event">Create Event</a>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="container-fluid">

					<div className="row">

						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title mb-0">Drag & Drop Event</h4>
								</div>
								<div className="card-body">
									<div id="calendar-events" className="mb-3">
										<div className="calendar-events" data-className="bg-info"><i className="fas fa-circle text-info"></i> My Event One</div>
										<div className="calendar-events" data-className="bg-success"><i className="fas fa-circle text-success"></i> My Event Two</div>
										<div className="calendar-events" data-className="bg-danger"><i className="fas fa-circle text-danger"></i> My Event Three</div>
										<div className="calendar-events" data-className="bg-warning"><i className="fas fa-circle text-warning"></i> My Event Four</div>
									</div>
									<div className="checkbox mb-3">
										<input id="drop-remove" type="checkbox" />
										<label for="drop-remove">
											Remove after drop
										</label>
									</div>
									<a href="#" data-toggle="modal" data-target="#add_new_event" className="btn btn-primary btn-block">
										<i className="fas fa-plus"></i> Add Category
									</a>
								</div>
							</div>
						</div>

						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card">
								<div className="card-body">
									<div id="calendar"></div>
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

export default Calendar;