import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Roteador } from "./roteador/roteador";
import "../styles.css";

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path={'/list/:controller/:page'} render={() => <Roteador list/>}/>
					<Route path={'/detail/:controller/:id'} render={() => <Roteador/>}/>
				</Switch>
			</BrowserRouter>
		</>
	)
};
