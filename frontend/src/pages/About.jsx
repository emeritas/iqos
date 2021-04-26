import React from 'react';
import HeadImg from '../assets/images/head.png';

export default function About() {
	return (
		<main className='fade-animation'>
			<section className='bg-light-grey'>
				<div className='container about-container'>
					<img src={HeadImg} className='about-img text-center' />

					<div className='centered'>
						<h1 className='text-center about-title'>Apie IQOS</h1>
						<p className='about-page'>
							Ieškote informacijos apie Lietuvos aukštąsias mokyklas, ieškote
							karjerso galimybių ar norite sužinoti aktualiausias naujienas?
							<br /> Visa tai rasite <span className='iqos-name'>
								IQOS
							</span>.
						</p>
					</div>
				</div>
			</section>

			<section></section>
		</main>
	);
}
