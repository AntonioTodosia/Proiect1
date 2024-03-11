'use client'
import 'bootstrap/dist/css/bootstrap.css'
import Section1 from './sectiunea1'
import Section2 from './sectiunea2'
import Section3 from './sectiunea3'


function Navbar(){
    return(
        <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

            
            <Section1/>
            <Section2/>
            <Section3/>
        </div>

    )
}

export default Navbar