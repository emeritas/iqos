import React, { useEffect, useState } from 'react';
import SelectComp from '../components/SelectComp';
import Toast from '../components/Toast';

export default function NewPartner() {
  const [form, setForm] = useState({
    ins_code: '',
    name: '',
    county: '',
    school_type: '',
    main_type: '',
    email: '',
    phone: '',
    address: '',
    legal_status: '',
  });

  const [filters, setFilters] = useState('');

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [toast, setToast] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.status === 200) {
        setForm({
          ins_code: '',
          name: '',
          county: '',
          school_type: '',
          main_type: '',
          email: '',
          phone: '',
          address: '',
          legal_status: '',
        });
        setMessage('Užklausa pateika sėkmingai');
        setSuccess(true);
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 5000);
      } else {
        setMessage('Kažkas blogai suvesta :)');
        setSuccess(false);
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 5000);
      }
    });
  };

  useEffect(() => {
    fetch('http://localhost:5000/getfilters')
      .then((res) => res.json())
      .then((data) => {
        setFilters(data);
      });
  }, []);

  return (
    <main className='fade-animation'>
      <section className='hero'>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold mb-5'>Registruoti savo įmonę</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>
              Užpildykite žemiau pateiktą formą. Jei duomenys atitiks mūsų
              reikalavimus, įtrauksime jūsų įmonę į mūsų duomenų bazę.
            </p>
          </div>
          <div className='col-lg-6 mx-auto'>
            <form onSubmit={submitHandle}>
              <div className='row g-4'>
                <div className='col-12 col-sm-6'>
                  <input
                    className='form-control'
                    value={form.name}
                    type='text'
                    placeholder='Įstaigos pavadinimas'
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <input
                    className='form-control'
                    value={form.ins_code}
                    type='number'
                    placeholder='Valstybinis kodas'
                    onChange={(e) =>
                      setForm({ ...form, ins_code: e.target.value })
                    }
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <input
                    className='form-control'
                    value={form.address}
                    type='text'
                    placeholder='Įmonės adresas'
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <input
                    className='form-control'
                    value={form.phone}
                    type='phone'
                    placeholder='Telefono numeris'
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <input
                    className='form-control'
                    value={form.email}
                    type='text'
                    placeholder='Elektroninis paštas'
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <SelectComp
                    data={{
                      defaultOption: 'Savivaldybė',
                      options: filters.county,
                    }}
                    value={form.county}
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
                    value={form.school_type}
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
                    value={form.main_type}
                    action={setForm}
                    type='main_type'
                  />
                </div>
                <div className='col-12 col-sm-6'>
                  <SelectComp
                    data={{
                      defaultOption: 'Teisinis statusas',
                      options: filters.legal_status,
                    }}
                    value={form.legal_status}
                    action={setForm}
                    type='legal_status'
                  />
                </div>
                <div className='col-12'>
                  <button className='button button--primary'>Pateikti užklausą</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {toast && <Toast message={message} success={success} />}
    </main>
  );
}
