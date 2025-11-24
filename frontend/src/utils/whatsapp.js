const mobileRegex =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export const openWhatsApp = (phoneNumber, message = "") => {
  if (typeof window === "undefined") return;

  const normalizedPhone = (phoneNumber || "")
    .toString()
    .replace(/[^\d]/g, "");

  if (!normalizedPhone) return;

  const whatsappUrl = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(
    message
  )}`;

  const isMobile = mobileRegex.test(navigator.userAgent || "");

  if (isMobile) {
    window.location.href = whatsappUrl;
  } else {
    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.focus();
    }
  }
};


