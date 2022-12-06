import { Badge, Flex, Img } from "@chakra-ui/react";

import CardSwitch from "../samples/CardSwitch";

import { socialMedia } from "./mock";

interface SocialMediaProps {
  showPoint: boolean;
}

export const SocialMedia = ({ showPoint }: SocialMediaProps) => {
  return (
    <Flex align="center" w="100%" flexDir="column" gap={4}>
      {socialMedia.map(({ img, points }) => {
        return (
          <CardSwitch key={img}>
            <Flex align="center" gap={2}>
              <Img src={img} />
              {showPoint && (
                <Badge variant="outline" colorScheme="yellow">
                  + {points}
                </Badge>
              )}
            </Flex>
          </CardSwitch>
        );
      })}
    </Flex>
  );
};
