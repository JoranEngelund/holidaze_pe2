import { PuffLoader, PulseLoader } from "react-spinners";
import * as s from "./styled";

/**
 * Loader component that displays a loading animation.
 *
 * @returns {JSX.Element} The rendered loader component.
 */
export const Loader = () => {
  return (
    <s.LoadingWrapper>
      <PuffLoader size={100} color="#c82867" />
    </s.LoadingWrapper>
  );
};

/**
 * FormLoader component that displays a loading animation for forms.
 *
 * @returns {JSX.Element} The rendered form loader component.
 */
export const FormLoader = () => {
  return <PulseLoader size={7} color="#36d7b7" />;
};
