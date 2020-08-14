import React, { useState } from 'react'

const data = require('./data.json')

function range (start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + 1)
}

const counts = range(1, 100)

function App () {
  const [countState, setCount] = useState(1)
  const handleChange = (e) => setCount(parseInt(e.target.value))
  const pluralBurger = <>burger{countState > 1 ? 's' : ''}</>
  const options = counts.map(i => <option
    value={i}>{i}</option>)
  return (
    <>
      <header className="my-5">
        <h1 className="text-center">Big Mac Pricing</h1>
        <h6 className="my-4 text-center">My product or service is worth <select onChange={handleChange}
                                                                                value={countState}>{options}</select> lunch {pluralBurger}.
        </h6>
      </header>
      <div className="container my-5">
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th scope="col">Country / Area</th>
            <th scope="col" className="text-center">Currency</th>
            <th scope="col" className="text-right">Local Price</th>
          </tr>
          </thead>
          <tbody>
          {data.map((line) => <tr>
            <th scope="row">{line[0]}</th>
            <td className="font-monospace text-center">{line[1]}</td>
            <td className="text-right font-monospace">{(line[2] * countState).toFixed(2)}</td>
          </tr>)}
          </tbody>
        </table>
      </div>
      <footer className="container">
        <p>You're looking a pricing calculator based on “Burgernomics” or the <a href="https://www.economist.com/news/2020/07/15/the-big-mac-index">Big Mac Index</a>, created by The Economist to illustrate purchasing power differences throughout the world. If you want to price your products or services fairly for people from different economic backgrounds, one way to do it is to price it as a multiple of the cost of a local McDonald's Big Mac burger, which is carefully priced at a level the local market can afford.</p>
        <p>This calculator has no affiliation with The Economist or McDonald's. All trademarks are property of their respective owners. Data sourced from <a href="https://github.com/TheEconomist/big-mac-data">big-mac-data</a> under the terms of <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>. Countries are ranked roughly by their <a href="https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)">GDP</a>.</p>
        <p>Crafted by <a href="http://twitter.com/sudhirj">Sudhir Jonathan</a>. Contact me for feedback, help, or if you want to add your country.</p>
      </footer>
    </>
  )
}

export default App
