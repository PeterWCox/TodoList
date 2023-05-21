import "./button.css";
import "../../css/typography.css";

export interface IButtonProps {
  text: string;
  type: ButtonTheme;
  size: ButtonSize;
  content: ButtonContent;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isFullWidth?: boolean;
  loading?: boolean;
  noPadding?: boolean;
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonContent = "small" | "medium";
export type ButtonTheme =
  | "primary"
  | "secondary"
  | "tertiary"
  | "reversedPrimary";

export const Button = (props: IButtonProps) => {
  const classes: string[] = ["Button"];

  if (props.isFullWidth) {
    classes.push("Button_fullWidth");
  }

  switch (props.size) {
    case "small":
      classes.push("Button_small");
      break;
    case "medium":
      classes.push("Button_medium");
      break;
    case "large":
      classes.push("Button_large");
      break;
    default:
      break;
  }

  switch (props.content) {
    case "small":
      classes.push("Button_content_small");
      break;
    case "medium":
      classes.push("Button_content_medium");
      break;
    default:
      break;
  }

  switch (props.type) {
    case "primary":
      classes.push("Button_primary");
      break;
    case "secondary":
      classes.push("Button_secondary");
      break;
    case "tertiary":
      classes.push("Button_tertiary");
      break;
    case "reversedPrimary":
      classes.push("Button_reversedPrimary");
      break;
    default:
      break;
  }

  if (props.loading) {
    classes.push("ButtonLoading");
  }

  if (props.noPadding) {
    classes.push("ButtonNoPadding");
  }

  return (
    <button
      className={classes.join(" ")}
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span>{props.text}</span>
    </button>
  );
};