import {DropdownAlertType} from 'react-native-dropdownalert';

interface DropdownType {
  alertWithType: (
    type: DropdownAlertType,
    title: string,
    message?: string,
  ) => void;
}

let _dropDown: DropdownType;

const setDropDown = (dropDown: DropdownType) => {
  _dropDown = dropDown;
};

const showDropDownAlert = (
  type: DropdownAlertType,
  title: string,
  message?: string,
) => {
  _dropDown.alertWithType(type, title, message);
};

export default {
  setDropDown,
  showDropDownAlert,
};
