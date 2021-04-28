import React from 'react';

export default function About() {
  return (
    <main className='fade-animation'>
      <section class='bg-light-blue pt-3 pb-3'>
        <div class='container'>
          <h1 className='main-title text-center font-bold'>Apie IQOS</h1>
        </div>
      </section>
      <section>
        <div className='container about-container'>
          <div>
            <p className='about-page'>
              IQOS projekto idėja užgimė 2005 m., kai tuometiniams
              abiturientams, besiplaškantiems pasirinkimų sūkuryje, ir
              abejojantiems, kur stoti, užgimė idėja sukurti organizuotą duomenų
              bazę, kurioje būtų pateiktos visos Lietuvos švietimo institucijos.
              Tuo metu svetainė startavo su 50 mokymo įstaigų duomenu baze. Šiuo
              metu joje rasite daugiau nei 4000 mokymo įstaigų!
            </p>
            <p className='about-page'>
              Ateityje svetainėje atsiras ir užsienio mokymosi įstaigos bei
              pagrindiniai stojimo reikalavimai.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
