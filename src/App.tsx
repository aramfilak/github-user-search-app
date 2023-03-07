import './App.sass';
import SearchBox from './components/SearchBox';
import Profile from './components/Profile';
import Toolbar from './components/Toolbar';
function App() {
	return (
		<main className='App'>
			<div className='container'>
				<Toolbar />
				<SearchBox />
				<Profile />
			</div>
		</main>
	);
}

export default App;
