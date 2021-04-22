import React from 'react'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Hello from homepage</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="button  btn-lg px-4 me-sm-3">Primary button</button>
              <button type="button" className="button button--primary btn-lg px-4">Secondary</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow">
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

      <section className="bg-light-blue">
        <div className="container">
          <div className="layout-centered-content text-center"> 
            <h2>Using a Shared Computer?</h2> 
            <p> We've saved some of your preferences for the next time you log in, but if you'd like you can clear those now. </p> 
          </div>
        </div>
      </section>
    </main>
  )
}
