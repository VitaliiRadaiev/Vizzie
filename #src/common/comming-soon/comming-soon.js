{
    let comminSoonBg = document.querySelector('[data-slide="comming-soon-bg"]');
    if(comminSoonBg) {
        let sliderData = new Swiper(comminSoonBg, {
            effect: 'fade',
            
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1000,
            touchRatio: 0,
            lazy: {
            	loadPrevNext: true,
            },
        });
    }
}