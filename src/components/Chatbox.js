import React from 'react';
import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";
// import { contains } from '@chakra-ui/utils';

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
const { selectedChat } = ChatState();

  return (    
      <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
        alignItems="center"
        flexDir="column"
        p={3}
        bg="white"
        w={{ base: "100%", md: "72%" }}
        borderRadius="lg"
        borderWidth="1px"
        style={{float: "right", position: "relative", top:-280, maxHeight:400, overflow:'auto'}}
      >
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
  );
};

export default Chatbox;
