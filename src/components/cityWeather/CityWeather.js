import './cityWeather.scss';

import weatherSunnyImage from '../../resources/images/sunny.svg';
import weatherCloudyImage from '../../resources/images/cloudy.svg';
import weatherMushroomRainImage from '../../resources/images/mushroomRain.svg';
import weatherRainyImage from '../../resources/images/rainy.svg';
import weatherSnowImage from '../../resources/images/snow.svg';
import locationIcon from '../../resources/icons/location.svg';
import thermometerIcon from '../../resources/icons/thermometer.svg';
import humidityIcon from '../../resources/icons/humidity.svg';
import arrayIcon from '../../resources/icons/arrow.svg';

const CityWeather = ({weather, resetPage}) => {
	const {name, image, description, temperature, feelsLikeTemperature, humidity} = weather;

	let currentImage
	switch (image) {
		case 'Clouds':
			currentImage = weatherCloudyImage;
			break;
		case 'Rain':
			currentImage = weatherRainyImage;
			break;
		case 'Snow':
			currentImage = weatherSnowImage;
			break;
		case 'Clear':
			currentImage = weatherSunnyImage;
			break;
		default:
			currentImage = weatherCloudyImage;
	}

	return (
		<section className="city-weather">
			<div className="city-weather__container">
				<div className="city-weather__result-block result-block">
					<div className="result-block__heading">Weather App</div>
					<div className="result-block__city">
						<img src={locationIcon} alt=""/>
						{name}</div>
					<div className="result-block__image-weather">
						<img src={currentImage} alt=""/>
					</div>
					<div className="result-block__description">{description}</div>
					<div className="result-block__temperature">{temperature} C</div>
					<div className="result-block__result-data result-data">
						<div className="result-data__data-temperature">
							<div className="result-data__icon-temperature">
								<img src={thermometerIcon} alt=""/>
							</div>
							<div className="result-data__temperature">
								<div className="result-data__temperature-like">{feelsLikeTemperature} C</div>
								<div className="result-data__temperature-description">Ощущается</div>
							</div>
						</div>
						<div className="result-data__data-humidity">
							<div className="result-data__icon-humidity">
								<img src={humidityIcon} alt=""/>
							</div>
							<div className="result-data__humidity">
								<div className="result-data__humidity-data">{humidity}%</div>
								<div className="result-data__humidity-heading">Влажность</div>
							</div>
						</div>
					</div>
					<div className="arrow" onClick={resetPage}>
						<img src={arrayIcon} alt=""/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CityWeather;