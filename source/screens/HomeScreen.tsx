import React from 'react';
import {
  Box,
  Button,
  Center,
  Text,
  theme,
  useColorMode,
  useColorModeValue,
  View,
} from 'native-base';

export default function HomeScreen({navigation}: any) {
  const {toggleColorMode} = useColorMode();
  const text = useColorModeValue(' Light', ' Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');

  return (
    <Box width={'100%'} p="4" flex="1" bg={bg} safeArea>
      <Center pt={50}>
        <View m={5}>
          <Text fontSize={15}>
            The active color mode is
            <Text bold fontSize={18}>
              {text}
            </Text>
          </Text>
        </View>
        <Button onPress={toggleColorMode} h={10}>
          Toggle Mode
        </Button>
        <Button marginY={5} onPress={()=>{navigation.push("NativeWindScreen")}}>
            View Native Wind Page
        </Button>
      </Center>
    </Box>
  );
}
