import { Button, Flex, Text } from "@chakra-ui/react";
import {
  IconBox,
  IconBriefcase,
  IconBuildingStore,
  IconClipboardText,
  IconUser,
} from "@tabler/icons";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  const menuContent = [
    {
      name: "Pontos",
      path: "/points",
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
      as="footer"
      justify="space-evenly"
      align="center"
      padding="0px 12px"
      bottom="0"
      width="100%"
      backgroundColor="var(--token-4d0a539f-039a-42a3-b209-f4c32e17640e, #27272a)"
      flex="0 0 auto"
      height="80px"
      overflow="hidden"
      position="fixed"
      willChange="transform"
      zIndex={1}
      p={4}
    >
      {menuContent.map(({ name, path, Icon }) => {
        return (
          <Button
            key={name}
            onClick={() => router.push(path)}
            bg="transparent"
            p={0}
            m={0}
            opacity={path === router.pathname ? 1 : 0.5}
          >
            <Flex flexDir="column" align="center">
              {Icon}
              <Text
                fontWeight={600}
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
