const WeatherService = () => {

	const _apiKey = '0849950658e40b8c7e7d1d38e770e8bf';
	const _baseUrl = 'https://api.openweathermap.org/data/2.5/weather?lang=ru';

	const request = async (url) => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, status ${response.status}`);
		}
		return await response.json();
	}

	const getCoordinates = async (city) => {
		const data = await request(`${_baseUrl}&q=${city}&appid=${_apiKey}`);
		return data.coord;
	}

	const getWeather = async (city) => {
		const coordinates = await getCoordinates(city);
		return await request(`${_baseUrl}&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${_apiKey}`);
		// console.log(data);
		// return data;
	}

	return {getWeather};
}

export default WeatherService;