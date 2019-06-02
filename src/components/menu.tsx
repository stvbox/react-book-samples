import * as React from 'react';
import { MenuItem } from './menu-item';
import '../styles/main';


export interface IMenuProps {
    title: String;
}

const MenuCmp = ({ title }: IMenuProps) => <article>
    <header>{title}</header>
    <div className="items-class">
        {[111, 222, 333].map(title => <MenuItem key={title} />)}
    </div>
</article>

export default MenuCmp;
