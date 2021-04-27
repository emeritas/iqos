import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='fade-animation home'>
      <section className='hero hero--home'>
        <div className='bg-overlay'></div>
        <div className='px-4 py-5 my-5 text-center hero__content'>
          <h1 className='display-5 fw-bold text-white'>
            Visos Lietuvos švietimo įstaigos vienoje vietoje
          </h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4 text-white'>
              „Mokymasis yra geriausia apsaugos priemonė nuo senatvės“. <br />–
              Aristotelis
            </p>
            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
              <Link
                className='button button--primary btn-lg px-4'
                to='/new-partner'
              >
                TAPK PARTNERIU
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-yellow'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <h4>
                <span>
                  <i className='fas fa-book i-tag'></i>
                </span>{' '}
                Greita mokslo įstaigos paieška
              </h4>
              <p>
                Ieškote švietimo įstaigų savo regione ar galbūt privačios mokymo
                įstaigos? Mūsų svetainėje rasite daugiau nei 4000 formaliojo ir
                neformaliojo švietimo įstaigų. Paprasta paieška leis
                išsifiltruoti instituciją pagal pavadinimą, kodą, ar grupę.
              </p>
            </div>
            <div className='col-sm'>
              {' '}
              <h4>
                <span>
                  <i className='far fa-file i-tag'></i>
                </span>{' '}
                API dokumentacija
              </h4>
              <p>
                Mūsų API dokumentacijos skyrelyje rasite aiškiai pateiktą
                informaciją, kaip mūsų duomenų bazėje tvarkomas jūsų
                institucijos įrašas.
              </p>
            </div>
            <div className='col-sm'>
              {' '}
              <h4>
                <span>
                  <i className='fas fa-user-plus i-tag'></i>
                </span>{' '}
                Užregistruokite savo mokyklą
              </h4>
              <p>
                „IQOS“ – viena populiariausių švietimo įstaigų paieškos
                svetainių Lietuvoje. Kasdien čia lankosi daugiau 10 000 fizinių
                ir 7 000 juridinių asmenų. Pageidaujate pritraukti naujus
                mokinius, o galbūt siekiate bendradarbiavimo su partneriais –
                rinkitės mus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light-blue'>
        <div className='container'>
          <div className='layout-centered-content text-center'>
            <h2>Skirkite 1,2% pajamų mokesčio dalį</h2>
            <p className='text-justify'>
              Jūsų parama bus panaudota tolesniam svetainės tobulinimui,
              pateikti naujienas apie svarbiausius pokyčius švietimo srityje ir
              reklamai siekiant pritraukti naujus partnerius ir investuotojus.
              Kaip skirti 1,2% nuo sumokėto pajamų mokesčio galite sužinoti{' '}
              <a
                href='https://www.vmi.lt/evmi/paramos-skyrimas1'
                target='_blank'
              >
                čia
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
