import React from 'react';
import Axios from 'axios'
import SearchForm from './SearchForm'
import WeatherReport from './WeatherReport'

class SearchCity extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			error: 'Thhis is not the city you are looking for',
			search: '',
			temperature: undefined,
			humidity: undefined,
			city: undefined,
			country: undefined,
			description: undefined,
			icon: undefined		
		}
		
	}

	getData = async () => {
		await Axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`)
		.then(response => {
			const info = response.data
			this.setState({	
				temperature: info.main.temp,
				humidity: info.main.humidity,
				city: info.name,
				country: info.sys.country,
				description: info.weather[0].description,
				icon: info.weather[0].icon
			})
			console.log('this is the data', info)
		}).catch(err => {
			this.setState({error: err})
		})
	}

	searchWeather = (e) => {
		e.preventDefault()
		this.getData()
	}

	handleChange = (e) => {
		this.setState({search: e.target.value})
	}

	render() {

		return (
			<div id="SearchCity" className="mb-5">
				 <SearchForm 
				 city={this.state.search} 
				 onSubmit={this.searchWeather} 
				 handleChange={this.handleChange} />
				 {this.state.city
				 ? 
				 <WeatherReport 
				city={this.state.city}
				country={this.state.country}
				temp={this.state.temperature}
				humidity={this.state.humidity}
				description={this.state.description}
				icon={this.state.icon}
				/> 
				: 
				(<h2 style={{
				 textAlign: 'center',
				 padding: '1rem',
				 marginTop: '1.2rem'}}>Search for a city</h2>)
				}
				
				
			</div>
		)
	}
}

export default SearchCity;
