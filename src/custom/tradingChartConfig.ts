/* eslint-disable */
import { ThemeName } from '../charting_library/charting_library.min';
import { colors } from '../constants';
import { convertRgbToHex, getStylesValueByKey } from '../helpers';

export const customWidgetParams = {

	studies_overrides: {
		
		"relative strength index.upper band.color": "var(--rgb-asks)",
		"relative strength index.lower band.color": "var(--rgb-asks)",

		"relative strength index.upper band.value": 80,
		"relative strength index.lower band.value": 20,

	},
	studies:   {
		id: "RSI@tv-basicstudies",
		inputs: {
		 length: 4
		}
	  },

};

export const customWidgetOptions = (colorTheme?: string) => {
	if (colorTheme === 'basic') {
		return {
			toolbar_bg: colors.basic.chart.primary,
			loading_screen: {
				backgroundColor: colors.basic.chart.primary,
			},
			overrides: {
				['symbolWatermarkProperties.color']: colors.basic.chart.primary,
				['volumePaneSize']: 'iny',
				['mainSeriesProperties.candleStyle.upColor']: colors.basic.chart.up,
				['mainSeriesProperties.candleStyle.downColor']: colors.basic.chart.down,
				['mainSeriesProperties.candleStyle.borderUpColor']: colors.basic.chart.up,
				['mainSeriesProperties.candleStyle.borderDownColor']: colors.basic.chart.down,
				['mainSeriesProperties.candleStyle.wickUpColor']: colors.basic.chart.up,
				['mainSeriesProperties.candleStyle.wickDownColor']: colors.basic.chart.down,
				['paneProperties.background']: colors.light.chart.primary,
				['paneProperties.vertGridProperties.color']: colors.light.chart.primary,
				['paneProperties.vertGridProperties.style']: 1,
				['paneProperties.horzGridProperties.color']: colors.light.chart.primary,
				['paneProperties.horzGridProperties.style']: 1,
				['paneProperties.crossHairProperties.color']: colors.light.chart.primary,
				['paneProperties.crossHairProperties.width']: 1,
				['paneProperties.crossHairProperties.style']: 1,
				['scalesProperties.backgroundColor']: colors.light.chart.primary,
			},
			theme: 'Light' as ThemeName,
		};
	}

	const primaryColor = convertRgbToHex(getStylesValueByKey(colors.basic.chart.primary));
	const upColor = convertRgbToHex(getStylesValueByKey(colors.basic.chart.up));
	const downColor = convertRgbToHex(getStylesValueByKey(colors.basic.chart.down));

	return {
		toolbar_bg: primaryColor,
		loading_screen: {
			backgroundColor: primaryColor,
		},
		overrides: {
			['symbolWatermarkProperties.color']: primaryColor,
			['volumePaneSize']: 'iny',
			['mainSeriesProperties.candleStyle.upColor']: upColor,
			['mainSeriesProperties.candleStyle.downColor']: downColor,
			['mainSeriesProperties.candleStyle.borderUpColor']: upColor,
			['mainSeriesProperties.candleStyle.borderDownColor']: downColor,
			['mainSeriesProperties.candleStyle.wickUpColor']: upColor,
			['mainSeriesProperties.candleStyle.wickDownColor']: downColor,
			['paneProperties.background']: primaryColor,
			['paneProperties.vertGridProperties.color']: primaryColor,
			['paneProperties.vertGridProperties.style']: 1,
			['paneProperties.horzGridProperties.color']: primaryColor,
			['paneProperties.horzGridProperties.style']: 1,
			['paneProperties.crossHairProperties.color']: primaryColor,
			['paneProperties.crossHairProperties.width']: 1,
			['paneProperties.crossHairProperties.style']: 1,
			['scalesProperties.backgroundColor']: primaryColor,
		},
		studies_overrides: {
			['volume.volume.color.0']: downColor,
			['volume.volume.color.1']: upColor,
			['relative strength index.rsi.color']: 'upColor',

		},
		theme: 'Dark' as ThemeName,
	};
};
