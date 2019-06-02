import { min } from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContainerCmp } from './components/container-cmp';
import { RefsCmp } from './components/refs-cmp';
import { StarsRating } from './components/stars-rating';
import { StoreTest } from './components/store-test';
import { StringsList } from './components/strings-list';
import { getStore } from './store';
import { RoutedContent } from './app-route';
import './styles/main.less';

const minVal = min([2, 3, 4, 5]);
console.log(minVal);

const scene = document.createElement('div');
scene.id = 'react-container';
document.body.appendChild(scene);

var element = React.createElement('div', {
    test: 'test-val',
    key: '123123',
    className: 'menu'
}, [
        'ТЕСТ',
        React.createElement(RoutedContent, { key: '227', store: getStore() }),
        /*React.createElement(StringsList, { key: '226', store: getStore() }),
        React.createElement(StoreTest, { key: '225' }),
        React.createElement(StarsRating, { key: '224', totalStars: 6 }),
        //React.createElement(Star, { key: '223', selected: false, onClick: (e) => console.log(e) }),
        React.createElement(RefsCmp, { key: '222', foo: 'f1oo' }),
        //React.createElement(Star, { key: '221', selected: true, onClick: (e) => console.log(e) }),
        React.createElement(ContainerCmp, { title: '123', items: [111, 222, 333], key: "100500" }),
        //React.createElement(CrClList, { key: 'foooooooo' }),
        //FnCmp({ text: 'FnCmp', key: '123123123' }),
        //React.createElement(MenuCmp, { title: 'Пробный тайтл', key: '33333' }),*/
    ]
);

//const element = React.createElement(ContainerCmp, { title: '123', items: [111, 222, 333] });
ReactDOM.render(element, document.getElementById('react-container'));

//ReactDOM.render(FnCmp({ text: 'FnCmp' }), document.getElementById('react-container'));

console.log(element);
