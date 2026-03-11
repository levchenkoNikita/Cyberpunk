import Logo from '@components/ui/logo.tsx'
import SocialNetworks from '@header/social-networks.tsx'

function Header() {
    return (
        <section className='w-screen fixed z-100'>
            <div
                className='
                flex flex-col md:flex-row items-center
                justify-between gap-3 md:gap-5 
                container mx-auto top-0 left-0
            '
            >
                <Logo />
                <SocialNetworks />
            </div>
        </section>
    )
}

export default Header;