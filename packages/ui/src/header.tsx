export interface HeaderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// TODO add eslint and typescript config pkgs to this
export function Header({ children, ...other }: HeaderProps): JSX.Element {
  return (
    <>
      <header className={`border-zinc-800 bg-zinc-900 w-full `}>
        {children}
      </header>
    </>
  );
}
