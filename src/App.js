import logo from './logo.svg';
import './App.css';

export const App = () => {
	const currentYear = new Date().getFullYear(); /* Декларативный стиль */

	return (
		/* Императивный + декларативный стиль.
	Описываем как должен выглядить элемент страницы с использованием HTML разметки*/
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{currentYear}</p> /* Декларативный стиль */
			</header>
		</div>
	);
};

export default App;
