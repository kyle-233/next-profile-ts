import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switch"

export const SiteHeader = () => {
  return (
    <header className="sticky top-0">
      <div className="container min-h-16 flex items-center">
        <div className="flex-1" />
        <div className="flex items-center h-full">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
