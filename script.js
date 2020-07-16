const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

const obCallback = payload => {
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshod: 1,
});

ob.observe(terms.lastElementChild);