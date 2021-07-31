import React from 'react';

// import { Container } from './styles';

function Features() {
	return (
		<>
			<section className="section section-features">
				<div className="container d-flex justify-content-center">
					<div className="row">
						<div className="features-img">
							<img src="img/features/feature.png" className="img-fluid" alt="Feature" />
						</div>
					</div>
				</div>

				<div className="container mt-5">
					<div className="section-header text-center">
						<h2 className="mt-2">Itens Disponivéis</h2>
						<p>As clínicas, farmácias e centros médicos registrados na OndjoDoctor disponiblizam estes itens:</p>
					</div>
					<div className="features-slider slider d-flex features_items">
						<div className="feature-item text-center">
							<img src="img/features/feature-01.jpg" className="img-fluid" alt="Feature" />
							<p>Camas para Pacientes</p>
						</div>

						<div className="feature-item text-center">
							<img src="img/features/feature-02.jpg" className="img-fluid" alt="Feature" />
							<p>Sala de Testes</p>
						</div>

						<div className="feature-item text-center">
							<img src="img/features/feature-03.jpg" className="img-fluid" alt="Feature" />
							<p>ICU</p>
						</div>

						<div className="feature-item text-center">
							<img src="img/features/feature-04.jpg" className="img-fluid" alt="Feature" />
							<p>Laboratório</p>
						</div>

						<div className="feature-item text-center">
							<img src="img/features/feature-05.jpg" className="img-fluid" alt="Feature" />
							<p>Operações</p>
						</div>

						<div className="feature-item text-center">
							<img src="img/features/feature-06.jpg" className="img-fluid" alt="Feature" />
							<p>Medicina Natural</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Features;