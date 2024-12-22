import { Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';

import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import ProductsPage from "./pages/ProductsPage";
import BusinessesPage from "./pages/BusinessesPage"
import WorkersPage from "./pages/WorkersPage"
import NotificationsPage from "./pages/NotificationsPage"
import ProfilePage from "./pages/ProfilePage"
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route path="" element={<HomePage />} />
          <Route path="topics" element={<TopicsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="businesses" element={<BusinessesPage />} />
          <Route path="workers" element={<WorkersPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>




      </Routes>
    </div>
  );
}

export default App;
