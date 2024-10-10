import './style.css'
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

import { useState } from 'react'

export const ZaverecnyBonus4 = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <div className='bonus4'>
      <input type="number" defaultValue="0" value={x} onChange={e => setX(e.target.valueAsNumber)}/> +{' '}
      <input type="number" defaultValue="0" value={y} onChange={e => setY(e.target.valueAsNumber)}/> = <output>{x + y}</output>
    </div>
  )
}
