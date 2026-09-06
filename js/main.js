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
