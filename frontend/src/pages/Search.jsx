import React, { useEffect, useState } from 'react';
import SelectComp from '../components/SelectComp';

export default function Search() {
  const [form, setForm] = useState({
    ins_code: '',
    name: '',
    county: '',
    school_type: '',
    main_type: '',
  });
  const [data, setData] = useState('');
  const [filters, setFilters] = useState('');

  const submitHandle = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 20));
      });
  };

  useEffect(() => {
    fetch('http://localhost:5000/getfilters')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilters(data);
      });
  }, []);

  return (
    <main className='fade-animation'>
      <section className='hero'>
        <div className='text-center'>
          <h1 className='display-5 fw-bold mb-5'>
            Ieškokite jus dominančios įstaigos.
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
      <section className='bg-light-blue'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 table-responsive'>
              <table className='table table-striped table-hover'>
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
