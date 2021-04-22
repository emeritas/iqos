import React from 'react'

export default function Footer() {
  return (
    <footer className="pt-3 pb-3 text-muted bg-light-grey border-top">
      <div className="container">
        <p className="mb-0 text-center">Visos teisės saugomos © {new Date().getFullYear()} - IQOS</p>
      </div>
    </footer>
  )
}
