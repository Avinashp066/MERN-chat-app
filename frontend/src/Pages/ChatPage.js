import React, { useState } from "react";
import { useChatContext } from "../context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

import { Box, Flex } from "@chakra-ui/react";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = useChatContext();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box w="100%" h="91.5vh" p="10px">
        <Flex justifyContent="space-between">
          {user && <MyChats />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Flex>
      </Box>
    </div>
  );
};

export default ChatPage;
