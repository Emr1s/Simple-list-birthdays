import React from 'react'
import './Person.scss'

const Person = ({ people }) => {
    return (
        <>
            {people.map((person) => (
                <div className="person" key={person.id}>
                    <img src={person.avatar} alt="" />
                    <div className="info">
                        <span className='name'>{person.name}</span>
                        <span className='years'>{person.years}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Person