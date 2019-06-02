import * as React from 'react';
import _ = require('lodash');
import { withRouter, StaticContext, RouteComponentProps } from 'react-router';

const isEqual = (val1: any, val2: any) => {
    return _.isEqual(val1, val2);
}

const goToItemByID = (id: any, history: any) => {
    return () => history.push(`/test/${id}`)
}

export const StoreTestListComponent: any = ({ strings, id, history }: any): any =>
    <div>
        {[...strings.map((item: any) =>
            <div key={item.id}
                className={isEqual(item.id, id) ? 'list-item active' : 'list-item'}
                onClick={goToItemByID(item.id, history)}>{item.id} - {item.title}</div>
        )]}
    </div>

export const StoreTestList = withRouter<any>(StoreTestListComponent);
