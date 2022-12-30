import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { decrementByAmount } from "store/pointsSlice";

interface CheckoutProps {
  width?: string;
  height?: string;
}

const Checkout = ({ width, height }: CheckoutProps) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("Confirmando resgate...");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const productCard = useAppSelector((state) => state.product);

  useEffect(() => {
    setTimeout(() => {
      setMessage("Resgate com sucesso!");
      setShow(true);
    }, 7000);
  }, []);

  const handleCheckout = () => {
    dispatch(decrementByAmount(productCard.value));
    router.push("/store");
  };

  return (
    <Flex
      gap={2}
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image src="/checkout.png" w={width} h={height} />
      <Flex top="55%" zIndex={2} position="absolute" flexDir="column" gap={6}>
        <Text
          fontSize="24px"
          textTransform="uppercase"
          fontWeight={400}
          lineHeight="28.8px"
          fontFamily="Bebas Neue"
          color="#000000"
        >
          {message}
        </Text>
        {show && (
          <Button
            onClick={handleCheckout}
            bg="#27272a"
            fontSize="24px"
            textTransform="uppercase"
            fontWeight={400}
            lineHeight="28.8px"
            fontFamily="Bebas Neue"
          >
            Voltar a Loja
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Checkout;
