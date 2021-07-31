import React from 'react';

// import { Container } from './styles';

function Banner() {
	return (
		<>
			<section class="section section-search">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Procure por um médico, faça uma consulta</h1>
							<p>Descubra os melhores médicos, clínicas e farmácias próximas de onde moras!
							</p>
						</div>

						<div class="search-box">
							<form>
								<div class="form-group search-location">
									<input type="text" class="form-control" placeholder="Procure a sua localização" />
									<span class="form-text">Sua localização</span>
								</div>
								<div class="form-group search-info">
									<input type="text" class="form-control" placeholder="Procure por médicos, clínicas, farmácias, doenças, etc..." />
									<span class="form-text">Ex: Diabetes, Endiama, etc</span>
								</div>
								<button type="submit" class="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Procurar</span></button>
							</form>
						</div>

					</div>
				</div>
			</section>
		</>
	);
}

export default Banner;