import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MessageProvider } from 'entities/message';
import { ChatProvider } from 'entities/chat';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from 'pages/login/ui/LoginPage';
import { MainPage } from 'pages/main';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ChatProvider>
                <MessageProvider>
                  <MainPage />
                </MessageProvider>
              </ChatProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ChatProvider>
                <MessageProvider>
                  <MainPage />
                </MessageProvider>
              </ChatProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};