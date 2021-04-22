import React, { useEffect, useState } from 'react'
import SelectComp from '../components/SelectComp'

export default function NewPartner() {

  const [form, setForm] = useState({
    ins_code: '',
    name: '',
    county: '',
    school_type: '',
    main_type: '',
    email: '',
    legal_status: ''
  })
  
  const [filters, setFilters] = useState('')

  const submitHandle = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(form)
    })
    .then(res => {
      if (!res.status >= 400) {
        setForm({
          ins_code: '',
          name: '',
          county: '',
          school_type: '',
          main_type: '',
          email: '',
          legal_status: ''
        })
        alert('all good')
      } else {
        alert('all bad')
      }
    })
    
  }

  useEffect(() => {
    fetch('http://localhost:5000/getfilters')
    .then(res => res.json())
    .then(data => {
      setFilters(data)
    })
  }, [])

  return (
    <main>
         <section className="hero">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold mb-5">Registruoti savo įmonę</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Užpildykite žemiau esančia formą. Jei duomenys atitiks mūsų standartus įtrauksime jūsų įmonę į mūsų duomenų bazę.</p>
          </div>
          <div className="col-lg-6 mx-auto">
            <form onSubmit={submitHandle}>
              <div className="row g-4">
                <div className="col-12 col-sm-6">
                  <input className='form-control' type="text" placeholder='Įstaigos pavadinimas' onChange={(e) => setForm({...form, name: e.target.value})}/>
                </div>
                <div className="col-12 col-sm-6">
                  <input className='form-control' type="number" placeholder='Valstybinis kodas' onChange={(e) => setForm({...form, ins_code: e.target.value})}/>
                </div>
                <div className="col-12 col-sm-6">
                  <input className='form-control' type="text" placeholder='Elektroninis paštas' onChange={(e) => setForm({...form, email: e.target.value})}/>
                </div>
                <div className="col-12 col-sm-6">
                  <SelectComp data={{
                  defaultOption: 'Savivaldybė',
                  options: filters.county
                  }} action={setForm} type='county'/>
                </div>
                <div className="col-12 col-sm-6">
                  <SelectComp data={{
                  defaultOption: 'Grupė',
                  options: filters.school_type
                  }} action={setForm} type='school_type'/>
                </div>
                <div className="col-12 col-sm-6">
                  <SelectComp data={{
                  defaultOption: 'Pagrindinis tipas',
                  options: filters.main_type
                  }} action={setForm} type='main_type'/>
                </div>
                <div className="col-12 col-sm-6">
                  <SelectComp data={{
                  defaultOption: 'Teisinis statusas',
                  options: filters.legal_status
                  }} action={setForm} type='legal_status'/>
                </div>
                <div className="col-12">
                  <button className='btn btn-primary'>Pateikti užklausą</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
