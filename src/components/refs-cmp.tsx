import * as React from 'react';
import { Component, Attributes } from 'react';

export interface IPropsRefsCmp extends Attributes {
    foo: string;
}

export interface IStateRefsCmp extends Attributes {
    fromValue: string;
    toValue: string;
}

export class RefsCmp extends Component<IPropsRefsCmp, IStateRefsCmp> {

    constructor(props: any) {
        super(props);

    }

    onSubmitHandler(e: any) {
        e.preventDefault();
        this.setState({ toValue: (this.refs._from as HTMLInputElement).value })
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmitHandler(e)} >
                <input ref="_to" />
                <button>CLICK</button>
                <input ref="_from" />
            </form>
        );
    }
}
