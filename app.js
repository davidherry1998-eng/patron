const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", () => {
  console.log("WhatsApp button clicked");

  // Meta Pixel event
  if (typeof fbq === "function") {
    fbq("track", "Contact");
  }

  // Google Analytics event
  if (typeof gtag === "function") {
    gtag("event", "whatsapp_click", {
      event_category: "CTA",
      event_label: "Patron Kazino WhatsApp"
    });
  }
});
