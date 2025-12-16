import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import MyWorks from './pages/MyWorks'
import WorkDetail from './pages/WorkDetail'
import MyChecks from './pages/MyChecks'
import CheckDetail from './pages/CheckDetail'
import UploadWork from './pages/UploadWork'

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-works"
          element={
            <ProtectedRoute>
              <MyWorks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/work/:id"
          element={
            <ProtectedRoute>
              <WorkDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-checks"
          element={
            <ProtectedRoute>
              <MyChecks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/check/:id"
          element={
            <ProtectedRoute>
              <CheckDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadWork />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  )
}

export default App
