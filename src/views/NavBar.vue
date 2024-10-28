<template>
  <div class="nav-container ">
    <div class="nav-wrapper nav-wrapper-0" data-level="0" data-index="0">
      <div class="nav-content">
        <ul role="menu" aria-level="1" class="second-nav">
          <!-- User Profile Section -->
          <li>
            <div class="nav-item-wrapper">
              <a
                href="edit-profile.html"
                class="bg-success sidebar-user d-flex align-items-center p-3 border-0 mb-0 rounded-4 nav-item"
                tabindex="0"
                role="menuitem"
              >
                <img
                  src=""
                  class="img-fluid rounded-pill me-3 ch-50"
                  alt="#"
                />
                <div class="text-white">
                  <h6 class="mb-0">Hi Your Name</h6>
                  <small>+91 12345-67890</small><br />
                  <span class="f-10 text-white-50">Version 1.32</span>
                </div>
              </a>
            </div>
          </li>

          <!-- Close Button -->
          <li class="nav-close">
            <div class="nav-item-wrapper">
              <a href="#" tabindex="0">Close<span></span></a>
            </div>
          </li>

          <!-- Other Navigation Items -->
          <li v-for="item in navItems" :key="item.name">
            <div class="nav-item-wrapper">
              <a
                :href="item.link"
                class="nav-item"
                tabindex="0"
                role="menuitem"
              >
                <i :class="item.iconClass + ' me-2'"></i> {{ item.name }}
              </a>
            </div>
          </li>

          <!-- Nested Menu for Authentication -->
          <li class="nav-parent">
            <input
              type="checkbox"
              id="hc-nav-1-1-0"
              class="hc-chk"
              tabindex="-1"
              data-level="1"
              data-index="0"
              value="2j9gd3nk4wo"
            />
            <div class="nav-item-wrapper">
              <a
                href="#"
                class="nav-item"
                tabindex="0"
                role="menuitem"
                aria-controls="menu-2j9gd3nk4wo"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="bi bi-key me-2"></i> Authentication
                <span class="nav-next"></span>
              </a>
            </div>
            <div class="nav-wrapper nav-wrapper-1" data-level="1" data-index="0">
              <div class="nav-content">
                <h2>Authentication</h2>
                <ul
                  role="menu"
                  aria-level="2"
                  aria-label="Authentication"
                  aria-labelledby="menu-2j9gd3nk4wo"
                >
                  <li class="nav-back">
                    <div class="nav-item-wrapper">
                      <a href="#" tabindex="0">Back<span></span></a>
                    </div>
                  </li>
                  <li v-for="authItem in authItems" :key="authItem.name">
                    <div class="nav-item-wrapper">
                      <a
                        :href="authItem.link"
                        class="nav-item"
                        tabindex="0"
                        role="menuitem"
                      >
                        {{ authItem.name }}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>

        <!-- Bottom Navigation -->
        <ul role="menu" aria-level="1" class="bottom-nav">
          <li v-for="bottomItem in bottomNavItems" :key="bottomItem.name" :class="bottomItem.class">
            <div class="nav-item-wrapper">
              <a :href="bottomItem.link" class="nav-item text-center" tabindex="0" role="menuitem">
                <p class="h5 m-0"><i :class="bottomItem.icon"></i></p>
                {{ bottomItem.name }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Homepage', link: 'index.html', iconClass: 'bi bi-house' },
        { name: 'Enable Location', link: 'enable-location.html', iconClass: 'bi bi-geo-alt' },
        { name: 'Add Location', link: 'location.html', iconClass: 'bi bi-geo' },
        { name: 'Coupons', link: 'coupons.html', iconClass: 'bi bi-ticket-detailed' },
        { name: 'Offers', link: 'offers.html', iconClass: 'bi bi-percent' },
        { name: 'Wallet', link: 'wallet.html', iconClass: 'bi bi-wallet' },
        { name: 'Notification Setting', link: 'notification-setting.html', iconClass: 'bi bi-bell-slash' },
        { name: 'Notifications', link: 'notifications.html', iconClass: 'bi bi-bell' },
        { name: 'Setting', link: 'setting.html', iconClass: 'bi bi-gear' },
        { name: 'Search List', link: 'search-list.html', iconClass: 'bi bi-search' },
        { name: 'Store', link: 'store.html', iconClass: 'bi bi-shop' },
        { name: 'Cart', link: 'cart.html', iconClass: 'bi bi-bag' },
        { name: 'Checkout', link: 'checkout.html', iconClass: 'bi bi-cart' },
        { name: 'Payment', link: 'payment.html', iconClass: 'bi bi-credit-card' },
        { name: 'Add Card', link: 'add-card.html', iconClass: 'bi bi-credit-card-2-front' },
        { name: 'Personal Info', link: 'personal-info.html', iconClass: 'bi bi-person' },
        { name: 'Edit Profile', link: 'edit-profile.html', iconClass: 'bi bi-pencil' },
        { name: 'My Address', link: 'my-address.html', iconClass: 'bi bi-map' },
        { name: 'Your Order', link: 'your-order.html', iconClass: 'bi bi-view-list' },
        { name: 'Order Confirm', link: 'order-confirm.html', iconClass: 'bi bi-bag-check' },
        { name: 'Order Details', link: 'order-details.html', iconClass: 'bi bi-list-nested' },
        { name: 'Support', link: 'support.html', iconClass: 'bi bi-question-circle' }
      ],
      authItems: [
        { name: 'Sign In/Up', link: 'signup.html' },
        { name: 'Verification', link: 'otp-verify.html' }
      ],
      bottomNavItems: [
        { name: 'Home', link: 'index.html', icon: 'icofont-ui-home text-danger', class: 'email' },
        { name: 'Offer', link: 'offers.html', icon: 'icofont-sale-discount', class: 'github' },
        { name: 'Help', link: 'support.html', icon: 'icofont-support-faq', class: 'ko-fi' }
      ]
    };
  }
};
</script>

<style scoped>
/* Container */
.nav-container {
  width: 350px; /* Adjust width as needed */
  height: 100vh;
  overflow-y: auto;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

/* User Profile */
.sidebar-user {
  background-color: #28a745; /* Green background */
  color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

.sidebar-user .ch-50 {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.sidebar-user .text-white {
  color: white;
}

.sidebar-user small, .sidebar-user span {
  color: rgba(255, 255, 255, 0.8);
}

/* General Nav Items */
.nav-item-wrapper {
  margin: 5px 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 17px 7px;
  /* background-color: #343a40; */
  color: #000;
  border-radius: 8px;
  transition: background 0.3s ease;
  font-size: 15px;
}

.nav-item:hover, .nav-item:focus {
  background-color: #495057;
  color: #fff;
  text-decoration: none;
}

.nav-item i {
  font-size: 18px;
  margin-right: 10px;
}

/* Parent Nav with Dropdown */
.nav-parent .nav-item {
  cursor: pointer;
}

.nav-parent .nav-next {
  margin-left: auto;
}

/* Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 350px; /* Match container width */
  background-color: #212529;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #495057;
}

.bottom-nav .nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 10px;
}

.bottom-nav .nav-item i {
  font-size: 20px;
  margin-bottom: 5px;
}

/* Miscellaneous */
.nav-close a {
  color: #dc3545; /* Red for close button */
  text-align: center;
}

.nav-close a:hover {
  color: #fff;
}

h6 {
  margin: 0;
}

.small {
  font-size: 0.85em;
}

.f-10 {
  font-size: 0.75em;
}

</style>
