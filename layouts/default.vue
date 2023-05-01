<template>
  <div>
    <header>
      <slot name="header" class="header">
        <!-- Default header content for custom component -->
      </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.header{
  color: black;
}
</style>