import React from 'react';

// import { Container } from './styles';

function Specialities() {
	return (
		<>
			<section className="section section-specialities">
				<div className="container-fluid">
					<div className="section-header text-center">
						<h2>Clínicas e Especialidades</h2>
						<p className="sub-title">Encontre as clínicas e verifique as especialidades que desejar para a resolução da sua enfermidade ou do seu próximo!</p>
					</div>
					<div className="row justify-content-center">
						<div className="specialities-slider slider d-flex specialities_items">
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src="img/specialities/specialities-01.png" className="img-fluid" alt="Speciality" />
									<span><i className="fa fa-circle" aria-hidden="true"></i></span>
								</div>
								<p>Urologia</p>
							</div>

							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src="img/specialities/specialities-02.png" className="img-fluid" alt="Speciality" />
									<span><i className="fa fa-circle" aria-hidden="true"></i></span>
								</div>
								<p>Neurologia</p>
							</div>

							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src="img/specialities/specialities-03.png" className="img-fluid" alt="Speciality" />
									<span><i className="fa fa-circle" aria-hidden="true"></i></span>
								</div>
								<p>Ortopedia</p>
							</div>

							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src="img/specialities/specialities-04.png" className="img-fluid" alt="Speciality" />
									<span><i className="fa fa-circle" aria-hidden="true"></i></span>
								</div>
								<p>Cardiologia</p>
							</div>

							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src="img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />
									<span><i className="fa fa-circle" aria-hidden="true"></i></span>
								</div>
								<p>Dentista</p>
							</div>

						</div>

					</div>
				</div>
			</section>
		</>
	);
}

export default Specialities;