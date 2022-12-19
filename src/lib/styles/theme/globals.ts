import { type Styles } from "@chakra-ui/theme-tools";

// call mode on the import if you intend to use colorMode from chakra-ui
export const styles: Styles = {
  global: () => ({
    "*, *::before, &::after": {
      wordWrap: "break-word",
    },
    "*::placeholder": {
      color: "white",
    },

    body: {
      backgroundColor: "#18181B",
      height: "100%",
      width: "100%",
    },
  }),
};
