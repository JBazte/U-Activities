import React from 'react';

function Carousel() {
    return (
        <>
            <div id="carousel" className="carousel carousel-position slide border border-dark rounded-1" data-bs-ride="carousel">
                <div className="carousel-indicators mb-1">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.marketinclusion.com/wp-content/uploads/2018/08/Fundraising-y-Deporte-ONG.jpg" className="d-block w-100 rounded-1 h-100" alt="..." />
                        <div className='w-100 h-100 carousel-gradient'></div>
                        <div className="carousel-caption d-flex flex-column">
                            <p className='carousel-title-text text-start'>NOMBRE DEL EVENTO 1</p>
                            <p className='carousel-body-text text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.marketinclusion.com/wp-content/uploads/2018/08/Fundraising-y-Deporte-ONG.jpg" className="d-block w-100 rounded-1 h-100" alt="..." />
                        <div className='w-100 h-100 carousel-gradient'></div>
                        <div className="carousel-caption d-flex flex-column">
                            <p className='carousel-title-text text-start'>NOMBRE DEL EVENTO 1</p>
                            <p className='carousel-body-text text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.marketinclusion.com/wp-content/uploads/2018/08/Fundraising-y-Deporte-ONG.jpg" className="d-block w-100 rounded-1 h-100" alt="..." />
                        <div className='w-100 h-100 carousel-gradient'></div>
                        <div className="carousel-caption d-flex flex-column">
                            <p className='carousel-title-text text-start'>NOMBRE DEL EVENTO 1</p>
                            <p className='carousel-body-text text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.marketinclusion.com/wp-content/uploads/2018/08/Fundraising-y-Deporte-ONG.jpg" className="d-block w-100 rounded-1 h-100" alt="..." />
                        <div className='w-100 h-100 carousel-gradient'></div>
                        <div className="carousel-caption d-flex flex-column">
                            <p className='carousel-title-text text-start'>NOMBRE DEL EVENTO 1</p>
                            <p className='carousel-body-text text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.marketinclusion.com/wp-content/uploads/2018/08/Fundraising-y-Deporte-ONG.jpg" className="d-block w-100 rounded-1 h-100" alt="..." />
                        <div className='w-100 h-100 carousel-gradient'></div>
                        <div className="carousel-caption d-flex flex-column">
                            <p className='carousel-title-text text-start'>NOMBRE DEL EVENTO 1</p>
                            <p className='carousel-body-text text-start'>Basic or highlighted information about the event.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;