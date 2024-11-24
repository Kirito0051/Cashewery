<template>

  <body class="bg-gradient-to-t from-white to-[#F5E1A4]">

    <div>
      <!-- Sidebar -->
      <div
        class="fixed top-0 left-0 h-full w-64 bg-[#F0C674] text-black shadow-lg transform transition-transform duration-300 z-20"
        :class="{ '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }">
        <div class="p-4 font-bold flex justify-between items-center text-xl">
          <span class="font-edu">Cashewery</span>
          <button @click="toggleSidebar" class="text-black hover:text-white text-2xl">&times;</button>
        </div>
        <ul class="p-4 space-y-4 font-play">
          <li><a href="#home" @click="closeSidebar" class="hover:text-white">Home</a></li>
          <li><a href="#services" @click="closeSidebar" class="hover:text-white">Services</a></li>
          <li><a href="#about" @click="closeSidebar" class="hover:text-white">About</a></li>
          <li><a href="#contact" @click="closeSidebar" class="hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div :class="{ 'filter blur-sm': isSidebarOpen }" class="transition-all duration-300">

        <!-- Navbar Section -->
        <nav style="background-color: #F0C674" class="text-white py-4 px-8 flex justify-between items-center">
          <h1 class="text-xl font-bold font-edu cursor-pointer hover:text-black" @click="toggleSidebar">Cashewery</h1>

          <button class="md:hidden focus:outline-none cursor-pointer" @click="toggleSidebar">
            <img src="/images/Hamburger.png" alt="Menu" class="w-8 h-8">
          </button>

          <ul class="hidden md:flex space-x-4 font-play text-[0.9rem]">
            <li><a href="#home" class="hover:text-black">Home</a></li>
            <li><a href="#services" class="hover:text-black">Services</a></li>
            <li><a href="#about" class="hover:text-black">About</a></li>
            <li><a href="#contact" class="hover:text-black">Contact</a></li>
          </ul>
        </nav>

        <!-- Hero Section -->

        <section id="home" class="relative h-screen text-black overflow-hidden px-10 py-8">
          <div class="flex transition-transform duration-500 ease-in-out relative w-full h-[91.5vh] rounded-b-[3.5rem]"
            :style="{
              transform: `translateX(-${currentIndex * 100}%)`
            }">
            <!-- Background Slides -->
            <div v-for="(imgUrl, index) in slides" :key="index"
              class="w-full flex-shrink-0 h-[91.5vh] bg-cover bg-center rounded-b-[3.5rem]" :style="{
                backgroundImage: `url(${imgUrl})`,
                transform: `scale(${index === currentIndex ? 1 : 0.9})`,
                transition: 'transform 0.3s ease-in-out'
              }"></div>
          </div>

          <!-- Content Over Slider -->
          <div class="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
            <div class="max-w-screen-sm p-6">
              <h2 class="text-2xl sm:text-4xl font-bold mb-4 text-black font-edu">
                Taste the Best Cashews
              </h2>
              <p class="mb-6 text-sm sm:text-base text-black font-cur">
                Fresh, flavorful, and packed with nutrition. Perfect for any occasion.
              </p>
              <a href="#services" style="margin-top: 2rem"
                class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md inline-block text-center font-cur animate-bounce transition-all duration-300">
                Explore More
              </a>
            </div>
          </div>

          <!-- Navigation Button (Next Slide) -->
          <button
            class="absolute right-24 bottom-32 z-20 w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            @click="nextSlide">
            >
            <!-- Right Arrow Symbol -->
          </button>
        </section>


        <!-- Services Section -->
        <section id="services" class="py-16 px-6 text-center">
          <h2 class="text-3xl font-bold mb-8 font-cur">OUR SERVICES</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 font-cur">
            <!-- Product 1 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-full">
              <img src="/images/img1.png" alt="Salted cashews in a white bowl"
                class="mb-4 rounded-tl-[1.5rem] w-full h-64 object-cover transition-transform hover:scale-105">
              <h3 class="text-xl font-semibold mb-2">SALTED CASHEWS</h3>
              <p class="text-gray-700">Taste the rich, smoky flavor of our roasted cashews.</p>
            </div>

            <!-- Product 2 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-full">
              <img src="/images/img2.jpeg" alt="Carkelly cashews with a golden crispy texture"
                class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
              <h3 class="text-xl font-semibold mb-2">CARKELLY</h3>
              <p class="text-gray-700">Perfectly balanced seasoning for an irresistible crunch.</p>
            </div>

            <!-- Product 3 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-full">
              <img src="/images/img3.jpeg" alt="Red chilly flavored cashews in a wooden bowl"
                class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
              <h3 class="text-xl font-semibold mb-2">RED CHILLY</h3>
              <p class="text-gray-700">A gourmet snack for those who enjoy bold and spicy flavors.</p>
            </div>

            <!-- Product 4 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-full">
              <img src="/images/img4.jpeg" alt="Spicy cashews with red chili seasoning"
                class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
              <h3 class="text-xl font-semibold mb-2">SPICY CASHEWS</h3>
              <p class="text-gray-700">Handcrafted with care to bring out the natural essence of cashews.</p>
            </div>

            <!-- Product 5 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-full">
              <img src="/images/img5.jpeg" alt="Korean style seasoned cashews"
                class="mb-4 rounded-2xl w-full h-64 object-cover transition-transform hover:scale-105">
              <h3 class="text-xl font-semibold mb-2">KOREAN TOUCH</h3>
              <p class="text-gray-700">Experience a burst of flavor with every handful.</p>
            </div>

            <!-- Product 6 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-full">
              <img src="/images/img6.jpeg" alt="Box of love cashews with a savory mix"
                class="mb-4 rounded-br-[1.5rem] w-full h-64 object-cover transition-transform hover:scale-105">
              <h3 class="text-xl font-semibold mb-2">BOX OF LOVE</h3>
              <p class="text-gray-700">The ultimate snack for those who crave a spicy and savory treat.</p>
            </div>

          </div>
        </section>

        <section id="about"
          class="py-16 px-16 text-center flex flex-col md:flex-row items-center justify-between space-x-12 ">
          <!-- Left Section: Your content -->
          <div class=" p-8 md:w-1/2 text-left font-cur text-black">
            <h2 class="text-3xl font-bold mb-4">About Us</h2>
            <p class="text-sm sm:text-base mb-2" style="margin-top: 6rem">
              Welcome to Cashewery! We are dedicated to delivering the finest quality cashews, sourced and processed
              with utmost care. Experience the perfect blend of flavor, freshness, and nutrition in every bite.
            </p>
            <p class="text-sm sm:text-base">
              Our mission is to provide gourmet snacks that satisfy your cravings and leave you wanting more.
            </p>
          </div>

          <!-- Right Section: Icons with text -->
          <div class=" md:w-1/2 mx-auto p-4 flex flex-col gap-8 "> <!-- Item 1 -->
            <div class="flex items-center gap-6 py-4 px-12"> <img src="/images/delivery-icon.gif" alt="Delivery"
                class="w-16 h-16 flex-shrink-0">
              <div class="text-left">
                <p class="text-base font-bold">Fast Delivery</p>
                <p class="text-sm text-gray-600">Delivery within a few hours</p>
              </div>
            </div> <!-- Item 2 -->
            <div class="flex items-center gap-6 py-4 px-12"> <img src="/images/quality-icon.gif" alt="Quality"
                class="w-16 h-16 flex-shrink-0">
              <div class="text-left">
                <p class="text-base font-bold">Premium Quality</p>
                <p class="text-sm text-gray-600">Only natural ingredients used</p>
              </div>
            </div> <!-- Item 3 -->
            <div class="flex items-center gap-6 py-4 px-12"> <img src="/images/secure-payment.gif" alt="Payment"
                class="w-16 h-16 flex-shrink-0">
              <div class="text-left">
                <p class="text-base font-bold">Secure Payments</p>
                <p class="text-sm text-gray-600">Pay securely online or by cash on delivery</p>
              </div>
            </div>
          </div>
        </section>


        <!-- Footer Section -->
        <footer id="contact" class="bg-gradient-to-t from-[#F5E1A4] to-white text-black py-6 text-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <!-- Contact Info -->
            <div>
              <h3 class="text-xl font-bold mb-2">Get in Touch</h3>
              <p>Have questions or want to place an order? Reach out to us!</p>
              <div class="mt-4">
                <a href="mailto:info@cashewery.com" class="block text-blue-500 hover:underline">info@cashewery.com</a>
                <a href="tel:+1234567890" class="block text-blue-500 hover:underline">+91 7400254595</a>
              </div>
            </div>

            <!-- Social Media Links -->
            <div>
              <h3 class="text-xl font-bold mb-2">Follow Us</h3>
              <div class="flex justify-center space-x-4 mt-2">
                <a href="#" class="hover:text-gray-400">Instagram</a>
                <a href="#" class="hover:text-gray-400">Facebook</a>
                <a href="#" class="hover:text-gray-400">Twitter</a>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <p>&copy; 2024 Cashewery. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  </body>
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
      isSidebarOpen: false,
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
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
};
</script>
