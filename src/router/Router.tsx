import { Home } from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
