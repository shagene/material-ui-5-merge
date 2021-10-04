import * as React from 'react';
import PropTypes, { func } from 'prop-types';
import SelectM from '@mui/material/Select';
// Replaced package imports below with local component
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

function Select(props) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (e) => {
    console.log(e.target.value)
    setPersonName(e.target.value);
  };

  return (
    <FormControl sx={{ width: props.width }}>
      <InputLabel id="demo-multiple-name-label">{props.label}</InputLabel>
      <SelectM
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        onChange={(e) => handleChange(e)}
        value={personName}
        input={<OutlinedInput label="Name" />}
      >
        {props.children}
      </SelectM>
    </FormControl>
  )
}

Select.propTypes = {
  /**
   * Replaced with width prop
   * If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input.
   */
  // autoWidth: PropTypes.bool,

  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component. 
   */
  classes: PropTypes.object,

  /**
   * @uxpinignoreprop
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,

  /**
   * @uxpinignoreprop
   * If true, a value is displayed even if no items are selected.
   * In order to display a meaningful value, a function can be passed to the renderValue prop which returns the value to be displayed when no items are selected.
   * When using this prop, make sure the label doesn't overlap with the empty displayed value. 
   * The label should either be hidden or forced to a shrunk state.
   */
  displayEmpty: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.elementType,

  /**
   * @uxpinignoreprop
   * The id of the wrapper element or the select element when native.
   */
  id: PropTypes.string,

  /**
   * @uxpinignoreprop
   * An Input element; does not have to be a material-ui specific Input.
   */
  inputProps: PropTypes.object,

  /**
   * The Label of the Component.
   * The value is used in InputLabel.
   * OutlineInput provides layout css to the label when a MenuItem is selected.
   */
  label: PropTypes.node,

  /**
   * @uxpinignoreprop
   * The ID of an element that acts as an additional label. The Select will be labelled by the additional label and the selected value.
   */
  labelId: PropTypes.string,

  /**
   * Props applied to the Menu element.
   */
  MenuProps: PropTypes.object,

  /**
   * If true, value must be an array and the menu will support multiple selections.
   * @uxpinignoreprop
   */
  multiple: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * If true, the component uses a native select element.
   */
  native: PropTypes.bool,

  /**
   * Callback fired when a menu item is selected.
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when the component requests to be closed. Use in controlled mode (see open).
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the component requests to be opened. Use in controlled mode (see open).
   */
  onOpen: PropTypes.func,

  /**
   * If true, the component is shown. You can only use it when the native prop is false (default).
   */
  open: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * Render the selected value. You can only use it when the native prop is false (default).
   */
  renderValue: PropTypes.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes.object,

  /**
   * The input value. 
   * Providing an empty string will select no options. Set to an empty string '' if you don't want any of the available options to be selected.
   * If the value is an object it must have reference equality with the option in order to be selected. 
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: PropTypes.string,

  /**
   * The varian to use.
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),

  /**
   * Custom Prop.
   * The width of the Select.
   * Can use px - 50px.
   * Can use % - 100%.
   */
  width: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  sx: PropTypes.object,
}

export default Select;