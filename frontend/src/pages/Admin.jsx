import React, { useEffect, useState } from 'react';
import SelectComp from '../components/SelectComp';

export default function Admin() {
  const [form, setForm] = useState({
    ins_code: '',
    name: '',
    county: '',
    school_type: '',
    main_type: '',
  });
  const [data, setData] = useState('');
  const [filters, setFilters] = useState('');
  const [unconfirmed, setUnconfirmed] = useState('')

  const submitHandle = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      setData(data.slice(0, 20))
    })
  }

  const handleDelete = (id, target) => {
    fetch('http://localhost:5000/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // token: sessionStorage.getItem('token')
        token: 'eyJhbGciOiJIUzI1NiJ9.bnRvdm5iajkweWI2NGldLWJ2aTRieTdtNjRpYls3eTlbaV1d.v58XJ_HCtcbQFz2kiXDWinTTljKks3RK1czNpgwBluE'
      },
      body: JSON.stringify({_id: id})
    })
    .then(res => {
      if (res.status === 200) {
        alert('Įstaiga sekmingai ištrinta.')
        target.target.parentElement.parentNode.style.display = 'none'
      } else {
        alert('Jūs nesate autorizuotas.')
      }
    })
  }

  const handleConfirm = (id, target) => {
    fetch('http://localhost:5000/confirm', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // token: sessionStorage.getItem('token') 
        token: 'eyJhbGciOiJIUzI1NiJ9.bnRvdm5iajkweWI2NGldLWJ2aTRieTdtNjRpYls3eTlbaV1d.v58XJ_HCtcbQFz2kiXDWinTTljKks3RK1czNpgwBluE'
      },
      body: JSON.stringify({_id: id})
    })
    .then(res => {
      if (res.status === 200) {
        alert('Įstaiga sekmingai ptvritinta!')
        target.target.parentElement.parentNode.style.display = 'none'
      } else {
        alert('Jūs nesate autorizuotas.')
      }
    })
  }

  useEffect(() => {
    fetch('http://localhost:5000/getfilters')
      .then((res) => res.json())
      .then((data) => {
        setFilters(data);
      });
    fetch('http://localhost:5000/unconfirmed', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // token: sessionStorage.getItem('token') 
        token: 'eyJhbGciOiJIUzI1NiJ9.bnRvdm5iajkweWI2NGldLWJ2aTRieTdtNjRpYls3eTlbaV1d.v58XJ_HCtcbQFz2kiXDWinTTljKks3RK1czNpgwBluE'
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUnconfirmed(data)
      });
  }, []);

  return (
    <main className='fade-animation'>
      <section className='hero'>
        <div className='px-4 text-center'>
          <h1 className='display-5 fw-bold mb-5'>
            Nauju partnerių užklausos
          </h1>
        </div>
      </section>
      <section className="bg-light-blue">
        <div className="container">
          <div className="row">
            <div className="col-12 table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope='col'>Juridinio asmens kodas</th>
                    <th scope='col'>Pavadinimas</th>
                    <th scope='col'>Buveinė {`(adresas)`}</th>
                    <th scope='col'>Telefonas</th>
                    <th scope='col'>Savivaldybė</th>
                    <th scope='col'>Grupė</th>
                    <th scope='col'>Pagrindinis tipas</th>
                    <th scope='col'>El. paštas</th>
                    <th scope='col'>Teisinė forma</th>
                  </tr>
                </thead>
                <tbody>
                  {unconfirmed
                    ? unconfirmed.map((e) => (
                        <tr>
                          <td>{e.ins_code}</td>
                          <td>{e.name}</td>
                          <td>{e.address}</td>
                          <td>{e.phone}</td>
                          <td>{e.county}</td>
                          <td>{e.school_type}</td>
                          <td>{e.main_type}</td>
                          <td>{e.email}</td>
                          <td>{e.legal_status}</td>
                          <td>
                            <button onClick={(ev) => {
                              handleConfirm(e._id, ev)
                            }}>Patvirtinti</button>
                          </td>
                        </tr>
                      ))
                    : <tr></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='px-4 text-center'>
          <h1 className='display-5 fw-bold mb-5'>
            Ieškokite įstaigų
          </h1>
          <div className='col-lg-6 mx-auto'>
            <form onSubmit={submitHandle}>
              <div className='row g-4'>
                <div className='col-12 col-sm-6'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Įstaigos pavadinimas'
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <input
                    className='form-control'
                    type='number'
                    placeholder='Valstybinis kodas'
                    onChange={(e) =>
                      setForm({ ...form, ins_code: e.target.value })
                    }
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <SelectComp
                    data={{
                      defaultOption: 'Savivaldybė',
                      options: filters.county,
                    }}
                    action={setForm}
                    type='county'
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <SelectComp
                    data={{
                      defaultOption: 'Grupė',
                      options: filters.school_type,
                    }}
                    action={setForm}
                    type='school_type'
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <SelectComp
                    data={{
                      defaultOption: 'Pagrindinis tipas',
                      options: filters.main_type,
                    }}
                    action={setForm}
                    type='main_type'
                  />
                </div>
                <div className='col-12'>
                  <button className='btn btn-primary'>Ieškoti</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-light-blue">
        <div className="container">
          <div className="row">
            <div className="col-12 table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope='col'>Juridinio asmens kodas</th>
                    <th scope='col'>Pavadinimas</th>
                    <th scope='col'>Buveinė {`(adresas)`}</th>
                    <th scope='col'>Telefonas</th>
                    <th scope='col'>Savivaldybė</th>
                    <th scope='col'>Grupė</th>
                    <th scope='col'>Pagrindinis tipas</th>
                    <th scope='col'>El. paštas</th>
                    <th scope='col'>Teisinė forma</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    ? data.map((e) => (
                        <tr>
                          <td>{e.ins_code}</td>
                          <td>{e.name}</td>
                          <td>{e.address}</td>
                          <td>{e.phone}</td>
                          <td>{e.county}</td>
                          <td>{e.school_type}</td>
                          <td>{e.main_type}</td>
                          <td>{e.email}</td>
                          <td>{e.legal_status}</td>
                          <td>
                            <button onClick={(ev) => {
                              handleDelete(e._id, ev)
                            }}>Ištrinti</button>
                          </td>
                        </tr>
                      ))
                    : ''}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
