const landingPage = () => {
  const main = document.getElementById("main");
  main.innerHTML += `
  <div id="container">

    <!-- A div with card class for the card  -->
    <div class="card">
      <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies">

      <!-- A div with card__details class to hold the details in the card  -->
      <div class="card__details">

        <!-- Span with tag class for the tag -->
        <span class="tag">Nature</span>

        <span class="tag">Lake</span>

        <!-- A div with name class for the name of the card -->
        <div class="name">Lago di Braies</div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam
          pharetra
          vitae ipsum odio.</p>

        <button>Read more</button>
      </div>


    </div>
  </div>
 
 `;
};
landingPage();
