import { Button, Flex, Text } from "@chakra-ui/react";
import {
  IconChecklist,
  IconUser,
  IconBriefcase,
  IconPlayCard,
  IconBuildingStore,
} from "@tabler/icons";
import Link from "next/link";

const Menu = () => {
  const menuContent = [
    {
      name: "pontos",
      path: "/",
      Icon: <IconChecklist />,
    },
    {
      name: "resgate",
      path: "/rescue",
      Icon: <IconBuildingStore />,
    },
    {
      name: "comprar cards",
      path: "/cards",
      Icon: <IconPlayCard />,
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
      p="20px"
      bottom={0}
      gap={4}
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
