// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Card from './components/shared/card/Card';
import Get from './components/get/Get';
import SingleCard from './components/shared/singleCard/SingleCard';

const router = createBrowserRouter([
	
	{
		path: "/",
		element: <Get />,
	},
	{
		path: "/card/:id",
		element: <SingleCard />,
	},
]);


function App() {


	return (
			<>
				<RouterProvider router={router} />
			</>
		);
}

export default App;
