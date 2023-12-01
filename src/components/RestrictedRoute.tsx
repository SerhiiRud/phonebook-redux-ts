import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { IRouteProps } from "../interfaces/Routs.interface";
/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: IRouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
