import React = require('react');
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { CrClList } from './components/cr-cls';
import { StoreTest } from './components/store-test';
import { NotFound404 } from './components/not-found-404';
import { PageTemplate } from './components/page-template';
import { StringsListComponent } from './components/strings-list';
import { StringsDetailComponent } from './components/strings-detail';
import { Provider } from 'react-redux';
import { getStore } from './store';

export const RoutedContent = () =>
    <div>
        <PageTemplate>
            <Switch>
                <Route exact path="/" component={CrClList} />
                <Route exact path="/test" component={StoreTest} />
                <Route exact path="/test/list" component={StringsListComponent} />
                <Route exact path="/test/:id" component={StringsDetailComponent} />
                <Route component={NotFound404} />
            </Switch>
        </PageTemplate>
    </div>
