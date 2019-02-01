import React from 'react';

function House(props)
{
    let content = [];
    for(let key in props.info)
    {
        content.push(props.info[key]);
    }
    return(
        <div>
            {content}
            <button
            onClick={() => props.method(props.info.id)}> delete</button>
        </div>
    );
}

export default House;