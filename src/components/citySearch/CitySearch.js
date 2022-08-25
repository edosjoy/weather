import { useState } from "react";

import './citySearch.scss';

import magnifier from '../../resources/icons/magnifier.svg'

import WeatherService from "../../services/WeatherService";
import Loading from "../loading/Loading";
import ErrorMessage from "../errorMessage/ErrorMessage";

const CitySearch = ({updateWeatherState}) => {
	const [cityName, setCityName] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const {getWeather} = WeatherService();

	const getWeatherUserCity = async () => {
		setLoading(true);
		setErrorMessage(false);
		await getWeather(cityName).then(currentData).catch(() => setErrorMessage(true));
		setLoading(false);
	}

	const currentData = (data) => {
		const newData = {
			name: data.name,
			image: data.weather[0].main,
			description: data.weather[0].description,
			temperature: (data.main.temp - 273.15).toFixed(),
			feelsLikeTemperature: (data.main.feels_like - 273.15).toFixed(),
			humidity: data.main.humidity,
		}
		updateWeatherState(newData);
	}

	const onInputKeyDown = (event) => {
		if (event.key === 'Enter') {
			setCityName(event.target.value);
			getWeatherUserCity();
		}
	}

	const isLoading = loading ? <Loading /> : null;
	const isError = errorMessage ? <ErrorMessage /> : null;

	return (
		<section className="city-search">
			<div className="city-search__container">
				<h1 className="city-search__heading">Weather App</h1>
				{isLoading}
				{isError}
				<div className="city-search__search-input">
					<input type="text" placeholder="Enter city name" value={cityName} onChange={(event) => setCityName(event.target.value)} onKeyDown={onInputKeyDown}/>
					<button onClick={getWeatherUserCity}>
						<img src={magnifier} alt=""/>
					</button>
				</div>
				<div className="city-search__or">or</div>
				<button className="city-search__use-location">Use device location</button>
			</div>
		</section>
	)
}

export default CitySearch;