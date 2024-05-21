/* eslint-disable prettier/prettier */
// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function Header({currentPoints, totalPointPossible}) {
    // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  // console.log(currentPoints)
  // console.log(totalPointPossible)
    return (
      <header className="mt-6 p-4">
        <h1 data-testid="title" className="font-base text-lg">
          <span
            data-testid="points"
            className="border border-slate-200 px-4 py-2 font-bold"
          >
            {currentPoints}
          </span>
          poeng (<span data-testid="total">{totalPointPossible}</span>)
        </h1>
      </header>
    )
  }
  