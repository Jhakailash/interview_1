import React from 'react';
import { Stack,Alert,AlertIcon } from "@chakra-ui/react";


const FormSuccessMessage = () => {
  return (
    <Stack spacing={3}>
    
        <Alert status='success'>
            <AlertIcon />
            Notes added successfully!
        </Alert>
    </Stack>
  )
}

export default FormSuccessMessage
