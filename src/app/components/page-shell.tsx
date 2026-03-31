import { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-content flex-1 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-14">
      <div className="w-full">{children}</div>
    </main>
  );
}
