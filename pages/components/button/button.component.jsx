import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoginButton,
} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
  login: "login",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.login]: LoginButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomeButton = getButton(buttonType);
  return <CustomeButton {...otherProps}>{children}</CustomeButton>;
};

export default Button;