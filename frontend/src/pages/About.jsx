import React from 'react';
import Education from '../assets/images/education.jpg';

export default function About() {
  return (
    <main className='fade-animation'>
<<<<<<< Updated upstream
      <section className='bg-light-blue pt-3 pb-3'>
        <div className='container'>
          <h1 className='main-title text-center font-bold'>Apie IQOS</h1>
        </div>
      </section>
      <section>
        <div className='container about-container'>
          <img src={Education} className='about-img text-center' />

          <div className='centered'>
            <div className='about-page'>
              <p>
                IQOS komanda susibūrė 2005 m., kai tuometiniams abiturientams,
                besiplaškantiems aukštųjų mokyklų pasirinkimų sukūryje, užgimė
                idėja sukurti svetainę, kurioje organizuotai būtų pateikta
                esminė informacija apie visas Lietuvoje veikiančias mokymo
                įstaigas. Tuo metu svetainė startavo su 57 mokyklų sąrašu, dabar
                svetainėje rasite virš 4000 institucijų.
              </p>
            </div>
          </div>
        </div>
      </section>
=======
      <section className='bg-light-grey'>
        <div className='container about-container'>
          <img src={HeadImg} className='about-img text-center' />

          <div className='centered'>
            <h1 className='text-center about-title'>Apie IQOS</h1>
            <p className='about-page'>
              Ieškote informacijos apie Lietuvos aukštąsias mokyklas, ieškote
              karjeros galimybių ar norite sužinoti aktualiausias naujienas?
              <br /> Visa tai rasite <span className='iqos-name'>IQOS</span>.
            </p>
          </div>
        </div>
      </section>

      <section></section>
>>>>>>> Stashed changes
    </main>
  );
}
