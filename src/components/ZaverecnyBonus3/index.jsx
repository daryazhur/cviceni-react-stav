import { useCasVSekundach } from './hodiny'
import React from 'react'

/*
Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas
  ve formátu 7:49:05.

Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je
  0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.
*/

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach()

  const formatujCas = (cas) => {
    const hodiny = Math.floor(cas / 3600)
    const minuty = Math.floor((cas % 3600) / 60)
    const sekundy = cas % 60
    return `${hodiny}:${String(minuty).padStart(2, "0")}:${String(sekundy).padStart(2, "0")}`
  }

  return (
    <>
      Čas právě teď: <b>{formatujCas(casVSekundach)}</b>
    </>
  )
}
