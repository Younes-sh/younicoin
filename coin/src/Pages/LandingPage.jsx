import React from  'react';
import NavbarLanding from '../Components/NavLanding'
const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <NavbarLanding />
                <div className='containerLandingPage'>
                    <div>
                        <div className='section1'>
                            <h1>Section 1</h1>
                        </div>
                    </div>
                    {/* -------------------- section 2 */}
                    <div>
                        <div className='section2'>
                            <h1>Section 2</h1>
                        </div>
                    </div>
                    {/* -------------------- section 3 */}
                    <div>
                        <div className='section3'>
                            <h1>Section 3</h1>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default LandingPage