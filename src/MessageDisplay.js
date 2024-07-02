import React from 'react';
   import { Paper, Typography, Box } from '@neat-io/ui';

   const MessageDisplay = ({ messages }) => {
     return (
       <Paper p={3} mb={3} borderRadius="lg">
         {messages.map((message, index) => (
           <Box key={index} mt={2}>
             <Typography variant="body1" p={2} borderRadius="md" bg={message.sender === 'user' ? 'primary.500' : 'gray.200'} color={message.sender === 'user' ? 'white' : 'black'}>
               {message.text}
             </Typography>
           </Box>
         ))}
       </Paper>
     );
   };

   export default MessageDisplay;
   
