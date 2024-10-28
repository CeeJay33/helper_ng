<template>
  <div>
    <div class="osahan-header-main py-3 px-4">
      <div class="d-flex align-items-center">
        <div class="gap-3 d-flex align-items-center">
          <router-link to="index.html"><i class="bi bi-arrow-left d-flex text-success h3 m-0 back-page"></i></router-link>
          <h3 class="fw-bold m-0">{{ userDetails }}</h3>
        </div>
        <div class="ms-auto gap-2 d-flex align-items-center">
          <router-link to="notifications.html" class="link-dark"><i class="bi bi-bell-fill d-flex m-0 h3 header-bell"></i></router-link>
          <a class="toggle osahan-toggle text-dark m-0" href="#"><i class="bi bi-list d-flex m-0 h3 header-list"></i></a>
        </div>
      </div>
    </div>

    <!-- Job Description Card -->
    <div class="card">
      <div class="icon"><i class="bi bi-pencil-square"></i></div>
      <div class="content">
        <div class="title">Please describe the nature of the job</div>
        <div class="input-container">
          <input type="text" v-model="jobDescription" placeholder="Your input here">
        </div>
      </div>
    </div>

    <!-- Location Selection Card -->
    <div class="card">
      <div class="icon"><i class="bi bi-geo-alt me-2"></i></div>
      <div class="content">
        <div class="title">Select Location</div>
        <span @click="toggleDropdown('locationDropdown')">
          <span>{{ selectedLocation || 'Select location from list' }}</span>
          <span class="dropdown-icon"><i class="bi bi-arrow-down"></i></span>
        </span>
      </div>
    </div>

    <div v-if="showLocationDropdown" class="dropdown-card">
      <div class="input-container">
        <input type="text" v-model="locationQuery" placeholder="Search for city" @keyup="fetchLocations">
      </div>
      <div class="location-list">
        <div v-if="locations.length === 0">No results found</div>
        <div v-for="location in locations" :key="location.id" @click="selectLocation(location)">
          {{ location.name }}, {{ location.location_name }}
        </div>
      </div>
    </div>

    <!-- Category Selection Card -->
    <div class="card">
      <div class="icon"><i class="bi bi-person-workspace"></i></div>
      <div class="content">
        <div class="title">Select Category</div>
        <span @click="toggleDropdown('categoryDropdown')">
          <span>{{ selectedCategory || 'Select category from list' }}</span>
          <span class="dropdown-icon"><i class="bi bi-arrow-down"></i></span>
        </span>
      </div>
    </div>

    <div v-if="showCategoryDropdown" class="dropdown-card">
      <div class="input-container">
        <input type="text" v-model="categoryQuery" placeholder="Search for category" @keyup="fetchCategories">
      </div>
      <div class="location-list">
        <div v-if="categories.length === 0">No results found</div>
        <div v-for="category in categories" :key="category.id" @click="selectCategory(category)">
          {{ category.name }}
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="p-3 text-center">
      <button class="btn btn-success btn-lg rounded-pill" @click="createJob">
        <i class="bi bi-search"></i>&nbsp;Find a workman
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userDetails: "User Details", // Replace with actual data
      jobDescription: "",
      locationQuery: "",
      categoryQuery: "",
      locations: [],
      categories: [],
      selectedLocation: null,
      selectedCategory: null,
      showLocationDropdown: false,
      showCategoryDropdown: false
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      if (dropdown === 'locationDropdown') {
        this.showCategoryDropdown = false;
        this.showLocationDropdown = !this.showLocationDropdown;
      } else if (dropdown === 'categoryDropdown') {
        this.showLocationDropdown = false;
        this.showCategoryDropdown = !this.showCategoryDropdown;
      }
    },
    fetchLocations() {
      if (this.locationQuery.length < 2) return;
      axios
        .get(`https://0mnimoveinternational.com/api/cities/?q=${encodeURIComponent(this.locationQuery)}`)
        .then((response) => {
          this.locations = response.data;
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    },
    fetchCategories() {
      if (this.categoryQuery.length < 2) return;
      axios
        .get(`https://0mnimoveinternational.com/api/categories/?q=${encodeURIComponent(this.categoryQuery)}`)
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    selectLocation(location) {
      this.selectedLocation = `${location.name}, ${location.location_name}`;
      this.showLocationDropdown = false;
    },
    selectCategory(category) {
      this.selectedCategory = category.name;
      this.showCategoryDropdown = false;
    },
    createJob() {
      if (!this.jobDescription || !this.selectedLocation || !this.selectedCategory) {
        // Example usage of SweetAlert for notifications
        this.$swal.fire({
          icon: 'error',
          title: 'Missing Information',
          text: 'Please fill out all fields.'
        });
        return;
      }
      // Handle the job creation logic
      console.log("Creating job with:", this.jobDescription, this.selectedLocation, this.selectedCategory);
    }
  }
};
</script>

<style scoped>
/* Include your CSS styles here */
</style>
