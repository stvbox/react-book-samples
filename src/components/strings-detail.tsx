import React = require('react');
import { connect, MapStateToPropsParam, Provider } from 'react-redux';
import { getStore } from '../store';
import _ = require('lodash');

export const StringsDetailView = ({ item }: any) =>
    <div>
        <h1>{item ? item.id : '(none)'}</h1>
        <div>
            {JSON.stringify(item)}
        </div>
    </div>

interface TStateProps {
    item: any;
}
interface TOwnProps {
    match?: any;
}
interface IState {
    strs: string[];
}

const getParseItem = (strings: any[], id: any) => {
    const strItem = strings.find((item) => _.isEqual(item.id, id));
    return strItem || null;
}

const mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, IState> = (state, props) => ({
    item: getParseItem(state.strs, props.match.params.id),
});


export const StringsDetail = connect(mapStateToProps)(StringsDetailView);

export const StringsDetailComponent = (props: any) =>
    <Provider store={getStore()}>
        <StringsDetail {...props} />
    </Provider>
