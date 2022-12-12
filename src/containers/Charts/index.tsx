import React, { FC, ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { TabPanel } from '../../components/TabPanel';
import { selectCurrentMarket } from '../../modules';
import { MarketDepthsComponent, TradingChart } from '../index';

export const Charts: FC = (): ReactElement => {
    const intl = useIntl();
    const currentMarket = useSelector(selectCurrentMarket);
    const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

    const renderTabs = () => [
        {
            content: currentTabIndex === 0 ? <TradingChart hideHeaderContent/> : null,
            label: intl.formatMessage({ id: 'page.body.charts.tabs.chart' }),
        },
        {
            content: currentTabIndex === 1 ? <MarketDepthsComponent /> : null,
            label: intl.formatMessage( { id: 'page.body.charts.tabs.depth' }),
        },
    ];

    return (
        <div className="pg-charts">
            <TabPanel
        
                panels={renderTabs()}
                currentTabIndex={currentTabIndex}
                onCurrentTabChange={setCurrentTabIndex}
            />
        </div>
    );
};
