import type { MetaFunction } from "@remix-run/node";

import * as Popover from "@radix-ui/react-popover";
// import { Flex, Text, Button } from "@radix-ui/themes";
import { Flex, Text, Button } from "@itsmapleleaf/radix-themes";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Radix UI" },
    { name: "description", content: "Pet project to try some Radix UI features" },
  ];
};

export default function Index() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>

      <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </Flex>
  );
}
