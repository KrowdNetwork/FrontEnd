import { Button, Flex, Text } from "@chakra-ui/react";
import {
  IconClipboardText,
  IconUser,
  IconBriefcase,
  IconBox,
  IconBuildingStore,
} from "@tabler/icons";
import Link from "next/link";

const Menu = () => {
  const menuContent = [
    {
      name: "Pontos",
      path: "/",
      Icon: <IconClipboardText />,
    },
    {
      name: "Loja",
      path: "/store",
      Icon: <IconBuildingStore />,
    },
    {
      name: "Box",
      path: "/box",
      Icon: <IconBox />,
    },
    {
      name: "inventário",
      path: "/inventory",
      Icon: <IconBriefcase />,
    },
    {
      name: "profile",
      path: "/profile",
      Icon: <IconUser />,
    },
  ];

  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      bg="#27272A"
      minH="97px"
      placeContent=" center space-between"
      padding="0px 12px"
      position="fixed"
      bottom="0"
    >
      {menuContent.map(({ name, path, Icon }) => {
        return (
          <Button as={Link} href={path} key={name} bg="transparent" p={0} m={0}>
            <Flex flexDir="column" align="center">
              {Icon}
              <Text
                fontWeight={400}
                fontSize="12px"
                textAlign="center"
                lineHeight="18px"
              >
                {name}
              </Text>
            </Flex>
          </Button>
        );
      })}
    </Flex>
  );
};

export default Menu;
