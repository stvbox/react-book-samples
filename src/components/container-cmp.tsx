import * as React from 'react';
import { MenuItem } from './menu-item';
import '../styles/main.css';

export const ContainerCmp = (props: any) =>
    <div className="menu">
        {props.items.map((title: any) =>
            <MenuItem title={title} key={title.toString()} />
        )}
    </div>
