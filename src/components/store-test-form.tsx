import * as React from 'react';
import { Component, ChangeEvent } from 'react';
import { applicationStore, StringsActions } from '../store';

const stubFn = (f: any) => f;

interface IPropsStoreTestForm {
}

interface IStateStoreTestForm {
    formData: any;
}

export class StoreTestForm extends Component<IPropsStoreTestForm, IStateStoreTestForm> {
    store = applicationStore;
    constructor(props: any) {
        super(props);

        this.initState();

        this.changeHandle = this.changeHandle.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    initState() {
        this.state = {
            formData: {},
        }
    }

    changeHandle(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        const formData = {
            ...this.state.formData,
            [name]: value
        }

        this.setState({ formData });
    }

    onAdd() {
        this.store.dispatch({
            type: StringsActions.Add,
            payload: this.state.formData,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div>Наименование:</div>
                    <div>
                        <input name="title" onChange={this.changeHandle} />
                    </div>
                </div>
                <div>
                    <button onClick={this.onAdd}>добавить</button>
                </div>
            </div>
        );
    }
}
