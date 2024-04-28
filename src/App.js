// import logo from './logo.svg';
// import './App.css';

// export const App = () => {
// 	const currentYear = new Date().getFullYear(); /* Декларативный стиль */

// 	return (
// 		/* Императивный + декларативный стиль.
// 	Описываем как должен выглядить элемент страницы с использованием HTML разметки*/
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>{currentYear}</p> /* Декларативный стиль */
// 			</header>
// 		</div>
// 	);
// };

// export default App;

import logo from './logo.svg';
import './App.css';
export const App = () => {
	const currentYear = new Date().getFullYear();
	return /*#__PURE__*/ React.createElement(
		'div',
		{
			className: 'App',
		},
		/*#__PURE__*/ React.createElement(
			'header',
			{
				className: 'App-header',
			},
			/*#__PURE__*/ React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			/*#__PURE__*/ React.createElement(
				'p',
				null,
				'Edit ',
				/*#__PURE__*/ React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			/*#__PURE__*/ React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			/*#__PURE__*/ React.createElement('p', null, currentYear),
		),
	);
};
export default App;
