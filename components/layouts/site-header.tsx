import { ModeToggle } from "@/components/mode-toggle"

export const SiteHeader = () => {
  return (
    <header className="sticky top-0">
      <div className="container min-h-16 flex items-center">
        <div className="flex-1" />
        <ModeToggle />
      </div>
    </header>
  )
}
