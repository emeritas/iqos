import React from 'react';
import CareerImg from '../assets/images/career.png';

export default function Career() {
  return (
    <main className='fade-animation career-wrapper'>
      <section>
        <h3 className='career-opp text-center'>Ieškote karjeros galimybių?</h3>
        <p>Šiuo metu laisvos pareigybės:</p>
        <div class='accordion' id='accordionExample'>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingOne'>
              <button
                class='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Stebėsenos ir vertinimo departamento pasiekimų patikrinimo
                Administravimo skyriaus specialisto
              </button>
            </h2>
            <div
              id='collapseOne'
              class='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div class='accordion-body'>
                <h6 className='career-title'>Reikalavimai pretendentui:</h6>
                <ul>
                  <li>turėti aukštąjį universitetinį išsilavinimą;</li>
                  <li>
                    turėti ne mažiau kaip trejų metų darbo patirtį informacinių
                    technologijų srityje; turi atitikti teisės aktuose
                    nustatytus reikalavimus, būtinus suteikiant teisę dirbti ar
                    susipažinti su įslaptinta informacija, žymima slaptumo žyma
                    „Riboto naudojimo“ (reikalavimas taikomas pradėjus eiti
                    pareigas per Lietuvos Respublikos valstybės ir tarnybos
                    paslapčių įstatymo nustatytą terminą);
                  </li>
                  <li>
                    išmanyti Lietuvos Respublikos Konstituciją, Lietuvos
                    Respublikos švietimo įstatymą, kitus šios pareigybės
                    aprašyme įvardytoms funkcijoms vykdyti būtinus Lietuvos
                    Respublikos įstatymus, Lietuvos Respublikos Vyriausybės
                    nutarimus, Europos Sąjungos dokumentus, švietimo ir mokslo
                    ministro įsakymus, kitus teisės aktus;
                  </li>
                  <li>
                    sugebėti savarankiškai rinktis darbo metodus, mokėti
                    savarankiškai planuoti ir organizuoti savo veiklą, ieškoti,
                    analizuoti, sisteminti, apibendrinti teisinę, mokslinę ir
                    kitą informaciją, rengti išvadas bei pasiūlymus, naudotis
                    šiuolaikinėmis informacijos paieškos, perdavimo ir darbo su
                    informacija priemonėmis;
                  </li>
                  <li>
                    gebėti dirbti komandoje, sklandžiai dėstyti mintis raštu ir
                    žodžiu valstybine kalba;
                  </li>
                </ul>
                <h6 className='career-title'>Pagrindinės darbo funkcijos:</h6>
                <ul>
                  <li>
                    sistemingai planuoja savo veiklą, teikia pasiūlymus
                    Pasiekimų patikrinimo administravimo skyriaus (toliau –
                    Skyrius) ir Nacionalinės švietimo agentūros (toliau –
                    Agentūra) metiniam darbo planui ir strateginiam planui
                    parengti;
                  </li>
                  <li>
                    organizuoja valstybinių brandos egzaminų kandidatų darbų
                    vertinimo procesus, konsultuoja vertintojus technologiniais
                    klausimais;
                  </li>
                  <li>
                    koordinuoja pasiekimų patikrinimų užduočių
                    išsiuntimą/atidavimą į savivaldybių administracijas;
                  </li>
                </ul>
                <h6 className='career-title'>Jums siūlome:</h6>
                <ul>
                  <li>neterminuotą darbo sutartį;</li>
                  <li>darbą pilno etatinio vieneto krūviu;</li>
                  <li>darbo užmokestį – BMA koef. 6,5 – 7,1.</li>
                </ul>

                <p>
                  <strong>CV siųsti: </strong>
                  iki 2021 m. balandžio 23 d., el. pašto adresu
                  karjera@karjera.lt
                </p>
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingTwo'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Ugdymo turinio rengimo skyriaus metodininko (muzika)
              </button>
            </h2>
            <div
              id='collapseTwo'
              class='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div class='accordion-body'>
                <h6 className='career-title'>Reikalavimai pretendentui:</h6>
                <ul>
                  <li>
                    turėti ne žemesnį kaip aukštasis universitetinis
                    išsilavinimas iš Ugdymo mokslų ir (ar) iš menų krypčių
                    grupės (muzika);
                  </li>
                  <li>
                    būti susipažinęs su Lietuvos Respublikos įstatymais,
                    Vyriausybės nutarimais, ugdymo turinį reglamentuojančiais
                    teisės aktais ir savo darbe vadovautis Lietuvos Respublikos
                    norminiais teisės aktais, Nacionalinės švietimo agentūros
                    (toliau – NŠA) direktoriaus įsakymais ir NŠA vidaus tvarkos
                    dokumentais, ir šiuo pareigybės aprašymu;
                  </li>
                  <li>
                    mokėti bent vieną Europos Sąjungos darbinę kalbą (anglų,
                    vokiečių, prancūzų);
                  </li>
                  <li>
                    turėti bent 3 metų pedagoginio darbo ir (ar) su bendrojo
                    ugdymo turinio rengimu arba įgyvendinimu nacionaliniu
                    lygmeniu (ugdymo programų rengimo ar siūlymų ugdymo
                    programoms teikimo, ar rekomendacijų, ar metodinės, ar
                    mokymo medžiagos, ar pan. rengimo) patirties;
                  </li>
                  <li>
                    išmanyti meninio ugdymo srities (muzikos) ir pedagogikos
                    naujoves; gebėti analizuoti ir kritiškai vertinti meninio
                    ugdymo srities (muzikos) tyrimų duomenis, teikti
                    apibendrintas išvadas;
                  </li>
                </ul>
                <h6 className='career-title'>Pagrindinės darbo funkcijos:</h6>
                <ul>
                  <li>
                    dalyvauja planuojant ir vykdant Ugdymo turinio rengimo
                    skyriaus (toliau – skyrius) veiklas;
                  </li>
                  <li>
                    teikia informaciją apie savo veiklos rezultatus rengiant
                    skyriaus ataskaitą; analizuoja Lietuvos ir kitų šalių
                    meninio ugdymo (muzikos) bendrąsias programas, didaktikos
                    tendencijas, apibendrintus tyrimų duomenis;
                  </li>
                  <li>
                    organizuoja ir rengia meninio ugdymo (muzikos) bendrąsias
                    programas bei teikia siūlymų dėl jų diegimo ir įgyvendinimo;
                  </li>
                  <li>
                    kaupia ir dalinasi informacija apie pasaulyje diegiamas
                    pažangias meninio ugdymo (muzikos) turinio inovacijas ir jų
                    taikymo praktikas;
                  </li>
                </ul>
                <h6 className='career-title'>Jums siūlome:</h6>
                <ul>
                  <li>neterminuotą darbo sutartį;</li>
                  <li>darbą pilno etatinio vieneto krūviu;</li>
                  <li>darbo užmokestį – BMA koef. 6,5 – 7,1.</li>
                </ul>

                <p>
                  <strong>CV siųsti: </strong>
                  iki 2021 m. balandžio 18 d. el. pašto adresu
                  karjera@karjera.lt
                </p>
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingThree'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Projekto „bendrųjų ugdymo mokytojų bendrųjų ir dalykinių
                kompetencijų tobulinimas“ (nr. 09.4.2-esfa-v-715-02-0001)
                projekto vadovo
              </button>
            </h2>
            <div
              id='collapseThree'
              class='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div class='accordion-body'>
                <h6 className='career-title'>Reikalavimai pretendentui:</h6>
                <ul>
                  <li>
                    turėti aukštąjį universitetinį ar jam prilygintą
                    išsilavinimą;
                  </li>
                  <li>
                    turėti Europos Sąjungos finansuojamų projektų administravimo
                    darbo patirtį;
                  </li>
                  <li>
                    turėti Europos socialinio fondo įgyvendinamų projektų
                    vadybos patirties – vadovauta ne mažiau nei vienam
                    projektui;
                  </li>
                  <li>
                    turėti darbo patirties švietimo vadybos srityje; turėti
                    darbo patirties pedagogų kvalifikacijos tobulinimo srityje;
                  </li>
                  <li>
                    gebėti rinkti, valdyti, kaupti, apdoroti, sisteminti,
                    analizuoti, apibendrinti informaciją ir rengti išvadas;
                  </li>
                </ul>
                <h6 className='career-title'>Pagrindinės darbo funkcijos:</h6>
                <ul>
                  <li>
                    kontroliuoja ir užtikrina projekto „Bendrojo ugdymo mokytojų
                    bendrųjų ir dalykinių kompetencijų tobulinimas“ (Nr.
                    09.4.2-ESFA-V-715-02-0001) (toliau – Projektas) įgyvendinimą
                    pagal patvirtintą veiklų planą ir kiekvienos veiklos
                    pagrindimą dokumentais;
                  </li>
                  <li>
                    organizuoja projekto vykdymą pagal Lietuvos Respublikos
                    teisės aktus bei Europos socialinio fondo administruojamų
                    projektų įgyvendinimą reglamentuojančius dokumentus;
                  </li>
                  <li>
                    laiku ir tinkamai parengia tarpinius ir galutinį mokėjimų
                    prašymus, galutines ir tarpines ataskaitas apie Projekto
                    veiklų vykdymą ir pateikia jas Europos socialinio fondo
                    agentūrai;
                  </li>
                  <li>
                    teikia tvirtinti Agentūros direktoriui Projekto darbuotojų
                    parengtą projekto dokumentaciją: veiklą pagrindžiančius
                    dokumentus, informaciją apie vykdomus pirkimus ir kt.;
                  </li>
                </ul>
                <h6 className='career-title'>Jums siūlome:</h6>
                <ul>
                  <li>terminuotą darbo sutartį iki 2021-11-30;</li>
                  <li>darbą 0,5 etatinio vieneto krūviu;</li>
                  <li>darbo užmokestį – BMA koef. 7,6 už etatinį vienetą.</li>
                </ul>

                <p>
                  <strong>CV siųsti: </strong>
                  iki 2021 m. gegužės 21 d. el. pašto adresu karjera@karjera.lt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img className='rounded career-img' src={CareerImg} alt='karjera' />
      </section>
    </main>
  );
}
