<template>
  <div class="checkbox">
    <input :id="id" type="checkbox" class="inp-cbx d-none" />
    <label :for="id" class="cbx pb-0">
        <span>
            <svg width="12px" height="10px" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg> 
        </span>
    </label>
  </div>
</template>
<script>
export default {
    props: ["id"]
}
</script>
