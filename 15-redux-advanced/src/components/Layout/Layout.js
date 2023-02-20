import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => (
  <Fragment>
    <MainHeader />
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
