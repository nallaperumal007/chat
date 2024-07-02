import React, { useState } from 'react';
   import { TextField, Button, Flex, Box } from '@neat-io/ui';

   const MessageInput = ({ addUserMessage }) => {
     const [text, setText] = useState('');

     const handleSubmit = (e) => {
       e.preventDefault();
       if (text.trim() !== '') {
         addUserMessage(text);
         setText('');
       }
     };

     return (
       <Box as="form" onSubmit={handleSubmit} mb={3}>
         <Flex>
           <TextField
             type="text"
             value={text}
             onChange={(e) => setText(e.target.value)}
             placeholder="Type a message..."
             flex="1"
             mr={2}
           />
           <Button type="submit" variant="primary">
             Send
           </Button>
         </Flex>
       </Box>
     );
   };

   export default MessageInput;
   