'use client'
import Image from 'next/image';
import yahoo from './images/yahoo.png';
import whatsapp from './images/whatsapp.png';


function Section3(){
    return(
        <div id="section3" className='center py-5'>
            <div className="embed-responsive">
                <div id="map-container-google-1" className="z-depth-1-half map-container responsive-item">
                    <iframe className="map embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17505.08580351811!2d22.899018649825788!3d47.07125834771361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474860fea97255e7%3A0x941a575088897395!2sBiserica%20Na%C8%99terea%20Sf%C3%A2ntului%20Ioan%20Botez%C4%83torul!5e0!3m2!1sro!2sro!4v1709928095628!5m2!1sro!2sro" width="100%" height="600" ></iframe>                
                </div>
            </div>
            <div className='container1 contacte'>
                <div className='row py-5'>
                    <div className='col-lg-6'>
                    <Image 
                                src={yahoo} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '10%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                    <span className='email'>pacealumii@yahoo.com</span>
                    </div>
                    <div className='col-lg-6'>
                    <Image 
                                src={whatsapp} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '12%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                                <span className='telefon'>0754751011</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3