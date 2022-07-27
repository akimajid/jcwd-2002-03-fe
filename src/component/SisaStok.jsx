import {
  Stack,
  Box,
  Text,
  Flex,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
import { BiTrendingUp } from "react-icons/bi";

const SisaStok = ({ title, amount, value, percentage, notation }) => {
  return (
    <Flex>
      <Stack
        justify="space-between"
        direction="row"
        borderRadius="lg"
        bg="white"
        w="353px"
        h="122px"
        boxShadow="md"
      >
        <Box>
          <Text
            fontWeight="bold"
            fontSize="12px"
            color="#737A8D"
            pt="16px"
            pl="16px"
          >
            {title}
          </Text>
          <Text
            fontWeight="bold"
            color="#213360"
            pt="12px"
            pl="16px"
            fontSize="24px"
          >
            {amount}
          </Text>
          <Stack pt="12px" pl="16px" direction="row">
            <Text fontWeight="bold" color="#21CDC0" fontSize="10px">
              {notation} {value.toLocaleString()}
            </Text>
          </Stack>
        </Box>
        <HStack pr="16px">
          <CircularProgress
            thickness="8px"
            size="70px"
            value={percentage}
            color={notation === "+" ? "#21CDC0" : "#FF6B6B"}
          >
            <CircularProgressLabel fontWeight="bold" fontSize="12px">
              {notation}
              {percentage}%
            </CircularProgressLabel>
          </CircularProgress>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default SisaStok;
