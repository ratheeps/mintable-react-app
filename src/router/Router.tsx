import { Home } from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from 'components';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
