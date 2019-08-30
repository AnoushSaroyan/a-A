import React from 'react';

const BenchIndexItem = props => {
        const bench = props.bench;
        return <li>
            <span>Descrition: {bench.description}</span>
            <br/>
            <span>Latitude: {bench.lat}</span>
            <br/>
            <span>Longitude: {bench.lng}</span>
        </li>   
};

export default BenchIndexItem;