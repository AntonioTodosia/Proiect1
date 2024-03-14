'use client'

function Section1(){
    return(
        <div id="section1">
                <div className="bg-image">
                    <div>
                        <nav className="navbar navbar-expand-sm">
                            <ul className="navbar-nav mx-auto">
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
                        <h1 className="center">Mănăstirea Nașterea Sfântului Ioan Botezatorul</h1>

                    </div>
                    <div>
                        <div className="dropdown py-3 px-3">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
                                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
                                        <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                                        </svg>
                            </span>           
                            </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#section2">Despre Mănăstire</a></li>
                                    <li><a className="dropdown-item" href="#section4">Foto</a></li>
                                    <li><a className="dropdown-item" href="#section3">Locație și date de contact</a></li>
                                </ul>
                        </div>
                        
                        

                    </div>
                </div>
            <hr className="firsthr"></hr>
        </div>
        
    )
}

export default Section1