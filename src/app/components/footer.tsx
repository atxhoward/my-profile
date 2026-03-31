export function Footer() {
  return (
    <footer className="mt-auto border-t border-border backdrop-blur-lg">
      <div className="mx-auto flex max-w-content items-center justify-center px-4 py-4 text-xs text-muted sm:px-6 sm:py-6 sm:text-sm md:px-8">
        <a href="mailto:austin@atxhoward.com">austin@atxhoward.dev</a>
        <p className="mx-2">| &copy; {new Date().getFullYear()} Austin Howard</p>
      </div>
    </footer>
  );
}
