import { DEFAULT_TRADING_VIEW_INTERVAL } from '../../constants';
import { customWidgetOptions, customWidgetParams } from '../../custom/tradingChartConfig';

export const widgetParams = {
	interval: String(DEFAULT_TRADING_VIEW_INTERVAL),
	containerId: 'tv_chart_container',
	...customWidgetParams,
};

export const widgetOptions = (colorTheme?: string) => {
	return {
		allow_symbol_change: true,
		autosize: true,
		calendar: true,
		client_id: 'tradingview.com',
		custom_css_url: '/css/tradingview.css',
		debug: false,
		details: true,
		disabled_features: ['use_localstorage_for_settings', 'header_symbol_search'],
		enable_publishing: true,
		enabled_features: ['show_animated_logo'],
		fullscreen: false,
		height: 1000,
		hide_side_toolbar: false,
		hotlist: true,
		library_path: '/charting_library/',
		popup_height: '50',
		popup_width: '000',
		show_popup_button: true,
		studies_overrides: {
			"relative strength index.rsi.color": "#2196f3",
			"relative strength index.upper band.color": "#2100f5",
			"relative strength index.lower band.color": "#2100f5",

			"relative strength index.upper band.value": 80,
            "relative strength index.lower band.value": 20,

		},
		studies:   {
			id: "RSI@tv-basicstudies",
			inputs: {
			 length: 4
			}
		  },
		timeframe: '2D',
		user_id: 'public_user_id',
		withdateranges: false,

		...customWidgetOptions(colorTheme),
	};
};
