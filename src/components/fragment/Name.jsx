import React from 'react';
import '../assets/scss/Name.scss';

function Name({className,length,name}) {
    return (
        <p className={className}>
                { length > 14 ? name.substring(0,13)+"..." : name}
        </p>
    );
}

export default Name;