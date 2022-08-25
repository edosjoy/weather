import './app.scss';

import CitySearch from "../citySearch/CitySearch";
import CityWeather from "../cityWeather/CityWeather";

export default function App() {
	return (
		<>
			{/*<CitySearch />*/}
			<CityWeather />
		</>
	)
}

/*
* My API Key 0849950658e40b8c7e7d1d38e770e8bf
*
* Call current weather data => https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
*
* Coordinates by location name => https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*
* Russian description => add get-param lang=ru
*
* Figma => https://www.figma.com/file/nB5Xkp4nilYI6h4WteAIM6/Weather-app-design-(Community)?node-id=0%3A1
* */