<template>
  <div class="content">
    <div class="title">
      <h2>Nosotros</h2>
    </div>
    <video src="../assets/pagina.mp4" autoplay loop controls></video>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>
<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.title {
  padding: 24px 0;
}
</style>
