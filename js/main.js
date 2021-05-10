function initMap() {
    // Your location
    const loc = { lat: -34.397, lng: 150.644 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 8,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }

  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });
