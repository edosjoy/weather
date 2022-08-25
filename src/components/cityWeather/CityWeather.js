import './cityWeather.scss';

import weatherImage from '../../resources/images/sunny.svg'
import locationIcon from '../../resources/icons/location.svg'
import thermometerIcon from '../../resources/icons/thermometer.svg'
import humidityIcon from '../../resources/icons/humidity.svg'

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
						<img src={weatherImage} alt=""/>
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
				</div>
			</div>
		</section>
	)
}

export default CityWeather;