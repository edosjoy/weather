const WeatherService = () => {

	const _apiKey = '0849950658e40b8c7e7d1d38e770e8bf';
	const _baseUrl = 'https://api.openweathermap.org/data/2.5/weather?lang=ru';

	// Общий метод для запроса
	const request = async (url) => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, status ${response.status}`);
		}
		return await response.json();
	}

	// Метод запроса координат по названию города
	const getCoordinates = async (city) => {
		const data = await request(`${_baseUrl}&q=${city}&appid=${_apiKey}`);
		return data.coord;
	}

	// Метод запроса погоды по названию города
	const getWeatherCity = async (city) => {
		const coordinates = await getCoordinates(city);
		return await request(`${_baseUrl}&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${_apiKey}`);
	}

	// Метод запроса погоды по координатам
	const getWeatherCoord = async (lat, lon) => {
		return await request(`${_baseUrl}&lat=${lat}&lon=${lon}&appid=${_apiKey}`);
	}

	return {getWeatherCity, getWeatherCoord};
}

export default WeatherService;