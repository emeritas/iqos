import React from 'react';

function Institution() {
  return (
    <main>
      <section className='bg-light-grey'>
        <div className='container'>
          <h1 className='main-title text-center'>Institution name</h1>
        </div>
      </section>

      <section>
        <div className='container'>
          <table className='table table-striped'>
            <tbody>
              <tr>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <div className='text-section'>
            <p>
              Aukštoji mokykla, kurios pagrindinė veikla yra universitetinių
              studijų, su studijomis susijusios veiklos, mokslinių tyrimų
              vykdymas ir eksperimentinė (socialinė, kultūrinė) plėtra
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Institution;
