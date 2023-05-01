<template>
    <div>
      <header>
        <slot name="header">
          Default header content for custom component
        </slot>
      </header>
      <main>
        <slot />
      </main>
    </div>
  </template>