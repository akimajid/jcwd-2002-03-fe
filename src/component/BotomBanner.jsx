import React from "react"
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";

const BottomBanner = () => {
    return (
        <>
            <Text paddingX={[3, 5, 5]} fontWeight={700} fontSize={24} color="#213360">Jaminan Untuk Anda</Text>
            <SimpleGrid columns={[1, 3]} spacing={[2, 5, 5]} alignItems="center" justifyContent="center" p={5}>
                <Box height="auto" margin={0}>
                    <Img width="100%" src="/asli.svg" />
                </Box>
                <Box height="auto" margin={0}>
                    <Img width="100%" src="/hemat.svg" />
                </Box>
                <Box height="auto" margin={0}>
                    <Img width="100%" src="/gratisOngkir.svg" />
                </Box>
            </SimpleGrid >
        </>
    )
}

export default BottomBanner