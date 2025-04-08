// "use client";

import "./global.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  console.log({...other}, 'othr')
  return (
    <>
    <button type="button" {...other}>
      {children}
    </button>
       
      </>
  );
}

Button.displayName = "Button";
Button.className = "flex bg-indigo-600 text-white p-4";
