import { ComponentType } from "react";
import {
  NavigateFunction,
  Params,
  useLocation,
  useNavigate,
  useParams,
  Location,
  useSearchParams,
} from "react-router-dom";

interface IRouterProps {
  navigate: NavigateFunction;
  params: Params<string>;
  searchParams: {
    [k: string]: string;
  };
  location: Location;
}

export type WithRouterProps<T> = T & IRouterProps;
type OmitRouter<T> = Omit<T, keyof IRouterProps>;

export function withRouter<T>(
  Component: ComponentType<OmitRouter<T> & IRouterProps>
) {
  // eslint-disable-next-line react/display-name
  return (props: OmitRouter<T>) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries(searchParams);
    return (
      <Component
        location={location}
        navigate={navigate}
        params={params}
        searchParams={currentParams}
        {...props}
      />
    );
  };
}