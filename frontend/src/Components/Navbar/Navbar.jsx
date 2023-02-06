import { Box, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box as="nav" bg="gray.800" p={4}>
      <Link href="/" color="white">
        Refresh
      </Link>
      <Link href="/list" color="white" ml={4}>
        List
      </Link>
    </Box>
  );
}

export default Navbar;
