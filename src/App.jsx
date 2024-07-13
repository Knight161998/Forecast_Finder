// import React, { useState, useEffect } from 'react';
// import TopButtons from './components/TopButtons';
// import Inputs from './components/Inputs';
// import TimeAndLocation from './components/TimeAndLocation';
// import TempAndDetail from './components/TempAndDetail';
// import Forcast from './components/Forcast';
// import getFormattedWeatherData from './services/WeatherService';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function capitalizeFirstLetter(string) {
// 	return string.charAt(0).toUpperCase() + string.slice(1);
// }

// const App = () => {
// 	const [query, setQuery] = useState({ q: 'tokyo' });
// 	const [units, setUnits] = useState('metric');
// 	const [weather, setWeather] = useState(null);

// 	const getWeather = async () => {
// 		const cityName = query.q ? query.q : 'current location';
// 		toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

// 		await getFormattedWeatherData({ ...query, units }).then((data) => {
// 			toast.success(`Fetched weather data for ${data.name}, $(data.country)`);
// 			setWeather(data);
// 			// console.log(data);
// 		});
// 	};

// 	useEffect(() => {
// 		getWeather();
// 	}, [query, units]);

// 	const formatBackground = () => {
// 		if (!weather) return 'from-cyan-600 to-blue-700';
// 		const threshold = units === 'metric' ? 20 : 60;
// 		if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
// 		return 'from-yellow-600 to-orange-700';
// 	};

// 	return (
// 		<div
// 			className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
// 		>
// 			<TopButtons setQuery={setQuery} />
// 			<Inputs setQuery={setQuery} setUnits={setUnits} />
// 			{weather && (
// 				<>
// 					<TimeAndLocation weather={weather} />
// 					<TempAndDetail weather={weather} units={units} />
// 					<Forcast
// 						title="3 hour step forecast"
// 						data={weather.hourly}
// 						units={units}
// 					/>
// 					{console.log('query = ' + query)}
// 					<Forcast title="Daily forecast" data={weather.daily} units={units} />
// 				</>
// 			)}
// 			<ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
// 		</div>
// 	);
// };

// export default App;

import React, { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetail from './components/TempAndDetail';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/WeatherService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
	const [query, setQuery] = useState({ q: 'tokyo' });
	const [units, setUnits] = useState('metric');
	const [weather, setWeather] = useState(null);

	const getWeather = async () => {
		const cityName = query.q ? query.q : 'current location';
		toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

		await getFormattedWeatherData({ ...query, units }).then((data) => {
			toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
			setWeather(data);
			// console.log(data);
		});
	};

	useEffect(() => {
		getWeather();
	}, [query, units]);

	const formatBackground = () => {
		if (!weather) return 'from-cyan-600 to-blue-700';
		const threshold = units === 'metric' ? 20 : 60;
		if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
		return 'from-yellow-600 to-orange-700';
	};

	return (
		<div
			className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
		>
			<TopButtons setQuery={setQuery} />
			<Inputs setQuery={setQuery} setUnits={setUnits} />
			{weather && (
				<>
					<TimeAndLocation weather={weather} />
					<TempAndDetail weather={weather} units={units} />
					<Forcast
						title="3 hour step forecast"
						data={weather.hourly}
						units={units}
					/>
					<Forcast title="Daily forecast" data={weather.daily} units={units} />
				</>
			)}
			<ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
		</div>
	);
};

export default App;
