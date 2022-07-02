import {ToggleButton} from "react-bootstrap";
import {useState} from "react";

export function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
return (

<ToggleButton
        className="buttons"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
);
}