import React from 'react';
import InformalImage from '../assets/images/AI-learning.jpg';

export default function Informal() {
  return (
    <main className='fade-animation'>
      <section className='bg-light-blue pt-3 pb-3'>
				<div className='container'>
					<h1 className='main-title text-center font-bold'> Neformaliojo švietimo ypatumai</h1>
				</div>
			</section>

      <section className='bg-light-grey'>
        <div className='container'>
            <p className='text-center article-description'>
              Neformalusis ugdymas yra kryptinga veikla, kuria, plėtojant
              žmogaus asmenines, socialines ir edukacines kompetencijas,
              siekiama ugdyti sąmoningą asmenybę, sugebančią atsakingai ir
              kūrybingai spręsti savo problemas ir aktyviai dalyvauti
              visuomenės gyvenime.
            </p>
          </div>
      </section>

      

      <section>
        <div className='container text-center'>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Kuo skiriasi formalusis ir neformalusis švietimai?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                  <p>Į klausimą atsako Monika Simaškaitė – Švietimo ekspertė.</p>

                  <p className='text-muted justify'>
                    Tikriausiai skiriasi laisvumu, kur dėmesys nukreiptas į procesą,
                    o ne į rezultatus. Formalusis daugiau turi apribojimų, nuostatų
                    ir taisyklių. Neformalusis daug laisvesnis, labiau linkęs į
                    asmenybės ugdymą. Šiandien takoskyra yra vis mažėjanti ir daug
                    neformaliojo ugdymo metodų ir patirčių perkeliama į formalųjį
                    ugdymą ir atvirkščiai, vis labiau tampa vadinamu “visuminiu”
                    ugdymu. Tik vis dar Lietuvoje dažnai suvokiamas neformalusis
                    kaip sporto ar muzikos būrelių rėmuose, o tai yra žymiai
                    plačiau.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Kuo skiriasi formalusis ir neformalusis švietimai?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                  <p>Į klausimą atsako Monika Simaškaitė – Švietimo ekspertė.</p>
                  <p className='text-muted justify'>
                    Tikriausiai skiriasi laisvumu, kur dėmesys nukreiptas į procesą,
                    o ne į rezultatus. Formalusis daugiau turi apribojimų, nuostatų
                    ir taisyklių. Neformalusis daug laisvesnis, labiau linkęs į
                    asmenybės ugdymą. Šiandien takoskyra yra vis mažėjanti ir daug
                    neformaliojo ugdymo metodų ir patirčių perkeliama į formalųjį
                    ugdymą ir atvirkščiai, vis labiau tampa vadinamu “visuminiu”
                    ugdymu. Tik vis dar Lietuvoje dažnai suvokiamas neformalusis
                    kaip sporto ar muzikos būrelių rėmuose, o tai yra žymiai
                    plačiau.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Kokia yra Europos Sąjungos senbuvių patirtis neformalaus
                švietimo srityje? Ko Lietuva gali išmokti?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p className='text-muted justify'>
                  Vakarų Europa neformalų ugdymą suvokia kaip vertybių, socialinių
                  kompetencijų, gebėjimų išryškinimą ir ugdymą. Lietuvoje
                  istoriškai susiformavusi pozicija, kad neformalus švietimas tėra
                  tik viena iš laisvalaikio „užmušimo“ formų. Taip pat gajus
                  įsitikinimas, kad neformalus ugdymas yra puiki nusikalstamumo
                  prevencinė priemonė, mažai dėmesio skiriant vertybiniam šios
                  problemos aspektui. Liūdna pripažinti, kad daugelis tėvų vis dar
                  nesuvokia neformalaus ugdymo svarbos jų vaikų gyvenime,
                  interpretuodami neformaliąją veiklą tik kaip vieną iš
                  potencialių galimybių, jeigu lieka laisvo laiko po pamokų ir
                  namų darbų ruošos. Tačiau pastebimi teigiami pokyčiai. Požiūrio
                  kaita į neformalųjį švietimą nuteikia pozityviai.
                </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Kokia yra tiesioginė neformalaus krepšelio nauda?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p className='text-muted justify'>
                    Neformalaus ugdymo krepšelis, visų pirma, – platesnė ir
                    įvairesnė vaikų įtraukties į neformaliąją veiklą galimybė.
                    Valstybės parama minimiems užsiėmimams leis pasiekti kur kas
                    daugiau vaikų nei iki šiol. Visų antra, neformalaus ugdymo
                    krepšelis yra kokybės rodiklis, suteikiantis vaikui laisvę
                    apsispręsti. Mokinys pats galės rinktis kokius gebėjimus nori
                    ugdyti ir kokioje organizacijoje tai geriausia daryti.
                    Pastarieji faktoriai iššauks konkurenciją, o ten, kur yra
                    konkurencija, vienareikšmiškai, atsiras ir kokybė. Neformalus
                    švietimas daro įtaką vaikų pasaulėjautos ir pasaulėžiūros
                    formavimui, padeda lavinti pasauliui atvirą, atsakingą,
                    sąmoningą žmogų, kuris geba tinkamai integruotis postmodernioje
                    kultūroje. Valstybės parama neformaliam ugdymui – investicija į
                    pilietišką, atsakingą ir naujovėms bei inovacijoms atvirą
                    visuomenę.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Kokia yra tiesioginė neformalaus krepšelio nauda?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p className='text-muted justify'>
                    Neformalaus ugdymo krepšelis, visų pirma, – platesnė ir
                    įvairesnė vaikų įtraukties į neformaliąją veiklą galimybė.
                    Valstybės parama minimiems užsiėmimams leis pasiekti kur kas
                    daugiau vaikų nei iki šiol. Visų antra, neformalaus ugdymo
                    krepšelis yra kokybės rodiklis, suteikiantis vaikui laisvę
                    apsispręsti. Mokinys pats galės rinktis kokius gebėjimus nori
                    ugdyti ir kokioje organizacijoje tai geriausia daryti.
                    Pastarieji faktoriai iššauks konkurenciją, o ten, kur yra
                    konkurencija, vienareikšmiškai, atsiras ir kokybė. Neformalus
                    švietimas daro įtaką vaikų pasaulėjautos ir pasaulėžiūros
                    formavimui, padeda lavinti pasauliui atvirą, atsakingą,
                    sąmoningą žmogų, kuris geba tinkamai integruotis postmodernioje
                    kultūroje. Valstybės parama neformaliam ugdymui – investicija į
                    pilietišką, atsakingą ir naujovėms bei inovacijoms atvirą
                    visuomenę.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
