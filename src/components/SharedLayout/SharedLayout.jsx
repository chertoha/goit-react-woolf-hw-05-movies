import Header from 'components/Header';

const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default SharedLayout;
