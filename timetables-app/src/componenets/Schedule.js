import React from 'react';

export function Schedule(props){
    let lessonsElements;
    const lessons = props.lessons;

    if(lessons !== undefined){
        lessonsElements = lessons.map((step,move) => {
            return (
                <div key={move}>
                    <p>{step.start} - {step.end}</p>
                </div>
            )
        });
    }

    return(
        <div>
            {lessonsElements}
        </div>
    )
}