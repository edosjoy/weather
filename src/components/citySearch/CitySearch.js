import './citySearch.scss';
import '../loading/loading.scss'

import magnifier from '../../resources/icons/magnifier.svg'

import Loading from "../loading/Loading";
import ErrorMessage from "../errorMessage/ErrorMessage";

const CitySearch = () => {
	return (
		<section className="city-search">
			<div className="city-search__container">
				<h1 className="city-search__heading">Weather App</h1>
				{/*<Loading />*/}
				{/*<ErrorMessage />*/}
				<div className="city-search__search-input">
					<input type="text" placeholder="Enter city name"/>
					<button>
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