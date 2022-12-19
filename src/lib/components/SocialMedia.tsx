import { Badge, Flex, Img } from "@chakra-ui/react";

import { socialMedia } from "../mocks/socialMedia";

import CardSwitch from "./samples/CardSwitch";

interface SocialMediaProps {
  showPoint: boolean;
}

export const SocialMedia = ({ showPoint }: SocialMediaProps) => {
  return (
    <Flex align="center" w="100%" flexDir="column" gap={2}>
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
