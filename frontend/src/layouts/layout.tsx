import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react'


type Props = {
    children: React.ReactNode;
    showHero: boolean;
}

const Layout = ({ children, showHero = false }: Props) => {
    return (
        <>

            <div className=' flex flex-col min-h-screen'>

                <Navbar />
                {showHero && <Hero />}
                <main className='container flex-1 mx-auto p-4 md:p-10'>
                    {
                        children
                    }
                </main>

                <Footer />


            </div>

        </>
    )
}

export default Layout