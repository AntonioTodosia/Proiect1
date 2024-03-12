'use client'

function Section1(){
    return(
        <div id="section1">
                <div className="bg-image">
                    <div>
                        <nav className="navbar navbar-expand-sm py-5">
                            <ul className="navbar-nav mx-auto">
                                <li className='pading'>
                                    <a className="text-center" href="#section1">Mănăstirea Nașterea Sfântului Ioan Botezatorul</a>
                                </li>
                                <li className='pading'>
                                    <a href="#section2" className="center">Despre Mănăstire</a>
                                </li>
                                <li className='pading'>
                                    <a href="#section4" className="center">Galerie Foto</a>
                                </li>
                                <li className='pading'>
                                    <a href="#section3" className="center">Locație și date de contact</a>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className="dropdown py-3 px-3">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Meniu
                            </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#section1">Manăstirea Nașterea Sfântului Ioan Botezatorul</a></li>
                                    <li><a className="dropdown-item" href="#section2">Despre Mănăstire</a></li>
                                    <li><a className="dropdown-item" href="#section4">Foto</a></li>
                                    <li><a className="dropdown-item" href="#section3">Locație și date de contact</a></li>
                                </ul>
                        </div>
                        
                        

                    </div>
                </div>
        </div>
    )
}

export default Section1