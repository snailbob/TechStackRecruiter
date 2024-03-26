const serviceCarouselElement = document.querySelector('#carouselExampleAutoplaying')
const serviceCarouselElement2 = document.querySelector('#carouselExampleAutoplaying2')

const carouselService = new bootstrap.Carousel(serviceCarouselElement, {
  interval: 1000,
})
const carouselService2 = new bootstrap.Carousel(serviceCarouselElement2, {
  interval: 1000,
});

serviceCarouselElement.addEventListener("mouseover", (event) => {
    carouselService.cycle();
});
serviceCarouselElement.addEventListener("mouseleave", (event) => {
    carouselService.pause();
    carouselService.to(0)
});

serviceCarouselElement2.addEventListener("mouseover", (event) => {
    carouselService2.cycle();
});
serviceCarouselElement2.addEventListener("mouseleave", (event) => {
    carouselService2.pause();
    carouselService2.to(0)
});
