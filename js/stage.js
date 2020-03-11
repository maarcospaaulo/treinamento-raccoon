$('.carousel-stage').slick({
    dots: true, // exibe os pontos a baixo
    infinite: false, // sempre volta ao inicio
    slidesToShow: 4, // qtdd de slides que serao exibidos
    slidesToScroll: 4, // qtdd de slides que serao movidos para o lado
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true, // exibe os pontos a baixo
                infinite: true, // sempre volta ao inicio
                slidesToShow: 1, // qtdd de slides que serao exibidos
                slidesToScroll: 1, // qtdd de slides que serao movidos para o lado
                prevArrow: '<a class=".previous-slide">o</a>',
                /*nextArrow: $('.next-slide')*/
            }
        }
    ]
});