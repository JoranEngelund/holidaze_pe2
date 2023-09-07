import useSetup from "../setup/index.mjs";

/**
 * Description Component
 *
 * This component displays a description retrieved from the setup data.
 * It presents information about a venue
 *
 * @component
 * @example
 * // Example usage of Description component
 * <Description />
 *
 * @returns {JSX.Element} The JSX element representing the Description component.
 */
const Description = () => {
  const { data } = useSetup();

  const { description } = data;
  return (
    <section>
      <p>{description}</p>
      <hr />
    </section>
  );
};

export default Description;
