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

	const {getWeatherCity, getWeatherCoord} = WeatherService();

	const getWeatherUserCity = async () => {
		setLoading(true);
		setErrorMessage(false);
		await getWeatherCity(cityName).then(currentData).catch(() => setErrorMessage(true));
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
		setLoading(false);
		updateWeatherState(newData);
	}

	const onInputKeyDown = (event) => {
		if (event.key === 'Enter') {
			setCityName(event.target.value);
			getWeatherUserCity();
		}
	}

	const getPositionBrowser = async () => {
		setLoading(true);
		setErrorMessage(false);

		const success = async (pos) => {
			await getWeatherCoord(pos.coords.latitude, pos.coords.longitude).then(currentData).catch(() => setErrorMessage(true));
		}

		const error = () => {
			setLoading(false);
			setErrorMessage(true)
		}

		navigator.geolocation.getCurrentPosition(success, error);
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
					<input type="text" placeholder="Enter city name" value={cityName} onChange={(event) => setCityName(event.target.value)} onKeyDown={onInputKeyDown} autoFocus/>
					<button onClick={getWeatherUserCity}>
						<img src={magnifier} alt=""/>
					</button>
				</div>
				<div className="city-search__or">or</div>
				<button className="city-search__use-location" onClick={getPositionBrowser}>Use device location</button>
			</div>
		</section>
	)
}

export default CitySearch;