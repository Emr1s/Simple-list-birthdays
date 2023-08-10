import React, { useState } from 'react'
import { data } from '../../data/data';
import './Birthday.scss'
import Person from '../Person/Person';

const Birthday = () => {
    const [people, setPeople] = useState(data)

    return (
        <div className='birthday'>
            <div className="list">
                <h2>{people.length} Birthdays today</h2>
                <Person people={people}/>
                <button onClick={() => setPeople([])}>Clear All</button>
            </div>

        </div>
    )
}

export default Birthday