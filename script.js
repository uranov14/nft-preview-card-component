const imageEquilibrium = document.getElementById("image-equilibrium");
const iconView = document.getElementById("icon-view");

imageEquilibrium.addEventListener('mouseover', () => {
    iconView.classList.remove('hidden');
})
imageEquilibrium.addEventListener('mouseout', () => {
    iconView.classList.add('hidden');
})