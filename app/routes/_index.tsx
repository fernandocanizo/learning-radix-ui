import type { MetaFunction } from "@remix-run/node";

import * as Popover from '@radix-ui/react-popover';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Popover.Root>
      <Popover.Trigger>More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          Some more info…
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
