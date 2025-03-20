import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item :string) => void

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0;

  //Hook : a function that allows us to tap into built-in features in react
  /**
   *  StateHook : This component can have data or state that will change over time
   */

  /**
   * Each component has it own state
   * arr[0] variable (selectIndex)
   * arr[1] update function
   */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    /**
     * Empty angle brackets we're telling react to use Fragment
     *{} render everything dynamically
     * to wrap all these children
     * In JSX there is no For loop
     * true && 'data' = data
     */
    <>
      <h1> {heading} </h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

/**
 * Conditional rendering
 * Data via Props : are the inputs to our components
 * Passing Functions via Props
 * State vs Props
 * State : Local variable , Data Managed by a component similar to local variables / Mutable
 * Props : Input passed to a component Similar to function args / Immutable
 * Passing Children
 * Inspecting Components with React Dev Tools : Extension
 * Building a Button Component
 */
