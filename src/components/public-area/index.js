import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Features from './components/Features';
import BookDoctor from './components/BookDoctor';
import Specialities from './components/Specialities';

function PublicArea() {
	return (
		<>
		<div className="main-wrapper">
			<Header />
			<Banner />
			<Specialities />
			<BookDoctor />
			<Features />
			<Footer />
		</div>
		</>
	);
}

export default PublicArea;