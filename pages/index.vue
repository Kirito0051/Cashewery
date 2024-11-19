<template>
  <div>
    <!-- Navbar Section -->
    <nav style="background-color: #F26659;" class=" text-white py-4 px-8 flex justify-between items-center font-edu">
      <h1 class="text-xl font-bold ">Cashewery</h1>
      <ul class="flex space-x-4">
        <li><a href="#home" class="hover:text-gray-400">Home</a></li>
        <li><a href="#services" class="hover:text-gray-400">Services</a></li>
        <li><a href="#about" class="hover:text-gray-400">About</a></li>
        <li><a href="#contact" class="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="flex items-center justify-center h-screen bg-cover bg-center text-white"
      style="background-image: url('/images/cashew.jpg');">
      <div class="text-white text-center max-w-md px-4">
        <h2 class="text-4xl font-bold mb-4">Welcome to Our Site</h2>
        <p class="mb-6">We bring you the best solutions for your needs.</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Learn More</button>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-100 text-center">
      <h2 class="text-3xl font-bold mb-8 font-cur">Our Services</h2>
      <div class="flex flex-wrap justify-center gap-6 px-4 font-cur">
        <div class="bg-white shadow-lg rounded-lg p-6 w-64">
          <h3 class="text-xl font-semibold mb-2">Web Development</h3>
          <p class="text-gray-700">Build beautiful, fast, and modern websites.</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 w-64">
          <h3 class="text-xl font-semibold mb-2">App Development</h3>
          <p class="text-gray-700">High-quality mobile applications.</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 w-64">
          <h3 class="text-xl font-semibold mb-2">SEO Optimization</h3>
          <p class="text-gray-700">Enhance your online presence and reach.</p>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer id="contact" class="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2024 Cashewery. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class="hover:text-gray-400">Instagram</a>
        <a href="#" class="hover:text-gray-400">Facebook</a>
        <a href="#" class="hover:text-gray-400">Twitter</a>
      </div>
    </footer>
  </div>
</template>

