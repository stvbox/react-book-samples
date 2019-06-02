import * as React from 'react';
import { connect, Provider } from 'react-redux';
import './strings-list.less';
import { getStore, StringsActions } from '../store';
import { withRouter } from 'react-router';
import { isEqual } from 'lodash';

interface StringsListState {
    strings: any[];
    curentId: string;
    history: any;
    sort: any;
    foo: any;
    onCheckItem(id: string): any;
}

const StringsListView = ({ strings, onCheckItem, curentId }: StringsListState, context: any) =>
    <div>
        {strings.map(item => (
            <div key={item.id}
                className={isEqual(item.id, curentId) ? 'list-item active' : 'context-block'}
                onClick={onCheckItem(item.id)}>
                {item.id} - {item.title}
            </div>
        ))}
    </div>

export const StringsList = withRouter(
    connect<any, any, any, any>(
        state => ({
            strings: state.strs,
            curentId: state.str,
        }),
        dispatch => ({
            onCheckItem: (id: string) => () => dispatch({
                type: StringsActions.Set,
                payload: { id }
            })
        }))(StringsListView));

export const StringsListComponent = () =>
    <Provider store={getStore()}>
        <StringsList />
    </Provider>
