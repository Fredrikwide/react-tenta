import React from 'react';

const WeatherReport = props => {


	return (

		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center" style={{
				display: 'flex', 
				justifyContent:'center',
				alignItems: 'center',
				flexDirection: 'column'}}>
					<h5 className="card-title">The temperature in {props.city} is {props.temp} &deg; C right now, with a humidity of {props.humidity} %.</h5>
					<h5 style={{textAlign:'center', padding: '1rem'}}>weather right now is: <br />{props.description}</h5>
					<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/>
				</div>
			</div>
		</div> 

		
	)
}

export default WeatherReport;
