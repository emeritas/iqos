const ApiDocs = () => {

    const mainStyle = {
        padding: '24px',
    }

    const preStyle = {
        padding: '24px',
        backgroundColor: 'rgb(236, 236, 236)'
    }

    const h2Style = {
        paddingTop: '24px'
    }

    const spanStyle = {
        color: 'green',
        fontWeight: '700'
    }
    

    return (
        <main style={mainStyle}>
            <h2 style={h2Style}>Admin login</h2>
            <pre style={preStyle}>
                <h3>POST</h3>
                {`"http://localhost:5000/login"
                json: 
                    {
                        "password": "admin123"
                    }
                response: 
                    on success: "login success", and `}<span style={spanStyle}>"token"</span>{` in headers,
                    on failure: "wrong password"`}
            </pre>
            <h2 style={h2Style}>Confirm new institution</h2>
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
                        "legal_status": "Viešoji įstaiga",\n\t\t\t`}
                        <span style={spanStyle}>"confirmed": true,</span>
                        {`\n\t\t\t"__v": 0
                    }`}
            </pre>
            <h2 style={h2Style}>Get filters for search</h2>
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
                            ...]
                    }`}
            </pre>
            <h2 style={h2Style}>Create new institution</h2>
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
        </main>
    )
}

export default ApiDocs