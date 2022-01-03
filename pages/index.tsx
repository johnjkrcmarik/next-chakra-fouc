import * as React from "react";

import * as Chakra from "@chakra-ui/react";

export default function HomePage() {
  const { colorMode, toggleColorMode } = Chakra.useColorMode();
  return (
    <Chakra.Stack as="section" p={4} spacing={4}>
      <Chakra.Button onClick={toggleColorMode}>Toggle theme (current is {colorMode})</Chakra.Button>
      <Chakra.Heading>Hello, world!</Chakra.Heading>
      <Chakra.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro ullam, facere accusantium ducimus suscipit
        beatae cupiditate rem omnis sunt culpa esse natus libero consectetur officiis. Neque explicabo totam voluptates?
      </Chakra.Text>
      <Chakra.Divider />
      <Chakra.Link href="https://next-chakra-fouc-with-cache.vercel.app" isExternal>
        ▶ next-chakra-fouc-with-cache.vercel.app
      </Chakra.Link>
      <Chakra.Link href="https://next-chakra-fouc-without-cache.vercel.app" isExternal>
        ▶ next-chakra-fouc-without-cache.vercel.app
      </Chakra.Link>
    </Chakra.Stack>
  );
}
