import React from 'react';
import { getTimeAgo } from 'utilities/dateUtil';
import { OnlineStatus } from 'model';

import css from './OnlineStatusIndicator.module.css';

interface OnlineStatusIndicatorProps {
    onlineStatus: OnlineStatus;
    lastLogin: string;
}

export const OnlineStatusIndicator: React.FC<OnlineStatusIndicatorProps> = ({
    onlineStatus,
    lastLogin
}) => {
    const timeString = getTimeAgo(lastLogin);

    return (
        <>
            {onlineStatus === OnlineStatus.Online &&
                <div className={css.indicator} />
            }
            {onlineStatus === OnlineStatus.Offline &&
                <div className={`${css.indicator} ${css.offline}`}
                    title={timeString}
                />
            }
        </>
    );
};
