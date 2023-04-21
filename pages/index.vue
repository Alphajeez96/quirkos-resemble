<template>
  <div class="flex flex-wrap items-stretch min-h-screen">
    <!-- Form Here -->
    <section class="bg-[#1B1C41] pt-5 w-full lg:w-5/12">
      <div class="inner__holder">
        <!-- Welcome Text Here -->
        <div class="flex items-center">
          <p class="text-white font-bold text-2xl md:text-3xl">
            Welcome to Quirkos
          </p>
        </div>

        <!-- Form Here -->
        <form class="mt-11">
          <!-- User Email -->
          <div class="form__group">
            <label for="email">Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <!-- User Password -->
          <div class="form__group">
            <label for="password">Password</label>
            <input
              :type="isVisible ? 'text' : 'password'"
              placeholder="Password"
              autocomplete="current-password"
            />

            <button
              type="button"
              tabindex="0"
              :aria-label="` ${isVisible ? 'Hide' : 'Show'} Password`"
              class="absolute right-4 top-[42px]"
              @click="isVisible = !isVisible"
            >
              <img
                class="h-4"
                :src="
                  require(`~/assets/images/${isVisible ? 'view' : 'hide'}.svg`)
                "
                alt="icon"
              />
            </button>
          </div>

          <div>
            <button class="submit">Submit</button>
          </div>
        </form>

        <!-- External Links Here -->
        <div class="mt-6 flex items-center">
          <n-link to="/"> Forgot Password</n-link>
          <n-link to="/" class="ml-auto">Sign up</n-link>
        </div>
      </div>
    </section>

    <!-- Carousel Here -->
    <section class="bg-[#131436] lg:flex-1 flex justify-center items-center">
      <Carousel />
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data: () => ({
    isVisible: false,
    languages: ["English", "Deutsch", "Español", "Français", "Português"],
  }),
};
</script>

<style lang="scss" scoped>
.inner__holder {
  @apply flex flex-col justify-center m-auto h-full mx-5 lg:mx-auto lg:w-9/12;
}

.form__group {
  @apply mb-7 relative;

  label {
    @apply text-white text-base;
  }

  input {
    @apply w-full mt-1.5 text-white rounded-sm h-10 px-3 leading-6 text-base border border-[#26274B] bg-[#131436];

    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      @apply outline-none border-[#7562da];
    }

    &::placeholder {
      color: #a1a1af;
    }
  }
}

.submit {
  @apply w-full h-10 text-base text-white bg-[#7562DA] rounded-sm flex items-center justify-center;

  &:hover {
    @apply bg-[#4636C6];
  }
}

a {
  @apply text-white text-base underline;
}
</style>
