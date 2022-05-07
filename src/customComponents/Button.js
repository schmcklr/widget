import {useState} from "react";
import {Button, ButtonGroup, ToggleButton} from "react-bootstrap";

let id = 0;


export function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);

  id++;

  return (
    <>
        {this.props.items.map(item => (<ToggleButton
        className="buttons"
        id={id}
        type="checkbox"
        variant="outline-danger"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>))}


    </>
  );


}

