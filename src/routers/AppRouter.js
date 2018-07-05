import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFound from '../components/NoFound';

const AppRouter = () => (
	<BrowserRouter>
		{/*We are wrapping the Route inside a div so that we acn define multiple routes.*/}
		<div>
			{/* This will make the header component show on all pages because we have not defined any route for it*/}
			<Header/>
			{/* Here we are wrapping inside Switch for conditional based routing.
			 Switch traverses through each of the Routes defined below until it finds a match, and once it does it stops*/}
			<Switch>
				{/* Tells react router that whenever it matches the path="/", then render the ExpenseDashboardPage component.
				 exact by default is false , since set to true will ensure the url path exactly matches the value of path here.*/}
				<Route path="/" component={ExpenseDashboardPage} exact={ true }/>
				<Route path="/create" component={AddExpenseComponent} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				{/* If it does not match the urls defined in route path above it will render the NotFound component*/}
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;