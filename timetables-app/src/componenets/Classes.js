import React from 'react';

export function Classes(props){
    const classes = props.classes;
    const subjects = props.subjects;
    let classElements = [];

    let numberSubject = 0;
    for (let i = 1; i <= classes[classes.length-1].number; i++) {
        if(classes.find(e => e.number === i)){
            let currentSubject = subjects[numberSubject];
            classElements.push(<div key={i}><p>{currentSubject.name} - {currentSubject.teacher.fullName}</p></div>);
            numberSubject++;
        }
        else{
            classElements.push(<div key={i}><p>Нет пары😘</p></div>);
        }
    }

    return (
        <div>
            {classElements}
        </div>
    
    )
}