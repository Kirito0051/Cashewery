<template>
  <div>
    <!-- Navbar Section -->
    <nav style="background-color: #F0C674" class="text-white py-4 px-8 flex justify-between items-center">
      <h1 class="text-xl font-bold font-edu">Cashewery</h1>
      <ul class="flex space-x-4 font-play text-[0.9rem]">
        <li><a href="#home" class="hover:text-gray-400">Home</a></li>
        <li><a href="#services" class="hover:text-gray-400">Services</a></li>
        <li><a href="#about" class="hover:text-gray-400">About</a></li>
        <li><a href="#contact" class="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->

    <section id="home" class="relative h-screen text-black overflow-hidden px-8 py-8 ">
      <div class=" flex transition-transform duration-500 ease-in-out relative w-full h-[91.5vh] rounded-b-[3.5rem]"
        :style="{
          transform: `translateX(-${currentIndex * 100}%)`

        }">
        <!-- Background Slides -->
        <div v-for="(imgUrl, index) in slides" :key="index"
          class=" w-full flex-shrink-0 h-[91.5vh] bg-cover bg-center rounded-b-[3.5rem]" :style="{
            backgroundImage: `url(${imgUrl})`,
            transform: `scale(${index === currentIndex ? 1 : 0.8})`,
            transition: 'transform 0.3s ease-in-out'
          }"></div>
      </div>

      <!-- Content Over Slider -->
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div>
          <h2 class="text-4xl font-bold mb-4 text-black font-edu">
            Taste the Best Cashews
          </h2>
          <p class="mb-6 text-black font-cur">
            Fresh, flavorful, and packed with nutrition. Perfect for any occasion.
          </p>
          <a href="#services"
            style="background-color: #FF8C42; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: background-color 0.3s;"
            onmouseover="this.style.backgroundColor='#FF7043'" onmouseout="this.style.backgroundColor='#FF8C42'"
            class="text-white py-2 px-4 rounded-md inline-block text-center font-cur">
            Explore More
          </a>
        </div>
      </div>

      <!-- Navigation Button (Next Slide) -->
      <button
        class="absolute right-16 bottom-32 z-20 w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        @click="nextSlide">
        >
        <!-- Right Arrow Symbol -->
      </button>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-100 text-center">
      <h2 class="text-3xl font-bold mb-8 font-cur">OUR SERVICES</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 font-cur">
        <!-- Product 1 -->
        <div class="bg-white shadow-lg rounded-lg p-6 w-full">
          <img src="/images/img1.png" alt="Web Development"
            class="mb-4 rounded-tl-[1.5rem] w-full h-64 object-cover transition-transform hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">SALTED CASHEWS</h3>
          <p class="text-gray-700">Taste the rich, smoky flavor of our roasted cashews.</p>
        </div>
        <!-- Product 2 -->
        <div class="bg-white shadow-lg rounded-lg p-6 w-full">
          <img src="/images/img2.jpeg" alt="App Development"
            class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">CARKELLY</h3>
          <p class="text-gray-700">Perfectly balanced seasoning for an irresistible crunch.</p>
        </div>
        <!-- Product 3 -->
        <div class="bg-white shadow-lg rounded-lg p-6 w-full">
          <img src="/images/img3.jpeg" alt="SEO Optimization"
            class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">RED CHILLY</h3>
          <p class="text-gray-700">A gourmet snack for those who enjoy bold and spicy flavors.</p>
        </div>
        <!-- Product 4 -->
        <div class="bg-white shadow-lg rounded-lg p-6 w-full">
          <img src="/images/img4.jpeg" alt="SEO Optimization"
            class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">SPICY CASHEWS</h3>
          <p class="text-gray-700">Handcrafted with care to bring out the natural essence of cashews.</p>
        </div>
        <!-- Product 5 -->
        <div class="bg-white shadow-lg rounded-lg p-6 w-full">
          <img src="/images/img5.jpeg" alt="SEO Optimization"
            class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">KOREAN TOUCH</h3>
          <p class="text-gray-700">Experience a burst of flavor with every handful.</p>
        </div>
        <!-- Product 6 -->
        <div class="bg-white shadow-lg rounded-lg p-6 w-full">
          <img src="/images/img6.jpeg" alt="SEO Optimization"
            class="mb-4 rounded-br-[1.5rem] w-full h-64 object-cover transition-transform hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">BOX OF LOVE</h3>
          <p class="text-gray-700">The ultimate snack for those who crave a spicy and savory treat.</p>
        </div>
      </div>
    </section>



    <!-- Footer Section -->
    <footer id="contact" class="bg-gradient-to-t from-[#F5E1A4] to-white text-black py-6 text-center">
      <p>&copy; 2024 Cashewery. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class="hover:text-gray-400">Instagram</a>
        <a href="#" class="hover:text-gray-400">Facebook</a>
        <a href="#" class="hover:text-gray-400">Twitter</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // Tracks the current slide index
      slides: [
        "/images/cashew1.jpg", // Replace with your image paths
        "/images/cashew2.jpg",
        "/images/cashew3.jpg",
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back to the first slide
      }
    },
  },
};
</script>


