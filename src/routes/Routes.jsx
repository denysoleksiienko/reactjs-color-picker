import { Route, Switch } from 'react-router-dom';

import { ROOT, COLORS } from '../constants/pathnames';
import { Main } from './Main';

const routes = [{ path: ROOT, component: Main, exact: true }];

export const Routes = () => {
  return (
    <Switch>
      {routes.map((props) => (
        <Route key={props.path} {...props} />
      ))}
    </Switch>
  );
};
