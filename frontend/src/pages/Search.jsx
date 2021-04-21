import React from 'react'
import SelectComp from '../components/SelectComp'

export default function Search() {

  return (
    <main>
      <SelectComp data={{
        defaultOption: 'Pasirinkite savivaldybe!',
        options: ['gargzdai', 'kaunas']
      }}/>
      <input className='form-control' type="text"/>
    </main>
  )
}
