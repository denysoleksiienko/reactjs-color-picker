import { Route, Switch } from 'react-router-dom';

import { ROOT, COLORS } from '../constants/pathnames';
import { Main } from './Main';
import { Colors } from './Colors';

const routes = [
  { path: ROOT, component: Main, exact: true },
  { path: COLORS, component: Colors, exact: false },
];

export const Routes = () => {
  return (
    <Switch>
      {routes.map((props) => (
        <Route key={props.path} {...props} />
      ))}
    </Switch>
  );
};
