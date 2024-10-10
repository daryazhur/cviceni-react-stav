import './carousel.css';

/*
Zadání 1: Nachystejte si adresy obrázků níže do pole.
Zadání 2: Přidejte komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku.
  Na začátku 0.
Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
Zadání 4: Tlačítky ← a → měňte index.

Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru
  neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud
  v jejich směru už není žádný obrázek.
*/

/*
  Adresy obrázků:
  https://source.unsplash.com/WLUHO9A_xik/880x500
  https://source.unsplash.com/DA1eGglMmlg/880x500
  https://source.unsplash.com/kTxL6le0Wgk/880x500
  https://source.unsplash.com/7go5UASxmDY/880x500
  https://source.unsplash.com/YmATDIFsCmQ/880x500
*/
import { useState } from 'react';

const obrazky = [
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1494783367193-149034c05e8f',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
]

export const Uloha4 = () => {
  const [ poradi, setPoradi ] = useState(0)

  return (
    <div className="carousel">
      <button onClick={() => setPoradi(poradi - 1)} className="carousel__predchozi" aria-label="předchozí" disabled={poradi === 0}>
        ←
      </button>
      <div className="carousel__media">
        <img
          className="carousel__image"
          src={obrazky[poradi]}
          alt=""
        />
      </div>
      <button onClick={() => setPoradi(poradi + 1)} className="carousel__dalsi" aria-label="další" disabled={poradi === obrazky.length - 1}>
        →
      </button>
    </div>
  );
};
