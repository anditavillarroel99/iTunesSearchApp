<template>
  <section class="section searchbar">
    <!-- <div class="add-form-content"> -->
    <form>
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Example: Jack Johnson"
          />
        </div>
        <div class="col">
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-3">
          <button button type="submit" class="btn btn-primary mb-6">
            {{ "Search" }}
          </button>
        </div>
      </div>
    </form>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchQuery: "",
      selected: null
    };
  },
  props: {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.searchbar {
  padding: 1rem 1.5rem;
  width: 100%;
  box-shadow: 0 0 80px 0 rgba(0, 0, 0, 0.5);
  background: white;
}
.add-form-content {
  height: 30pt;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
