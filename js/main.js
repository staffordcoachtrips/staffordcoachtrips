<script>
const trip = new URLSearchParams(location.search).get('trip') || 'Future Trip';

document.getElementById('pageTitle').textContent =
    'Register your interest in ' + trip;

document.getElementById('destination').value = trip;

const pickup = document.getElementById('pickup');

pickup.addEventListener('change', () => {
    document.getElementById('otherPickupGroup').style.display =
        pickup.value === 'Other' ? 'block' : 'none';
});
</script>
document.querySelectorAll('.trip-slider').forEach(slider => {

    const images = slider.querySelectorAll('img');

    let current = 0;

    setInterval(() => {

        images[current].classList.remove('active');

        current = (current + 1) % images.length;

        images[current].classList.add('active');

    }, 3500);

});
