import React from 'react';

function Carousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide border border-dark border-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column">
                            <p className='title-text text-start'>EVENT NAME 1</p>
                            <p className='text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column">
                            <p className='title-text text-start'>EVENT NAME 2</p>
                            <p className='text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column">
                            <p className='title-text text-start'>EVENT NAME 3</p>
                            <p className='text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;