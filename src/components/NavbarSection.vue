<template>
  <header class="header">
    <div class="header-content">
      <img src="https://res.cloudinary.com/dgcpujd5s/image/upload/v1715774654/LOGO_ixtg0z.png"  alt="Company Logo" class="logo" />
      <nav class="navigation">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/service">Service</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/feature">Feature</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product">Product</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonial">Testimonial</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq">FAQ</router-link>
          </li>
        </ul>
      </nav>
      <div class="auth-buttons">
        <button class="signup-btn" @click="redirectToSignUp">Sign up</button>
        <button class="login-btn" @click="redirectToLogin">log in</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    redirectToSignUp() {
      this.$router.push('/signup');
    },
    redirectToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.header {
  mix-blend-mode: darken;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 100%;
  padding-bottom: 80px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .header {
    max-width: 100%;
  }
}

.header-content {
  align-items: center;
  display: flex;
  width: 100%;
  gap: 20px;
  font-weight: 400;
  justify-content: space-between;
  padding: 5px 43px 5px 69px;
}

@media (max-width: 991px) {
  .header-content {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}

.logo {
  aspect-ratio: 2.78;
  object-fit: auto;
  object-position: center;
  width: 100px;
  align-self: stretch;
  max-width: 100%;
  margin: auto 0;
}

.navigation {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--Text-Gray-900, #18191f);
  white-space: nowrap;
  line-height: 150%;
  justify-content: center;
  margin: auto 0;
  padding: 1px 0;
}

@media (max-width: 991px) {
  .navigation {
    max-width: 100%;
    white-space: initial;
  }
}

.nav-list {
  justify-content: center;
  display: flex;
  gap: 20px;
}

@media (max-width: 991px) {
  .nav-list {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.nav-item {
  font-family: Inter, sans-serif;
  font-weight: 500;
}

.auth-buttons {
  justify-content: end;
  align-self: stretch;
  display: flex;
  gap: 10px;
  font-size: 14px;
  text-align: center;
  padding: 10px 0 10px 54px;
}

.signup-btn {
  font-family: Poppins, sans-serif;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid rgba(27, 94, 31, 1);
  background-color: var(--warna-text, #fff);
  color: #1b5e1f;
  padding: 10px 20px;
}

.login-btn {
  font-family: Poppins, sans-serif;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--shade-4, #1b5e1f);
  color: var(--warna-text, #fff);
  padding: 10px 20px;
}
</style>