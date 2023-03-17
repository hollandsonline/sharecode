<!-- Profitmetrics current -->
<script>
window.shopifyCheckoutId = {{ checkout.id }};
</script>

<script>
window.dataLayer = window.dataLayer || [];

if (typeof gtag !== 'function') {
    function gtag() { dataLayer.push(arguments); }
}

gtag('event', 'conversion', {
    send_to: 'AW-600299351/SB3KCLuTzoAYENeun54C',
    value: {{ total_price | divided_by: 100 }},
    currency: '{{ currency }}',
    transaction_id: '{{ checkout.id | json }}'
});

gtag('event', 'conversion', {
    send_to: 'AW-600299351/439TCNuOz4AYENeun54C',
    value: {{ total_price | divided_by: 100 | times: 0.2  }},
    currency: '{{ currency }}',
    transaction_id: '{{ checkout.id | json }}'
});

</script>
<!-- End Profitmetrics current -->

<!-- Profitmetrics new -->
<script async src="https://www.googletagmanager.com/gtag/js?id=undefined"></script>
<script>
window.dataLayer = window.dataLayer || [];
if (typeof gtag !== 'function') {
    function gtag() { dataLayer.push(arguments); }
}
gtag('js', new Date());

</script>

<script>
window.dataLayer = window.dataLayer || [];

if (typeof gtag !== 'function') {
    function gtag() { dataLayer.push(arguments); }
}

var customerOrderCount = 0;
{% for order in order.customer.orders %}
    customerOrderCount += 1;
{% endfor %}

var new_customer_data = false;

if (customerOrderCount == 1 ) {
    new_customer_data = true;
}



</script>
<!-- End Profitmetrics new -->
