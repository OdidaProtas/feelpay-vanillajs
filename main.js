const feelpay = document.querySelector("feelpay-launcher");

const requestIdEl = document.getElementById("request-id");
const eventNameEl = document.getElementById("event-name");
const statusTextEl = document.getElementById("status-text");
const eventDescEl = document.getElementById("event-desc");

const successRefEl = document.getElementById("success-ref");
const idEl = document.getElementById("id-el");

feelpay?.addEventListener("error", handleFeelPayEvent);
feelpay?.addEventListener("connected", handleFeelPayEvent);
feelpay?.addEventListener("clicked", handleFeelPayEvent);
feelpay?.addEventListener("success", handleFeelPayEvent);
feelpay?.addEventListener("cancelled", handleFeelPayEvent);
feelpay?.addEventListener("innitiated", handleFeelPayEvent);

function handleFeelPayEvent(event) {
  const { description, status, paymentRequestId, name, transaction } =
    event.detail;
  if (eventNameEl) eventNameEl.innerText = name;
  if (statusTextEl) statusTextEl.innerText = status;
  if (requestIdEl) requestIdEl.innerText = paymentRequestId;
  if (eventDescEl) eventDescEl.innerText = description;
  if (name === "Success") {
    const {
      ref,
      id,
      // paymentMethod,
      // paymentProvider,
      // amount,
      // status,
      // orderId,
      // orderRef,
    } = transaction;
    if (successRefEl) successRefEl.innerText = ref;
    if (idEl) idEl.innerText = id;
  }
  if (name === "Innitiated") {
    const {
      ref,
      id,
      // paymentMethod,
      // paymentProvider,
      // amount,
      // status,
      // orderId,
      // orderRef,
    } = transaction;

    if (successRefEl) successRefEl.innerText = ref;
    if (idEl) idEl.innerText = id;
  }
}
