import React from 'react';
import SearchCity from './components/SearchCity';

const App = (props) => {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?"> whats the weather like ❔ 🌦</span>
					</h1>
					<SearchCity />	
				</div>
			</div>
		)
	
}

export default App;
