const ApiDocs = () => {
  const mainStyle = {
    padding: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const preStyle = {
    padding: '24px',
    backgroundColor: 'rgb(236, 236, 236)',
  };

  const h2Style = {
    paddingTop: '24px',
  };

  const spanStyle = {
    color: 'green',
    fontWeight: '700',
  };

  return (
    <main style={mainStyle}>
      <div class='accordion accordion-flush' id='accordionFlushExample'>
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingOne'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              Administratoriaus prisijungimas
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingOne'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
              <h2>Administratoriaus prisijungimas</h2>
              <pre style={preStyle}>
                <h3>POST</h3>
                {`"http://localhost:5000/login"
                                json: 
                                    {
                                        "password": "admin123"
                                    }
                                response: 
                                    on success: "login success", and `}
                <span style={spanStyle}>"token"</span>
                {` in headers,
                                    on failure: "wrong password"`}
              </pre>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingTwo'>
            <button
              className='accordion-button collapsed'
=======
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingTwo'>
            <button
              class='accordion-button collapsed'
>>>>>>> Stashed changes
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo'
              aria-expanded='false'
              aria-controls='flush-collapseTwo'
            >
              Patvirtinti naują instituciją
            </button>
          </h2>
          <div
            id='flush-collapseTwo'
<<<<<<< Updated upstream
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingTwo'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
=======
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingTwo'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
>>>>>>> Stashed changes
              <pre style={preStyle}>
                <h3>PATCH</h3>
                {`"http://localhost:5000/confirm"
                                json: 
                                    {
                                        "_id": "60805a39ae95300e0fcef2ab" // id of institution entry
                                    }
                                headers: 
                                    {
                                        "Content-Type": "application/json",
                                        "token": <token which you received on log in>
                                    }
                                response: 
                                    {
                                        "_id": "60805a39ae95300e0fcef2ab",
                                        "ins_code": 1,
                                        "name": "Kauno Juozo Urbšio progimnazija",
                                        "address": "Kaunas, Partizanų g. 68",
                                        "phone": "+370 37 311088",
                                        "county": "Kauno m. sav.",
                                        "main_type": "Universitetas",
                                        "school_type": "Progimnazija",
                                        "email": "urbsiovm@urbsys.kaunas.lm.lt",
                                        "legal_status": "Viešoji įstaiga",\n\t\t\t\t\t`}
                <span style={spanStyle}>"confirmed": true,</span>
                {`\n\t\t\t\t\t"__v": 0
                                    }`}
              </pre>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingThree'>
            <button
              className='accordion-button collapsed'
=======
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingThree'>
            <button
              class='accordion-button collapsed'
>>>>>>> Stashed changes
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseThree'
              aria-expanded='false'
              aria-controls='flush-collapseThree'
            >
              Gauti paieškos filtrus
            </button>
          </h2>
          <div
            id='flush-collapseThree'
<<<<<<< Updated upstream
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingThree'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
=======
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingThree'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
>>>>>>> Stashed changes
              <pre style={preStyle}>
                <h3>GET</h3>
                {`"http://localhost:5000/getfilters"
                                response: 
                                    {
                                        "school_type": [
                                            "Ikimokyklinio ugdymo mokykla",
                                            "Aukštoji mokykla",
                                            "Bendrojo ugdymo mokykla",
                                            ...],
                                        "county": [
                                            "Klaipėdos m. sav.",
                                            "Klaipėdos r. sav.",
                                            "Kretingos r. sav.",
                                            ...],
                                        "main_type": [
                                            "Ikimokyklinio ugdymo mokykla",
                                            "Kolegija",
                                            "Universitetas",
                                            ...],
                                        "legal_status": [
                                            "Biudžetinė įstaiga",
                                            "Viešoji įstaiga",
                                            "Uždaroji akcinė bendrovė",
                                            ...]
                                    }`}
              </pre>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingFour'>
            <button
              className='accordion-button collapsed'
=======
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingFour'>
            <button
              class='accordion-button collapsed'
>>>>>>> Stashed changes
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseFour'
              aria-expanded='false'
              aria-controls='flush-collapseFour'
            >
<<<<<<< Updated upstream
              Kurti naują instituciją
=======
              Sukurti naują instituciją
>>>>>>> Stashed changes
            </button>
          </h2>
          <div
            id='flush-collapseFour'
<<<<<<< Updated upstream
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingFour'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
=======
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingFour'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
>>>>>>> Stashed changes
              <pre style={preStyle}>
                <h3>POST</h3>
                {`"http://localhost:5000/create"
                                json: 
                                    {
                                        "ins_code": "2",
                                        "name": "Kauno Juozo Urbšio progimnazija",
                                        "address": "Kaunas, Partizanų g. 68",
                                        "phone": "+370 37 311088",
                                        "county": "Kauno m. sav.",
                                        "main_type": "Universitetas",
                                        "school_type": "Progimnazija",
                                        "email": "urbsiovm@urbsys.kaunas.lm.lt",
                                        "legal_status": "Viešoji įstaiga"
                                    }
                                response: 
                                    {
                                        "confirmed": false,
                                        "_id": "60805e1434640a138a7ccfbc",
                                        "ins_code": 2,
                                        "name": "Kauno Juozo Urbšio progimnazija",
                                        "address": "Kaunas, Partizanų g. 68",
                                        "phone": "+370 37 311088",
                                        "county": "Kauno m. sav.",
                                        "main_type": "Universitetas",
                                        "school_type": "Progimnazija",
                                        "email": "urbsiovm@urbsys.kaunas.lm.lt",
                                        "legal_status": "Viešoji įstaiga",
                                        "__v": 0
                                    }`}
              </pre>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingFive'>
            <button
              className='accordion-button collapsed'
=======
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingFive'>
            <button
              class='accordion-button collapsed'
>>>>>>> Stashed changes
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseFive'
              aria-expanded='false'
              aria-controls='flush-collapseFive'
            >
<<<<<<< Updated upstream
              Rasti naują instituciją
=======
              Rasti instituciją
>>>>>>> Stashed changes
            </button>
          </h2>
          <div
            id='flush-collapseFive'
<<<<<<< Updated upstream
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingFive'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
=======
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingFive'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
>>>>>>> Stashed changes
              <pre style={preStyle}>
                <h3>POST</h3>
                {`"http://localhost:5000/find"
                                json (`}
                <span style={spanStyle}>all properties are optional</span>
                {`):
                                    {
                                        "ins_code": 190193030,
                                        "name": "Veiverių",
                                        "school_type": "Bendrojo ugdymo mokykla",
                                        "county": "Prienų r. sav.",
                                        "main_type": "Gimnazija",
                                        "legal_status": "Biudžetinė įstaiga"
                                    }
                                response (`}
                <span style={spanStyle}>array of objects</span>
                {`):
                                    [
                                        {
                                            "confirmed": true,
                                            "_id": "608059a1ae95300e0fcee4ce",
                                            "ins_code": 190193030,
                                            "name": "Prienų r. Veiverių Tomo Žilinsko gimnazija",
                                            "address": "Prienų r. sav. Veiverių mstl. Kauno g. 29",
                                            "phone": "+370 319 61202",
                                            "school_type": "Bendrojo ugdymo mokykla",
                                            "county": "Prienų r. sav.",
                                            "main_type": "Gimnazija",
                                            "email": "mokykla@veiveriai.prienai.lm.lt",
                                            "legal_status": "Biudžetinė įstaiga",
                                            "__v": 0
                                        }
                                    ]`}
              </pre>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingSix'>
            <button
              className='accordion-button collapsed'
=======
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingSix'>
            <button
              class='accordion-button collapsed'
>>>>>>> Stashed changes
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseSix'
              aria-expanded='false'
              aria-controls='flush-collapseSix'
            >
              Gauti nepatvirtintas institucijas
            </button>
          </h2>
          <div
            id='flush-collapseSix'
<<<<<<< Updated upstream
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingSix'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
=======
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingSix'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
>>>>>>> Stashed changes
              <pre style={preStyle}>
                <h3>GET</h3>
                {`"http://localhost:5000/unconfirmed"
                                headers: 
                                {
                                    "Content-Type": "application/json",
                                    "token": <token which you received on log in>
                                }
                                response (`}
                <span style={spanStyle}>array of objects</span>
                {`):
                                [
                                    {
                                      "confirmed": false,
                                      "_id": "6081bebf1ccc2910683de388",
                                      "ins_code": 3213232,
                                      "name": "trololo",
                                      "county": "Kupiškio r. sav.",
                                      "school_type": "Bendrojo ugdymo mokykla",
                                      "main_type": "Pagrindinė mokykla",
                                      "email": "gfdgd@gmail.com",
                                      "legal_status": "Labdaros ir paramos fondas",
                                      "address": "sdfdsfsdfsd",
                                      "phone": "+37065841233",
                                      "__v": 0
                                    }, 
                                ...]`}
              </pre>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingSeven'>
            <button
              className='accordion-button collapsed'
=======
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingSeven'>
            <button
              class='accordion-button collapsed'
>>>>>>> Stashed changes
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseSeven'
              aria-expanded='false'
              aria-controls='flush-collapseSeven'
            >
<<<<<<< Updated upstream
              Naikinti instituciją
=======
              Ištrinti instituciją
>>>>>>> Stashed changes
            </button>
          </h2>
          <div
            id='flush-collapseSeven'
<<<<<<< Updated upstream
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingSeven'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
=======
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingSeven'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
>>>>>>> Stashed changes
              <pre style={preStyle}>
                <h3>POST</h3>
                {`"http://localhost:5000/delete"
                                json: 
                                {
                                    "_id": "6081ad75a9f1855bb597ef41"
                                }
                                headers: 
                                {
                                    "Content-Type": "application/json",
                                    "token": <token which you received on log in>
                                }
                                response: `}
                <span style={spanStyle}>
                  "6081ad75a9f1855bb597ef41 deleted"
                </span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApiDocs;
