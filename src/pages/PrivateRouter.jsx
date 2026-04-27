import { Outlet, Navigate } from 'react-router-dom';

// component seviyesinde bir yönlendirme/route için Navigate kullanıyoruz.
const PrivateRouter = () => {
  //! Aslinda bu bilgi Global state'den okunacak
//   const isAuthenticated = false;
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;