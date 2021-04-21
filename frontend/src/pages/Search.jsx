import React from 'react'
import SelectComp from '../components/SelectComp'

export default function Search() {

  return (
      <main>
      <section className="hero">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold mb-5">Ieškokite jus dominančios įstaigos.</h1>
          <div className="col-lg-6 mx-auto">
            
            <form className='' action="">
              <div className="row g-4">
                <div className="col-6">
                  <input className='form-control' type="text" placeholder='Įstaigos pavadinimas'/>
                </div>
                <div className="col-6">
                  <SelectComp data={{
                  defaultOption: 'Pasirinkite savivaldybe!',
                  options: ['gargzdai', 'kaunas']
                  }}/>
                </div>
                <div className="col-6">
                  <input className='form-control' type="text" placeholder='Valstybinis kodas'/>
                </div>
                <div className="col-6">
                  <SelectComp data={{
                  defaultOption: 'Pasirinkite savivaldybe!',
                  options: ['gargzdai', 'kaunas']
                  }}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
