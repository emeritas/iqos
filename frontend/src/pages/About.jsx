import React from 'react';
import HeadImg from '../assets/images/head.png';

export default function About() {
	return (
		<main className='fade-animation'>
			<section class='bg-light-blue pt-3 pb-3'>
				<div class='container'>
					<h1 className="main-title text-center font-bold">Apie IQOS</h1>
				</div>
			</section>
			<section>
				<div className='container about-container'>
					<img src={HeadImg} className='about-img text-center' />

					<div className='centered'>
						<p className='about-page'>
							Ieškote informacijos apie Lietuvos aukštąsias mokyklas, ieškote
							karjerso galimybių ar norite sužinoti aktualiausias naujienas?
							<br /> Visa tai rasite <span className='iqos-name'>IQOS</span>.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
