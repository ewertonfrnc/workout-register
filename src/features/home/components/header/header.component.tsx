import { useContext } from "react";
import { UserContext } from "../../../../contexts/user.context";
import { HStack, Avatar, Box, Text } from "native-base";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <HStack space={4} mb={8}>
      <Avatar
        size="lg"
        bg="cyan.500"
        source={{
          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      />

      <Box>
        <Text fontSize="md" color="light.50">
          Olá, {currentUser?.displayName}!
        </Text>
        <Text fontSize="xl" color="light.50" bold>
          Quinta, 21 de agosto
        </Text>
      </Box>
    </HStack>
  );
};

export default Header;
