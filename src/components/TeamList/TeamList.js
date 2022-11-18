import React from 'react';
import './TeamList.css';

function TeamList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TeamList};