import * as React from 'react';

interface IFnCmpParams {
    key: string;
    text: string;
}

export const FnCmp = ({ text }: IFnCmpParams) => {
    return React.createElement('div', null,
        React.createElement('b', null, text)
    );
};
