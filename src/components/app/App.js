import { useState } from "react";

import './app.scss';

import CitySearch from "../citySearch/CitySearch";
import CityWeather from "../cityWeather/CityWeather";

export default function App() {
	const [weather, setWeather] = useState({});
	const [page, setPage] = useState('citySearch');

	// Обновление данных о погоде
	const updateWeatherState = (data) => {
		setWeather(data);
		setPage('cityWeather');
	}

	// Сбрасываем страницу на дефолтную для возврата к поиску
	const resetPage = () => {
		setPage('citySearch');
	}

	const currentPage = page === 'citySearch' ? <CitySearch updateWeatherState={updateWeatherState}/> : <CityWeather weather={weather} resetPage={resetPage}/>;

	return (
		<>
			{ currentPage }
		</>
	)
}