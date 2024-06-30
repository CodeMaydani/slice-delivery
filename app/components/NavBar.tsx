import { LogOut, Pizza, Settings, User } from "lucide-react"
import { Button } from "./ui/button"

function NavBar() {
    return (
        <header className="border-b-2 h-16">
            <nav className="container p-2 flex gap-4">
                <Button size={'icon'}>
                    <LogOut />
                </Button>
                <div className="flex items-center gap-2">
                    <Pizza className="text-yellow-500" />
                    <p className="text-3xl tracking-tighter font-bold text-yellow-500">SLICE DELIVERY</p>
                </div>
                <div className="ml-auto">
                    <Button size={"icon"} variant={'ghost'}>
                        <Settings />
                    </Button>
                    <Button size={"icon"} variant={'ghost'}>
                        <User />
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar