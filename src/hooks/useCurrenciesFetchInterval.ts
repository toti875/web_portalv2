import * as React from 'react';
import { useDispatch } from 'react-redux';
import { currenciesFetch } from '../modules';

export const useCurrenciesFetchInterval = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(currenciesFetch());
		const interval = setInterval(() => {
			dispatch(currenciesFetch());
			// every 1 minute
		}, 1 * 60 * 1000);

		return () => clearInterval(interval);
	}, [dispatch]);
};
