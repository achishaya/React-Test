import React from 'react';
import NameListItem from './NameListItem';

function NameList(){
    return <div>
        <h1>Name List</h1>
        <hr/>
        <ul>
            <NameListItem name = 'Achintha' course = 'React'/>
            <NameListItem name = 'Shayaran' course = 'React'/>
            <NameListItem name = 'Shayaran' course = 'React'/>
            <NameListItem name = 'Shayaran' course = 'React'/>
            <NameListItem name = 'Shayaran' course = 'React'/>
        </ul>
    </div>;
}

export default NameList;