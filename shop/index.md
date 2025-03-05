---
layout: default
title: Shop Gaming & Streaming Gear
description: Browse our curated selection of gaming keyboards, mice, headsets, microphones, cameras, and more for gamers, streamers, and podcasters.
---

<div class="shop-page">
  <h1 class="page-title">Shop Gaming & Streaming Gear</h1>
  
  <p class="lead">Discover premium gaming and streaming equipment at competitive prices. As an Amazon Associate, we earn from qualifying purchases.</p>
  
  <div class="filter-section">
    <h2>Browse by Category</h2>
    
    <div class="filter-buttons">
      <button class="filter-button active" data-filter="all">All Products</button>
      <button class="filter-button" data-filter="keyboard">Keyboards</button>
      <button class="filter-button" data-filter="mouse">Mice</button>
      <button class="filter-button" data-filter="headset">Headsets</button>
      <button class="filter-button" data-filter="microphone">Microphones</button>
      <button class="filter-button" data-filter="camera">Cameras</button>
      <button class="filter-button" data-filter="lighting">Lighting</button>
      <button class="filter-button" data-filter="accessory">Accessories</button>
    </div>
  </div>
  
  <div class="shop-grid">
    {% for product in site.shop %}
    <div class="product-card product-item {% if product.categories %}{% for category in product.categories %}{{ category | slugify }} {% endfor %}{% endif %}">
      <img src="{{ product.image }}" alt="{{ product.title }}" class="product-image">
      <div class="product-card-content">
        <h3>{{ product.title }}</h3>
        <p class="price">{{ product.price }}</p>
        <p class="product-description">{{ product.description | truncate: 100 }}</p>
        <a href="{{ product.affiliate_link }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        <a href="{{ product.url }}" class="btn btn-secondary">View Details</a>
      </div>
    </div>
    {% endfor %}
  </div>
  
  <div class="shop-empty-state" style="display: none;">
    <h3>No products found</h3>
    <p>Try selecting a different category or check back later for new products.</p>
  </div>
  
  <div class="shop-cta">
    <h2>Looking for a Custom Studio Setup?</h2>
    <p>We offer professional installation services for gaming, streaming, and podcasting studios nationwide.</p>
    <a href="/services/" class="btn btn-primary">Explore Our Services</a>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const productItems = document.querySelectorAll('.product-item');
    const emptyState = document.querySelector('.shop-empty-state');
    
    // Filter products when a filter button is clicked
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        let visibleProducts = 0;
        
        if (filterValue === 'all') {
          productItems.forEach(item => {
            item.style.display = 'block';
            visibleProducts++;
          });
        } else {
          productItems.forEach(function(item) {
            if (item.classList.contains(filterValue)) {
              item.style.display = 'block';
              visibleProducts++;
            } else {
              item.style.display = 'none';
            }
          });
        }
        
        // Show/hide empty state
        if (visibleProducts === 0) {
          emptyState.style.display = 'block';
        } else {
          emptyState.style.display = 'none';
        }
      });
    });
    
    // Initialize - check if we have products
    if (productItems.length === 0) {
      emptyState.style.display = 'block';
    }
  });
</script> 