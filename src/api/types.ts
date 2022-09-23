
declare global {
interface Config {
	api: {
		authzURL: string;
		transactionURL: string;
		switchURL: string;
		downstreamURL: string;
		ieoURL: string;
		infoURL: string;
	};
	minutesUntilAutoLogout?: string;
	rangerReconnectPeriod?: string;
	withCredentials: boolean;
	storage: {
		defaultStorageLimit?: number;
		orderBookSideLimit?: number;
	};
	gaTrackerKey?: string;
	msAlertDisplayTime?: string;
	msPricesUpdates: string;
	incrementalOrderBook: boolean;
	finex: boolean;
	isResizable: boolean;
	isDraggable: boolean;
	languages: string[];
	usernameEnabled: boolean;
	sessionCheckInterval: string;
	balancesFetchInterval: string;
	passwordEntropyStep: number;
	showLanding: boolean;
	sentryEnabled?: boolean;
	kycSteps?: string[];
}
interface Window {
	env: Config;
}
}

export {};