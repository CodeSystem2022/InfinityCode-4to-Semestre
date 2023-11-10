const mercadopago = new MercadoPago("APP_USR-e45ee6d6-45a3-4d80-b8ec-0e99bd26435d", {
    locale: "es-AR", // Los mas comunes son: 'pt-BR', 'es-AR' y 'en-US'
  });
  
  
  
  document.getElementById("checkout-btn").addEventListener("click", function () {
    const orderData = {
      quantity: document.getElementById("quantity").innerHTML,
      description: document.getElementById("product-description").innerHTML,
      price: document.getElementById("unit-price").innerHTML,
    };
  
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
      })
      .catch(function () {
        alert("Unexpected error");
      });
  });
  
  function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    const bricksBuilder = mercadopago.bricks();
  
    const renderComponent = async (bricksBuilder) => {
      if (window.checkoutButton) window.checkoutButton.unmount();
      await bricksBuilder.create(
        "wallet",
        "button-checkout", // class/id where the payment button will be displayed
        {
          initialization: {
            preferenceId: preferenceId,
          },
          callbacks: {
            onError: (error) => console.error(error),
            onReady: () => {},
          },
        }
      );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
  }