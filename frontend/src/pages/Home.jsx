import React from 'react'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
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
