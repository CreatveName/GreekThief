// Load Google Analytics (GA4)
(function() {
  var gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }

  gaScript.onload = function() {
    gtag('js', new Date());
    gtag('config', 'G-J80VRTVG5N', { 'send_page_view': false });
    console.log("✅ Google Analytics Loaded!");
  };

  // Listen for passage changes
  document.addEventListener("passageend", function() {
    var passageElement = document.querySelector("tw-passage");
    if (passageElement) {
      var passageName = passageElement.getAttribute("aria-label");
      console.log("✅ Tracking Passage:", passageName);
      gtag('event', 'passage_view', {
        'passage_name': passageName
      });
    }
  });
})();
