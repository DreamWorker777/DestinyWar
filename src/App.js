import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import './App.scss';

import TopMenu from './components/TopMenu/TopMenu';
import NavBar from './components/NavBar/NavBar';
import FooterComponent from './components/FooterComponent/FooterComponent';

import Home from './views/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Wikipedia from "./views/Wikipedia/Wikipedia";
import MarketPlace from './views/MarketPlace/MarketPlace';

import back from './assets/img/bg.png';

function App() {
	return (
		<BrowserRouter>
			<div className="App" style={{ backgroundImage: `url('${back}')` }}>
				<TopMenu />
				<NavBar />

				<Routes>
					<Route exact path='/' element={<Home/>}/>
					<Route path='/inventory' element={<Inventory/>}/>
					<Route path='/wikipedia' element={<Wikipedia/>}/>
					<Route path='/marketplace' element={<MarketPlace/>}/>
				</Routes>
				
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
