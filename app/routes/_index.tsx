import mainStyles from "~/main.css";

import type { MetaFunction, LinksFunction } from "@remix-run/node";

import * as Popover from '@radix-ui/react-popover';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: mainStyles },
];

export default function Index() {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Some more info…
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
