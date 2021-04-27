import React from 'react';
import partnerEu from '../assets/images/partner-eu.jpg';
import partnerInvega from '../assets/images/partner-invega.jpg';
import partnerLtBank from '../assets/images/partner-lietuvos-bankas.jpg';
import partnerVersliLt from '../assets/images/partner-versli-lietuva.jpg';

export default function Partners() {
  return (
    <main className='fade-animation'>
<<<<<<< Updated upstream
      <section className='hero bg-light-blue'>
        <div className='text-center'>
          <h1 className='display-5 fw-bold'>Mūsų partneriai</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>
              IQOS tinklas atveria unikalias galimybes akademinei bendruomenei
=======
      <section className='hero'>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold'>Mūsų partneriai</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>
              IQOS tinklas atveria unikalias galimybes akademiniai bendruomenei
>>>>>>> Stashed changes
              kurti vertę visuomenei bei sudaro galimybes vystyti moksliniais
              tyrimais grįstus sprendimus, kuriančius pridėtinę vertę verslo
              įmonėms.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <div className='row minh-50'>
                <img
                  src={partnerEu}
                  style={{ maxWidth: '340px', margin: '20px auto' }}
                  className='mb-3'
                  alt=''
                />
<<<<<<< Updated upstream
                <h2>Europos sąjungos fondas</h2>
=======
                <h2>Europos sajungos fondas</h2>
>>>>>>> Stashed changes
                <p>
                  Europos Sąjungos struktūrinė parama nuosekliai mažina
                  socialinius ir ekonominius skirtumus tarp ES šalių narių ar
                  atskirų regionų. Jos pamatines vertybes galima išreikšti dviem
                  žodžiais – „solidarumas“ ir „sanglauda“. Solidarumas – kadangi
                  paramos tikslas yra padėti palyginti su ES vidurkiu
                  ekonomiškai ir socialiai skurdesniems regionams. Sanglauda –
                  kadangi pajamų bei turtinių skirtumų tarp skurdesnių ir
                  turtingesnių regionų mažinimas yra naudingas visiems. Šiai
                  politikai skiriama daugiau kaip 1/3 ES biudžeto.
                </p>
              </div>
              <div className='row'>
                <img
                  src={partnerVersliLt}
                  style={{ maxWidth: '340px', margin: '20px auto' }}
                  className='img-fluid mb-3'
                  alt=''
                />
                <h2>Versli Lietuva</h2>
                <p>
                  „Versli Lietuva“ – Ūkio ministerijos įsteigta agentūra,
                  skatinanti verslumą, tvarią ir modernią verslo plėtrą,
                  startuolių ekosistemą bei eksportą Lietuvoje. „Versli Lietuva“
                  – tai „vienas langelis” verslui per visą jo raidos ciklą.
                  Agentūra siekia tapti klientų ir partnerių pripažinta
                  profesionaliausia verslą skatinančia organizacija Lietuvoje,
                  kuri padėda konkurencingiems verslams kurtis ir plėstis
                  Lietuvoje, eksportuoti teikiant mokymų, konsultacijų ir verslo
                  partnerių paieškos paslaugas, naudojant efektyvią
                  organizacijos struktūrą ir partnerių tinklą.
                </p>
              </div>
            </div>
            <div className='col-sm'>
              <div className='row'>
                <img
                  src={partnerInvega}
                  style={{ maxWidth: '340px', margin: '20px auto' }}
                  className='img-fluid mb-3'
                  alt=''
                />
                <h2>Projektas „Pradėk Dirbti Sau“</h2>
                <p>
                  Tai įkvepiančios iniciatyvos, sėkmingų verslų istorijos,
                  padedančios įveikti baimes ir leidžiančios iš arčiau
                  susipažinti su pirmaisiais verslo kūrimo žingsniais bei ten
                  laukiančiais iššūkiais, naudingi patarimai, pažintis su
                  patraukliomis verslo skatinimo priemonėmis verslo pradžiai ir
                  plėtrai. Pagrindinis projekto tikslas – padrąsinti ir įkvėpti
                  dirbti sau apie savo verslą dar tik mąstančius bei paskatinti
                  greitesnį augimą jau kuriantiems ir plėtojantiems esamą
                  verslą.
                </p>
              </div>
              <div className='row'>
                <img
                  src={partnerLtBank}
                  style={{ maxWidth: '340px', margin: '20px auto' }}
                  className='img-fluid mb-3'
                  alt=''
                />
                <h2>Lietuvos Bankas</h2>
                <p>
                  Lietuvos bankas yra valstybinė įmonė, kuri prižiūri ir
                  kontroliuoja finansų rinką Lietuvoje. Lietuvos bankas yra
                  Eurosistemos dalis, kartu su Europos Centriniu Banku ir kitų
                  euro zonos šalių centriniais bankais priima sprendimus dėl
                  euro zonos pinigų politikos ir dalyvauja ją įgyvendinant.
                  Esminės institucijos vertybės grindžiamos organizacijos
                  tarnautojų darbu, kuris ne tik padeda kurti naudą visuomenei,
                  bet taip pat prisideda didinant Lietuvos žmonių pasitikėjimą
                  valstybės centriniu banku ir visa šalies finansų sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
