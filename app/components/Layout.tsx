import { PropsWithChildren } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps extends PropsWithChildren {

}
function Layout({ children }: LayoutProps) {
    return (
        <div className='h-screen flex flex-col'>
            <NavBar />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout