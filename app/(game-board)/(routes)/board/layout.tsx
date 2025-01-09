import { Providers } from "@app/(shared)/_components";

import type { JSX } from "react";

interface Props {
  children: React.ReactNode;
}

function BoardLayout({ children }: Props): JSX.Element {
  return <Providers>{children}</Providers>;
}
export default BoardLayout;
