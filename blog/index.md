---
layout: default
title: Tech Deals Blog
description: Latest tech deals, gaming news, and streaming setup guides for gamers, streamers, and podcasters.
---

<div class="blog-page">
  <div class="hero">
    <div class="hero-content">
      <h1>Tech Deals & Gaming News</h1>
      <p>Stay updated with the latest tech deals, gaming news, and streaming setup guides.</p>
    </div>
  </div>
  
  <div class="container">
    <div class="blog-header">
      <div class="blog-categories">
        <a href="/blog/" class="category-link active">All Posts</a>
        <a href="/blog/categories/deals/" class="category-link">Deals</a>
        <a href="/blog/categories/guides/" class="category-link">Setup Guides</a>
        <a href="/blog/categories/reviews/" class="category-link">Reviews</a>
        <a href="/blog/categories/news/" class="category-link">News</a>
      </div>
      
      <div class="blog-search">
        <form action="/blog/search/" method="get">
          <input type="text" name="q" placeholder="Search blog posts..." class="search-input">
          <button type="submit" class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="search-icon">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
    
    <div class="featured-post">
      {% for post in site.posts limit:1 %}
      <div class="featured-post-inner">
        <div class="featured-post-image">
          <img src="{{ post.image }}" alt="{{ post.title }}">
        </div>
        <div class="featured-post-content">
          <div class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
            {% if post.categories.size > 0 %}
            <span class="post-category">{{ post.categories | first }}</span>
            {% endif %}
          </div>
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
          <a href="{{ post.url }}" class="read-more">Read More</a>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <div class="post-grid">
      {% for post in site.posts offset:1 limit:9 %}
      <div class="post-card animate-on-scroll">
        <a href="{{ post.url }}" class="post-image">
          <img src="{{ post.image }}" alt="{{ post.title }}">
        </a>
        <div class="post-card-content">
          <div class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
            {% if post.categories.size > 0 %}
            <span class="post-category">{{ post.categories | first }}</span>
            {% endif %}
          </div>
          <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <div class="pagination">
      {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="pagination-item prev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="pagination-icon">
          <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
        </svg>
        Previous
      </a>
      {% else %}
      <span class="pagination-item prev disabled">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="pagination-icon">
          <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
        </svg>
        Previous
      </span>
      {% endif %}
      
      <span class="pagination-info">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
      
      {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="pagination-item next">
        Next
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="pagination-icon">
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
        </svg>
      </a>
      {% else %}
      <span class="pagination-item next disabled">
        Next
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="pagination-icon">
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
        </svg>
      </span>
      {% endif %}
    </div>
    
    <div class="newsletter-signup">
      <h2>Never Miss a Deal</h2>
      <p>Subscribe to our newsletter to get the latest tech deals and gaming news delivered directly to your inbox.</p>
      <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="newsletter-form">
        <input type="email" name="email" placeholder="Your email address" required>
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </div>
</div> 