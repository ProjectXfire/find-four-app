import Providers from "@app/(shared)/_components/providers/providers";

interface Props {
  children: React.ReactNode;
}

function BoardLayout({ children }: Props): React.ReactElement {
  return <Providers>{children}</Providers>;
}
export default BoardLayout;
