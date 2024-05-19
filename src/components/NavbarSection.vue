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
  background-color: transparent; /* Ubah latar belakang menjadi transparan */
  align-self: stretch;
  display: flex;
  width: 100%;
  padding-bottom: 20px; /* Kurangi padding bawah */
  flex-direction: column;
}

.header-content {
  align-items: center;
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  padding: 5px 43px 5px 69px;
}

.logo {
  width: 80px; /* Kurangi ukuran logo */
  align-self: center;
}

.navigation {
  display: flex;
  font-size: 14px; /* Kurangi ukuran font */
}

.nav-list {
  display: flex;
  gap: 15px; /* Kurangi ruang putih antara item menu */
}

.nav-item {
  font-family: Inter, sans-serif;
  font-weight: 500;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.signup-btn,
.login-btn {
  font-family: Poppins, sans-serif;
  border-radius: 5px;
  padding: 8px 20px; /* Tetapkan ukuran padding untuk tombol */
}

.signup-btn {
  border: 1px solid rgba(27, 94, 31, 1);
  background-color: #fff; /* Ubah warna latar belakang tombol */
  color: #1b5e1f;
}

.login-btn {
  background-color: #1b5e1f;
  color: #fff;
}
</style>