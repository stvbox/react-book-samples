import * as React from 'react';


export const MenuItem = (props: any) =>
    <div key={props.title} className="menu__item">{props.title}</div>;
