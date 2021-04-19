function addH2() {
    const h2 = document.createElement('h2');
    h2.textContent = "By Chana Gurkow & Devorah Polter";
    document.querySelector('body').appendChild(h2);
}
document.querySelector('h1').addEventListener('mouseover', addH2);