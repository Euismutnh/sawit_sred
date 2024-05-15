Home.vue:
<template>
  <div class="landing-page">
    <Navbar />
    <main class="main-content">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            Sawit Rover <br />& Drone
          </h1>
          <p class="hero-description">
            Welcome to our innovative platform: "SRED". We present you with a
            cutting-edge solution for efficient and secure monitoring and data
            recording from drones and rovers, utilizing blockchain technology.
          </p>
          <div class="hero-cta">
            <button class="cta-btn">Get Product</button>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4604483c9c3080468cf365cc2ef54d5a759d44ba15edfbe5c2ba3399fc6e98f5?apiKey=d08c69475cff4af781c6577a73a4ec26&" alt="Arrow Icon" class="arrow-icon" />
          </div>
          <div class="hero-stats">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fccf8eac157b2461b2f7457f23c61fa69853a7e830f2c8f8fa6dc700aacb4acb?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Active Users Icon"
              class="users-icon"
            />
            <div class="stats-info">
              <span class="users-count">1100+</span>
              <span class="users-text">Active users around the wordls</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/050f207c3e3468104d466950e4496fd89f75241996e9d8acb516673aad097545?apiKey=d08c69475cff4af781c6577a73a4ec26&" alt="Hero Image" class="hero-img" />
        </div>
      </section>
      <section class="community-section">
        <h2 class="section-title">Palm Oil Community Information</h2>
        <div class="community-cards">
          <div class="card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eadf27340d5fbda19c0a050eb08f7e61c296aa089b1890c68bb6a1baca171a5?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Membership Organisations Icon"
              class="card-icon"
            />
            <h3 class="card-title">Membership Organisations</h3>
            <p class="card-description">
              Palm oil company organizations existing in various countries, to
              support the global palm oil demand.
            </p>
          </div>
          <div class="card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56a103575c60f545a583aba6b5e06fde307e14c556a9afa00e284a0c7ff74b22?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="National Associations Icon"
              class="card-icon"
            />
            <h3 class="card-title">National Associations</h3>
            <p class="card-description">
              Palm oil company organizations existing in various countries, to
              support the global palm oil demand.
            </p>
          </div>
          <div class="card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3615f62b6b4ae816d30f06677881dfa2c75ae11ef14666f701e8ba75ff59a6c?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Clubs And Groups Icon"
              class="card-icon"
            />
            <h3 class="card-title">Clubs And Groups</h3>
            <p class="card-description">
              Groups of palm oil companies that exist in response to global palm
              oil issues.
            </p>
          </div>
        </div>
      </section>
      <section class="health-section">
        <div class="health-content">
          <div class="health-image">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/51ea2c623869735a64ae577562614d64dc5e46887c2f62d5f109897f9ad31542?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Oil Palm Plants Health"
              class="health-img"
            />
          </div>
          <div class="health-info">
            <h2 class="health-title">
              How to Determine the Health of Oil Palm Plants?<br /><br />
            </h2>
            <p class="health-description">
              Certainly, assessing the health of oil palm plants involves
              observing various indicators and factors that can provide insights
              into their well-being. Here are some methods and aspects to
              consider when determining the health of oil palm plants
            </p>
            <button class="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>
      <section class="features-section">
        <h2 class="section-title">What do we offer?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eb2344e0d459a24e8fd6faddabcae4c72a00dcce1264f05420af0cd90899ead?apiKey=d08c69475cff4af781c6577a73a4ec26&"
                alt="Security Guarantee Icon"
                class="icon"
              />
            </div>
            <div class="feature-info">
              <h3 class="feature-title">Security Guarantee</h3>
              <p class="feature-description">
                Your data and funds will be securely protected.
              </p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c858637115c79ea61ad4d5be618e98269522f033cb711ddfe3704f8380e9a647?apiKey=d08c69475cff4af781c6577a73a4ec26&"
                alt="Monitoring Icon"
                class="icon"
              />
            </div>
            <div class="feature-info">
              <h3 class="feature-title">Monitoring</h3>
              <p class="feature-description">
                You can monitor your drone and its data in real-time
              </p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b7d95537f8a9b179218c979eb61b5c1675f98fa32ccb64399b026b8d7c2d07?apiKey=d08c69475cff4af781c6577a73a4ec26&"
                alt="Multiple Method Icon"
                class="icon"
              />
            </div>
            <div class="feature-info">
              <h3 class="feature-title">Multiple Method</h3>
              <p class="feature-description">
                Your data and funds will be securely protected.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="rover-section">
        <div class="rover-content">
          <div class="rover-info">
            <h2 class="rover-title">
              How do rover drones work in plantations and what are their
              functions?
            </h2>
            <p class="rover-description">
              Rover drones, also known as ground-based drones or ground robots,
              play a significant role in modern agricultural practices,
              particularly in plantations. These specialized vehicles combine
              the mobility of rovers with the capabilities of drones, offering a
              unique solution for monitoring, data collection, and precision
              agriculture in agricultural settings. Here's how they work and
              what their functions are:
            </p>
            <button class="learn-more-btn">Learn More</button>
          </div>
          <div class="rover-image">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c3aad49002f05285ab6b2345ccebd19945e480bdc9dbfdb22e6f6353a7d8fc?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Rover Drone in Plantation"
              class="rover-img"
            />
          </div>
        </div>
      </section>
      <section class="cta-section">
        <h2 class="cta-title">Get Our Rover & Drone Products Now</h2>
        <button class="demo-btn">
          Get a Demo
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b17f0613cdb554428e6cca05216b9b7539c728aa3586a132b787a987f103f74f?apiKey=d08c69475cff4af781c6577a73a4ec26&" alt="Arrow Icon" class="arrow-icon" />
        </button>
      </section>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0965604c74dbf0ad2a0fd1e481ae53a131c7d0f0b63ed20da47d7e2c276b9792?apiKey=d08c69475cff4af781c6577a73a4ec26&"
            alt="Company Logo"
            class="footer-logo"
          />
          <p class="copyright">Copyright © 2023 Sawit Rover Drone</p>
          <p class="rights">All rights reserved</p>
          <div class="social-icons">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a887440775dd72fff4489c25e5fb5c3ac29cf9e3f7ea9e7f13ef5d2451b52ca?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Facebook Icon"
              class="social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b026e9b1bc39b06f087a704db4d04c37708ef8ed7ddee2ce7989a80bfaed0168?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Twitter Icon"
              class="social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a415c839f908608c4bd9a07292be58402711a403b35733f896fbdc9bd42fa474?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="Instagram Icon"
              class="social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9689e95ce9396cde41d263f8577b82d397792e90d55bf314e4d9ebeb004fad7?apiKey=d08c69475cff4af781c6577a73a4ec26&"
              alt="LinkedIn Icon"
              class="social-icon"
            />
          </div>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h4 class="column-title">Company</h4>
            <ul class="link-list">
              <li class="link-item">About us</li>
              <li class="link-item">Blog</li>
              <li class="link-item">Contact us</li>
              <li class="link-item">Pricing</li>
              <li class="link-item">Testimonials</li>
            </ul>
          </div>
          <div class="link-column">
            <h4 class="column-title">Support</h4>
            <ul class="link-list">
              <li class="link-item">Help center</li>
              <li class="link-item">Terms of service</li>
              <li class="link-item">Legal</li>
              <li class="link-item">Privacy policy</li>
              <li class="link-item">Status</li>
            </ul>
          </div>
          <div class="link-column">
            <h4 class="column-title">Stay up to date</h4>
            <form class="newsletter-form">
              <label for="emailInput" class="visually-hidden"
                >Your email address</label
              >
              <input
                type="email"
                id="emailInput"
                placeholder="Your email address"
                aria-label="Your email address"
                class="email-input"
              />
              <button type="submit" class="submit-btn">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/894e6e0c23fb3162fec5688fb40e0114805105a041b2740de61c3d40f8f23ebc?apiKey=d08c69475cff4af781c6577a73a4ec26&"
                  alt="Submit Icon"
                  class="submit-icon"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.landing-page {
  background-color: var(--Neutral-silver-white, #f5f7fa);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  align-self: center;
  width: 100%;
  max-width: 1167px;
  margin: 80px 0 39px;
}

@media (max-width: 991px) {
  .main-content {
    max-width: 100%;
    margin-top: 40px;
  }
}

.hero-section {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .hero-section {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
.hero-content {
  display: flex;
  margin-top: 12px;
  flex-grow: 1;
  flex-direction: column;
}
}

@media (max-width: 991px) {
  .hero-content {
    max-width: 100%;
    margin-top: 40px;
  }
}

.hero-title {
  color: var(--shade-4, #1b5e1f);
  letter-spacing: 1px;
  font: 600 50px/70px Inter, sans-serif;
}

@media (max-width: 991px) {
  .hero-title {
    max-width: 100%;
    font-size: 40px;
    line-height: 62px;
  }
}

.hero-description {
  color: var(--Neutral-black, #263238);
  margin-top: 61px;
  font: 300 20px/36px Poppins, sans-serif;
}

@media (max-width: 991px) {
  .hero-description {
    max-width: 100%;
    margin-top: 40px;
  }
}

.hero-cta {
  border-radius: 64px;
  background-color: var(--shade-4, #1b5e1f);
  align-self: start;
  display: flex;
  margin-top: 65px;
  gap: 16px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  line-height: 150%;
  padding: 16px 32px;
}

@media (max-width: 991px) {
  .hero-cta {
    margin-top: 40px;
    padding: 0 20px;
  }
}

.cta-btn {
  font-family: M PLUS 1, sans-serif;
}

.arrow-icon {
  aspect-ratio: 1.43;
  object-fit: auto;
  object-position: center;
  width: 23px;
  stroke-width: 2px;
  stroke: #eff8f0;
  border-color: rgba(239, 248, 240, 1);
  border-style: solid;
  border-width: 2px;
  margin: auto 0;
}

.hero-stats {
  align-self: start;
  display: flex;
  gap: 16px;
  margin: 23px 0 0 12px;
}

@media (max-width: 991px) {
  .hero-stats {
    margin-left: 10px;
  }
}

.users-icon {
  aspect-ratio: 2.5;
  object-fit: auto;
  object-position: center;
  width: 120px;
  max-width: 100%;
  margin: auto 0;
}

.stats-info {
  display: flex;
  flex-direction: column;
}

.users-count {
  color: var(--shade-4, #1b5e1f);
  font: 700 16px/150% M PLUS 1, sans-serif;
}

.users-text {
  color: var(--Neutral-black, #263238);
  font: 400 12px/16px M PLUS 1, sans-serif;
}

.hero-image {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 40%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .hero-image {
    width: 100%;
  }
}

.hero-img {
  aspect-ratio: 0.89;
  object-fit: auto;
  object-position: center;
  width: 100%;
}

@media (max-width: 991px) {
  .hero-img {
    max-width: 100%;
    margin-top: 40px;
  }
}

.community-section {
  mix-blend-mode: multiply;
  background-color: #fff;
  z-index: 10;
  display: flex;
  margin-top: -23px;
  width: 100%;
  max-width: 1180px;
  flex-direction: column;
  padding: 8px 20px 71px;
}

@media (max-width: 991px) {
  .community-section {
    max-width: 100%;
  }
}

.section-title {
  color: var(--Neutral-black, #263238);
  text-align: center;
  align-self: center;
  font: 600 38px/44px Quicksand, sans-serif;
}

.community-cards {
  justify-content: space-between;
  margin-top: 39px;
  padding: 0 14px;
}

@media (max-width: 991px) {
  .community-cards {
    max-width: 100%;
  }
}

.card {
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2);
  background-color: var(--Neutral-White, #fff);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 24px 16px;
}

@media (max-width: 991px) {
  .card {
    margin-top: 40px;
  }
}

.card-icon {
  aspect-ratio: 1.16;
  object-fit: auto;
  object-position: center;
  width: 65px;
  align-self: center;
}

.card-title {
  color: var(--Neutral-D_Grey, #4d4d4d);
  margin-top: 16px;
  font: 700 28px/36px Quicksand, sans-serif;
}

.card-description {
  color: var(--Neutral-Grey, #717171);
  margin-top: 8px;
  font: 400 14px/20px Inter, sans-serif;
}

.health-section {
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2);
  background-color: var(--tint-5, #e8f5e9);
  width: 1210px;
  max-width: 100%;
  padding: 40px 65px 3px;
}

@media (max-width: 991px) {
  .health-section {
    padding: 0 20px;
  }
}

.health-content {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .health-content {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.health-image {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 39%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .health-image {
    width: 100%;
  }
}

.health-img {
  aspect-ratio: 0.96;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .health-img {
    margin-top: 40px;
  }
}

.health-info {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 61%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .health-info {
    width: 100%;
  }
}

.health-title {
  color: var(--Neutral-black, #263238);
  font: 600 30px Quicksand, sans-serif;
}

@media (max-width: 991px) {
  .health-title {
    max-width: 100%;
  }
}

.health-description {
  color: #000;
  margin-top: 36px;
  font: 400 20px Quicksand, sans-serif;
}

@media (max-width: 991px) {
  .health-description {
    max-width: 100%;
  }
}

.learn-more-btn {
  justify-content: center;
  border-radius: 4px;
  background-color: var(--Brand-Primary, #4caf4f);
  align-self: start;
  margin-top: 44px;
  color: var(--Neutral-White, #fff);
  text-align: center;
  padding: 14px 23px;
  font: 500 16px/150% Inter, sans-serif;
}

@media (max-width: 991px) {
  .learn-more-btn {
    margin-top: 40px;
    padding: 0 20px;
  }
}

.features-section {
  margin-top: 37px;
}

.features-grid {
  justify-content: center;
  margin-top: 64px;
  width: 100%;
  max-width: 1252px;
  padding: 10px 6px;
}

@media (max-width: 991px) {
  .features-grid {
    max-width: 100%;
    margin-top: 40px;
  }
}

.feature-card {
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2);
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  flex-grow: 1;
  gap: 20px;
  width: 100%;
  padding: 10px 6px;
}

@media (max-width: 991px) {
  .feature-card {
    margin-top: 40px;
  }
}

.feature-icon {
  align-items: center;
  border-radius: 24px;
  background-color: #4caf4f;
  align-self: start;
  display: flex;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 16px;
}

.icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
}

.feature-info {
  display: flex;
  padding-right: 6px;
  flex-direction: column;
  color: var(--Neutral-black, #263238);
  flex: 1;
}

.feature-title {
  font: 500 24px M PLUS 1, sans-serif;
}

.feature-description {
  margin-top: 8px;
  font: 400 16px M PLUS 1, sans-serif;
}

.rover-section {
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2);
  background-color: var(--tint-5, #e8f5e9);
  margin-top: 73px;
  width: 1210px;
  max-width: 100%;
  padding: 40px 27px 40px 80px;
}

@media (max-width: 991px) {
  .rover-section {
    margin-top: 40px;
    padding: 0 20px;
  }
}

.rover-content {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .rover-content {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.rover-info {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 62%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .rover-info {
    width: 100%;
  }
}

.rover-title {
  color: var(--Neutral-black, #263238);
  font: 600 30px Quicksand, sans-serif;
}

@media (max-width: 991px) {
  .rover-title {
    max-width: 100%;
  }
}

.rover-description {
  color: #000;
  margin-top: 45px;
  font: 400 20px Quicksand, sans-serif;
}

@media (max-width: 991px) {
  .rover-description {
    max-width: 100%;
    margin-top: 40px;
  }
}

.rover-image {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .rover-image {
    width: 100%;
  }
}

.rover-img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
}

@media (max-width: 991px) {
  .rover-img {
    margin-top: 40px;
  }
}

.cta-section {
  text-align: center;
}

.cta-title {
  color: var(--Neutral-black, #263238);
  margin-top: 87px;
  font: 600 55px Inter, sans-serif;
}

@media (max-width: 991px) {
  .cta-title {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}

.demo-btn {
  justify-content: center;
  border-radius: 4px;
  background-color: var(--Brand-Primary, #4caf4f);
  display: flex;
  margin-top: 65px;
  gap: 8px;
  font-size: 16px;
  color: var(--Neutral-White, #fff);
  font-weight: 500;
  text-align: center;
  line-height: 150%;
  padding: 14px 32px;
}

@media (max-width: 991px) {
  .demo-btn {
    margin-top: 40px;
    padding: 0 20px;
  }
}

.footer {
  background: linear-gradient(
    227deg,
    rgba(76, 175, 79, 0.8) 25.73%,
    rgba(76, 175, 104, 0.32) 76.27%
  );
  backdrop-filter: blur(8px);
  align-self: stretch;
  display: flex;
  margin-top: 114px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
}

@media (max-width: 991px) {
  .footer {
    margin-top: 40px;
    padding: 0 20px;
  }
}

.footer-content {
  margin-bottom: 5px;
  width: 100%;
  max-width: 1088px;
}

@media (max-width: 991px) {
  .footer-content {
    max-width: 100%;
  }
}

.footer-info {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
}

@media (max-width: 991px) {
  .footer-info {
    margin-top: 40px;
  }
}

.footer-logo {
  aspect-ratio: 2.78;
  object-fit: auto;
  object-position: center;
  width: 100px;
  max-width: 100%;
}

.copyright {
  color: var(--Neutral-Silver, #f5f7fa);
  margin-top: 30px;
  font: 400 14px/143% Inter, sans-serif;
}

.rights {
  color: var(--Neutral-Silver, #f5f7fa);
  margin-top: 8px;
  font: 400 14px/143% Inter, sans-serif;
}

.social-icons {
  display: flex;
  margin-top: 44px;
  padding-right: 80px;
  gap: 16px;
}

@media (max-width: 991px) {
  .social-icons {
    padding-right: 20px;
    margin-top: 40px;
  }
}

.social-icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
}

.footer-links {
  flex-grow: 1;
}

@media (max-width: 991px) {
  .footer-links {
    max-width: 100%;
    margin-top: 40px;
  }
}

.link-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .link-column {
    width: 100%;
  }
}

.column-title {
  color: var(--tint-5, #e8f5e9);
  font: 600 22px/127% Inter, sans-serif;
}

.link-list {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 16px;
  color: var(--shade-5, #103e13);
  font-weight: 400;
}

@media (max-width: 991px) {
  .link-list {
    margin-top: 30px;
  }
}

.link-item {
  font-family: Inter, sans-serif;
  margin-top: 24px;
}

.newsletter-form {
  border-radius: 8px;
  background-color: var(--Neutral-White, #fff);
  display: flex;
  margin-top: 24px;
  gap: 20px;
  font-size: 14px;
  color: var(--warna-text, #fff);
  font-weight: 400;
  line-height: 143%;
  padding: 11px 12px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.email-input {
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
}

.submit-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.submit-icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 18px;
}
</style>