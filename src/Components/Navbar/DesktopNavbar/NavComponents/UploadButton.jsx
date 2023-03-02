import {
    Box,
    Button,
    Flex,
    Image,
    Text,
  } from "@chakra-ui/react";
const UploadButton = ()=>{
    return(<Box>
    <Button bgColor={'rgb(57, 91, 100)'}  _hover={{ bg:"rgb(57, 91, 100)" }} size='xs'>
      <Flex>
        <Image
          pr={"5px"}
          src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
          alt="upload icon"
          loading="eager" marginTop={'-5px'}
        ></Image>
        <Text color={"rgb(165, 201, 202)"} fontSize="14px" fontWeight="semibold">
          Upload
        </Text>
      </Flex>
    </Button>
  </Box>)
}
export default UploadButton;