const FEELPAY_CLIENT_ID = import.meta.env.VITE_APP_FEELPAY_CLIENT_ID;
const FEELPAY_CLIENT_SECRET = import.meta.env.VITE_APP_FEELPAY_CLIENT_SECRET;


const orderDetails = {
  element: "dreamfeel-pay-button",
  clientId: FEELPAY_CLIENT_ID,
  clientSecret: FEELPAY_CLIENT_SECRET,
  description: "",
  order: {
    // Default for one time order checkout.
    installments: 1,
    orderCompleteAfterInstallment: 1,
    vat: 16, // percentage
    amount: 3000,
    currency: "KES", //Only KES supported for now
    // Specify an array of order items.
    items: [
      {
        id: "1",
        name: "",
        price: 0,
        vat: 0,
        url: ``,
        image: "",
      },
    ],
  },
  onSuccess: (detail) => {
    // Handle success
    // const {feelpayCheckoutRequestID, feelpayCheckoutStatus, feelpayOrderId, ...} = detail
    console.log(detail);
  },
  onError: (err) => {
    // Handle error
    // {message:""}
    console.log(err);
  },
  // Run an action when innitialized!
  onInit: () => { },
  // Action when user cancels transaction!
  onUserCancel: () => { },
};
const feelpay = new FeelPayWidget(orderDetails);
feelpay.init().then((pay) => {
  console.log(pay);
});