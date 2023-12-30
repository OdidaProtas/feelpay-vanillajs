# Integrating FeelPay Widget with HTML

This is a guide to help you integrate FeelPay into an app built with HTML.

You will need HTML project, with a file extension `.html`

## Installing FeelPay

FeelPay Widget installs into your HTML app with a single line of code through a CDN.

```html
<script
  type="module"
  src="https://api.dreamfeel.me/assets/launcher.js"
></script>
```

Locate the `<head></head>` tags of your HTML file.

Past the code below into the the `<head></head>` section of the file.

```html
    <script
      type="module"
      src="https://api.dreamfeel.me/assets/launcher.js"
    ></script>
```

    The modified html file should look as below.

```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        //Other head elements
        <script
          type="module"
          src="https://api.dreamfeel.me/assets/launcher.js"
        ></script>
      </head>
      <body>
        // Website content
      </body>
    </html>
```

You can now use `<feelpay-launcher></feeelpay-launcher>` in your project.

## Usage

Use `<feelpay-launcher></feeelpay-launcher>` as any other HTML tag, and pass order details to it as below

```html
<feelpay-launcher
  clientidentifier=""
  clientKey=""
  paymentRef=""
  description="Feelpay Demo"
  amount="1"
  currency="KES"
  checkoutPage="https://feelpay-vanillajs.vercel.app"
  webHookUrl="https://feelpay.io/callback"
  customerName="John Doe"
  customerEmail="dreamer@example.com"
  customerPhone="079XXXXXX"
  shippingRegion="Nairobi County"
  shippingCityTown="Westlands"
  shippingStreet="Westlands"
  shippingDetailedAddress="Kericho road"
  shippingLat="1.2921"
  shippingLng="36.82195"
/>
```

Here is a full HMTL with these Changes

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FeelPay + VanillaJS</title>
    <script
      type="module"
      src="https://api.dreamfeel.me/assets/launcher.js"
    ></script>
    <script type="module" src="main.js"></script>
  </head>
  <body>
    <feelpay-launcher
      clientidentifier=""
      clientKey=""
      paymentRef=""
      description="Feelpay Donation"
      amount="1"
      currency="KES"
      checkoutPage="https://feelpay-vanillajs.vercel.app"
      webHookUrl="https://feelpay.io/callback"
      customerName="John Doe"
      customerEmail="dreamer@example.com"
      customerPhone="079XXXXXX"
      shippingRegion="Nairobi County"
      shippingCityTown="Westlands"
      shippingStreet="Westlands"
      shippingDetailedAddress="Kericho road"
      shippingLat="1.2921"
      shippingLng="36.82195"
    />
  </body>
</html>
```


## Obtaining API Keys
To obtain your `Client Identifier` and `Client Keys`

1. Create a Free FeelPay Account on https://feelpay.io
2. Complete your FeelPay Profile
3. Register your App to FeelPay by clicking on `Register App` button. You will be redirected to the registered app dashboard.
4. On the side panel, click on preferences and update your app preferences, i.e payment providers.
5. Click on API Keys on the sidebar, and generate your API Keys.

Remember to keep the API Keys secret.