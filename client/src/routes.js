
import { Routes, Route } from 'react-router-dom';

import { Home, NewApplication } from './pages';

export default function AppRoutes() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/new-application" element={<NewApplication />} />
  </Routes>
}