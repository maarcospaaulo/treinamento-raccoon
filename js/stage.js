$('.carousel-stage').slick({
    dots: false, // exibe os pontos a baixo
    infinite: true, // sempre volta ao inicio
    slidesToShow: 4, // qtdd de slides que serao exibidos
    slidesToScroll: 4, // qtdd de slides que serao movidos para o lado
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false, // exibe os pontos a baixo
                infinite: true, // sempre volta ao inicio
                slidesToShow: 1, // qtdd de slides que serao exibidos
                slidesToScroll: 1, // qtdd de slides que serao movidos para o lado
                prevArrow: '<a class="previous-slide"><svg width="25px" viewBox="0 0 492 492"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"></path></svg></a>',
                nextArrow: '<a class="next-slide"><svg width="25px" viewBox="0 0 492.004 492.004"><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path></svg></a>'
            }
        }
    ]
});
