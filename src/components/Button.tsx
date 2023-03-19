import { MouseEvent } from "react";

interface Props {
  text: string;
  onButtonClick: (e: MouseEvent) => void;
}

const Button = ({ text, onButtonClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onButtonClick}>
      {text}
    </button>
  );
};

export default Button;
