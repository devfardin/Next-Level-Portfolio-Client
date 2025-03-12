import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <AnimatedCursor
                innerSize={25}
                outerSize={10}
                color='white'
                outerAlpha={10}
                innerScale={0}
                outerStyle={{
                    border: '2px solid #FF8000',
                    background: '#FF6D5A'
                  }}
                  innerStyle={{
                    border: '2px solid #FF8000'
                  }}
                outerScale={2}
                />
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
