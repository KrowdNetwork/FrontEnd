import { Flex, Text } from "@chakra-ui/react";
import { IconArrowLeft } from "@tabler/icons";

interface HeaderProps {
  title: string;
  points?: string;
  goBack?: () => void;
  hasToBack?: boolean;
}

const Header = ({ title, points, goBack, hasToBack }: HeaderProps) => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="space-between"
      backgroundColor="var(--token-4d0a539f-039a-42a3-b209-f4c32e17640e, #27272a)"
      flex="0 0 auto"
      height="80px"
      overflow="hidden"
      position="sticky"
      top="0px"
      willChange="transform"
      zIndex={1}
      p={4}
    >
      <Flex align="center" gap={2}>
        {hasToBack && <IconArrowLeft onClick={goBack} />}
        <Text fontWeight={700} fontSize="20px" lineHeight="24px">
          {title}
        </Text>
      </Flex>
      {points && (
        <Flex
          align="center"
          background="linear-gradient(127.249deg, rgb(131, 56, 236) 0%, rgb(255, 108, 144) 51.7708%, rgb(255, 190, 11) 100%)"
          borderRadius="100px"
          padding="4px 12px"
          gap={1}
        >
          <Text
            fontWeight={800}
            fontSize="14px"
            lineHeight="20px"
            color="black"
          >
            {points}
          </Text>
          <Text
            fontWeight={400}
            fontSize="12px"
            lineHeight="12px"
            color="black"
          >
            pts
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
