import * as React from 'react';
import { Component } from 'react';
import { StoreTestList } from './store-test-list';
import { StoreTestForm } from './store-test-form';
import { StringsActions, getStore } from '../store';
import { EventEmitter } from 'events';
import './store-test.less';

const UNMOUNT_EVENT = 'UNMOUNT_EVENT';

interface IStateStoreTest {
    strings: string[];
    str: string;
}

class StoreTest extends Component<any, IStateStoreTest> {
    unmount = new EventEmitter();
    store = getStore();
    unsubscribe: any;

    constructor(props: any) {
        super(props);
        this.state = {
            strings: this.store.getState().strs,
            str: this.store.getState().str,
        };
        this.onClickItem = this.onClickItem.bind(this);
    }

    componentWillMount() {
        this.unsubscribe = this.store.subscribe(() => {
            this.setState({
                strings: this.store.getState().strs,
                str: this.store.getState().str,
            });
        });

        this.unmount.addListener(UNMOUNT_EVENT, () => {
            console.log(`event: ${UNMOUNT_EVENT}`);
            this.unsubscribe();
        });
    }

    componentWillUnmount() {
        this.unmount.emit(UNMOUNT_EVENT);
        this.unmount.removeAllListeners();
    }

    onClickItem(item: any) {
        this.store.dispatch({
            type: StringsActions.Set,
            payload: item.id,
        });
    }

    render() {
        return (
            <div className="store-test">
                <div className="store-list" >
                    <StoreTestList strings={this.state.strings}
                        str={this.state.str}
                        onClick={this.onClickItem} />
                </div>
                <div className="store-form" >
                    <StoreTestForm />
                </div>
            </div>
        );
    }
}

export { StoreTest };
