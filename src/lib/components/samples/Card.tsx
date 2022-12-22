/* eslint-disable jsx-a11y/media-has-caption */
import { Badge, Box, Flex, Img, Text } from "@chakra-ui/react";

interface CardProps {
  imgPath?: string;
  description: string;
  price?: number;
  points?: number;
  widthCard?: string;
  heightImg?: string;
  infos?: string;
  isVideo?: boolean;
  videoPath?: string;
  onClickCard?: () => void;
}

const Card = ({
  imgPath,
  description,
  price,
  points,
  widthCard,
  heightImg,
  infos,
  isVideo,
  videoPath,
  onClickCard,
}: CardProps) => {
  return (
    <Flex
      flexDir="column"
      minW={widthCard}
      mt="20px"
      // eslint-disable-next-line no-return-assign
      onClick={onClickCard}
    >
      {isVideo ? (
        <Box borderRadius="12px 12px 0px 0px">
          <video
            src={videoPath}
            width="100%"
            height="100%"
            controls={false}
            autoPlay
          />
        </Box>
      ) : (
        <Img
          src={imgPath}
          borderRadius="12px 12px 0px 0px"
          height={heightImg}
        />
      )}

      <Flex
        p={4}
        w="100%"
        flexDir="column"
        bg="#27272A"
        borderRadius="0px 0px 12px 12px"
        gap="12px"
      >
        <Text
          fontSize="14px"
          fontWeight={700}
          lineHeight="16px"
          textAlign="start"
        >
          {description}
        </Text>
        {price && (
          <Badge
            padding="4px 8px"
            bg="#3F3F46"
            borderRadius="12px"
            fontWeight={600}
            w="min-content"
            fontSize="12px"
            lineHeight="16px"
            gap={4}
          >
            R$ {price},00
          </Badge>
        )}

        {points && (
          <Badge
            padding="4px 8px"
            bg="#3F3F46"
            borderRadius="12px"
            fontWeight={600}
            w="min-content"
            fontSize="12px"
            lineHeight="16px"
            gap={4}
            textTransform="lowercase"
          >
            {points} pts
          </Badge>
        )}
        {infos && (
          <Badge
            padding="4px 8px"
            bg="#3F3F46"
            borderRadius="12px"
            fontWeight={600}
            w="min-content"
            fontSize="12px"
            lineHeight="16px"
            gap={4}
          >
            {infos}
          </Badge>
        )}
      </Flex>
    </Flex>
  );
};

export default Card;
