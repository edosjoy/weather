import { Link } from "react-router-dom";

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

const CityWeather = () => {
	return (
		<section className="city-weather">
			<div className="city-weather__container">
				<div className="city-weather__result-block result-block">
					<div className="result-block__heading">Weather App</div>
					<div className="result-block__city">
						<img src={locationIcon} alt=""/>
						Lagos</div>
					<div className="result-block__image-weather">
						<img src={weatherSunnyImage} alt=""/>
					</div>
					<div className="result-block__description">Shower rain</div>
					<div className="result-block__temperature">31 C</div>
					<div className="result-block__result-data result-data">
						<div className="result-data__data-temperature">
							<div className="result-data__icon-temperature">
								<img src={thermometerIcon} alt=""/>
							</div>
							<div className="result-data__temperature">
								<div className="result-data__temperature-like">23 C</div>
								<div className="result-data__temperature-description">Feels like</div>
							</div>
						</div>
						<div className="result-data__data-humidity">
							<div className="result-data__icon-humidity">
								<img src={humidityIcon} alt=""/>
							</div>
							<div className="result-data__humidity">
								<div className="result-data__humidity-data">93%</div>
								<div className="result-data__humidity-heading">Humidity</div>
							</div>
						</div>
					</div>
					<Link to='/' className="arrow">
						<img src={arrayIcon} alt=""/>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default CityWeather;