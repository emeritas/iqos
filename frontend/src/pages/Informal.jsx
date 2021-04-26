import React from 'react';
import InformalImage from '../assets/images/AI-learning.jpg';

export default function Informal() {
  return (
    <main className='fade-animation'>
      <section className='bg-light-grey'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1 className='main-title text-center ml2'>
                Neformaliojo švietimo ypatumai
              </h1>
              <div className='text-center'>
                <img
                  className='img-fluid rounded'
                  src={InformalImage}
                  alt='Dirbtinio intelekto pažanga'
                ></img>
              </div>

              <p className='text-center article-description'>
                {' '}
                Neformalusis ugdymas yra kryptinga veikla, kuria, plėtojant
                žmogaus asmenines, socialines ir edukacines kompetencijas,
                siekiama ugdyti sąmoningą asmenybę, sugebančią atsakingai ir
                kūrybingai spręsti savo problemas ir aktyviai dalyvauti
                visuomenės gyvenime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container text-center'>
          <div className='row'>
            <div className='col'>
              <h3>Kuo skiriasi formalusis ir neformalusis švietimai?</h3>

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
            <div className='col'>
              <h3>
                Kokia yra Europos Sąjungos senbuvių patirtis neformalaus
                švietimo srityje? Ko Lietuva gali išmokti?
              </h3>
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
            <div className='col'>
              <h3>Kokia yra tiesioginė neformalaus krepšelio nauda?</h3>
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
            <div className='col'>
              <h3>NVŠ krepšelis</h3>
              <p className='text-muted justify'>
                Neformaliojo vaikų švietimo lėšos iš Europos Sąjungos finansinės
                paramos, bendrojo finansavimo ir kitų Lietuvos Respublikos
                valstybės biudžeto yra skiriamos savivaldybėms neformaliojo
                vaikų švietimo plėtotei, siekiant didinti vaikų, ugdomų pagal
                NVŠ programas, skaičių. NVŠ finansavimas skiriamas teikėjams,
                atkreditavusiems NVŠ programas savivaldybėje. Teisę pretenduoti
                į NVŠ finansavimą turi vaikas, kuris mokosi pagal pradinio,
                pagrindinio ir vidurinio ugdymo programas. NVŠ lėšomis gali būti
                finansuojama tik viena vaiko pasirinkta NVŠ programa, kuriai NVŠ
                lėšas skiria ta savivaldybė, kurioje vaikas mokosi pagal NVŠ
                programą, nepriklausomai, kurioje savivaldybėje jis gyvena ir
                mokosi pagal bendrojo ugdymo programą.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
