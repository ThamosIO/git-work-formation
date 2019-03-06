import React, { Component } from 'react'
import Pokemon from '../components/pokemon'
import Search from '../components/search'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.props.getPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
    this.setState({ value: event.currentTarget.value })
  }

  resetSearch(event) {
    this.props.filterPokemons()
    this.setState({ value: '' })
  }

  render() {
    let { displayedPokemons, isFetched, error } = this.props

    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__search">
          <Search
            onChange={this.handleSearch.bind(this)}
            onReset={this.resetSearch.bind(this)}
            value={this.state.value}
          />
        </div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="pokemons">{pokemons}</ul>
        )}
      </div>
    )
  }
}

export default Page
