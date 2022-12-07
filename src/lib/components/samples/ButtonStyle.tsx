import type { ButtonProps } from "@chakra-ui/react";
import { Link, Button } from "@chakra-ui/react";

interface ButtonStyleProps extends ButtonProps {
  hrefName?: string;
  asLink?: boolean;
  width?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonStyle = ({
  children,
  hrefName,
  asLink,
  width,
  onClick,
  type,
}: ButtonStyleProps) => {
  return (
    <Button
      mt={2}
      bg="linear-gradient(127.25deg, #8338EC 0%, #FF6C90 49.17%, #FFBE0B 100%)"
      boxShadow="0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)"
      borderRadius="8px"
      color="black"
      as={asLink ? Link : Button}
      href={hrefName}
      w={width}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ButtonStyle;
