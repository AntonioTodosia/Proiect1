'use client'
import Image from 'next/image';

import image1 from './images/drumManastire.jpeg';
import image2 from './images/cimitirul.jpeg';
import image3 from './images/mormant.jpeg';
import image4 from './images/biserica.jpeg';
import image5 from './images/imprejurimi.jpeg';
import image6 from './images/imprejurimi2.jpeg';


function Section4(){
    return(
       <div id='section4'>
            <div className="container center">
            <h1>Galerie Foto</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image1} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">Drumul spre Mănăstire</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image2} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">CIMITIRUL SFINȚILOR DIN MĂNĂSTIREA BUCIUM</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image3} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">MORMÂNTUL LUI MOȘ ILIE BURLA </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image4} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">ÎMPREJURIMI</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image5} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">ÎMPREJURIMI</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image6} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">Angela Ionescu</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image1} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">Angela Ionescu</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card h-100">
                            <Image 
                                src={image1} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div class="card-body">
                                <h5 class="card-title">Angela Ionescu</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Section4