import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import ActivityCard from './ActivityCard'

function ActivityContainer() {
    return (
        <div>
            <div className="d-flex text-start flex-column">
                <h1 className="title-text">EVENTS</h1>
            </div>
            <div>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
        </div>
    )
}

export default ActivityContainer;