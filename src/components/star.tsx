import * as React from 'react';
import './star.less';

export const Star = ({ selected = false, onClick = ( (f: any) => f) }) =>
    <div className={selected ? 'star selected' : 'star'}
        onClick={onClick}>
    </div>
