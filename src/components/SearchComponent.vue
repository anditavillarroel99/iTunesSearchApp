<template>
  <section class="section searchbar">
    <form>
      <div class="form-row">
        <div class="col-5">
          <input
            type="text"
            v-model="searchQuery"
            class="form-control"
            placeholder="Example: Jack Johnson"
          />
        </div>
        <div class="col-5">
          <select
            v-model="selected"
            class="form-control browser-default custom-select"
          >
            <option v-for="(type, index) in typelist" :key="index">
              {{ type.name }}
            </option>
          </select>
        </div>
        <div class="col">
          <button
            button
            type="submit"
            class="btn btn-primary mb-8 btn1"
            @click="searchItem"
          >
            {{ "Search" }}
            <i class="fa fa-search"> </i>
          </button>
        </div>
        <div class="col">
          <button button class="btn btn-primary mb-8 btn2" @click="clear">
            <i class="fa fa-times"> </i>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      selected: "music",
      typelist: [
        { name: "all", type: "album,movie,tvSeason" },
        { name: "audiobook", type: "audiobook" },
        { name: "music", type: "album" },
        { name: "musicVideo", type: "musicVideo" },
        { name: "podcast", type: "podcast" },
        { name: "tvShow", type: "tvSeason" }
      ],
      searchQuery: "Jack Johnson"
    };
  },
  props: {
    newQuery: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.searchItem();
  },
  methods: {
    searchItem() {
      if (this.searchQuery === "") {
        alert("You must complete all fields!");
      } else {
        this.typelist.forEach(element => {
          if (element.name === this.selected) {
            this.type = element.type;
          }
        });
        this.$emit("clickSearch", this.searchQuery, this.selected, this.type);
      }
    },

    clear() {
      this.searchQuery = "";
      this.type = "";
      this.$emit("clickClearSearch");
    }
  }
};
</script>

<style scoped>
.searchbar {
  padding: 1rem 2rem;
  width: 100%;
  box-shadow: 0 0 80px 0 rgba(0, 0, 0, 0.5);
  background: white;
}

.btn1 {
  background-color: rgb(154, 220, 231);
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.btn2 {
  background-color: rgb(255, 255, 255);
  color: red;
  border-color: red;
  font-size: 16px;
  cursor: pointer;
}
.card {
  margin: 5 rem;
  padding: 5 rem;
}
</style>
