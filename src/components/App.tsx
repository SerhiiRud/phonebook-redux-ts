import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./privateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";
import { Loader } from "./Loader/Loader";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import { Contacts } from "../pages/Contacts/Contacts";
import { AppDispatch } from "../redux/store";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Suspense>
  );
};
