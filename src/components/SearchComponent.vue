<template>
  <div>
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
    <section class="section">
      <div class="container" style="margin-top:0px;">
        <transition name="list" mode="out-in">
          <div
            class="columns is-multiline is-mobile"
            v-if="!isLoading && displayedAlbums.length > 0"
          >
            <div
              class="column"
              :class="'is-4-widescreen  is-4-desktop is-6-tablet is-12-mobile'"
              v-for="album in displayedAlbums"
              :key="album.collectionId"
            >
              <article class="media media-wrap">
                <figure class="media-left">
                  <p class="image ">
                    <img
                      :src="
                        replaceArtworkUrlSize(album.artworkUrl100, '130x130')
                      "
                      :alt="album.collectionCensoredName"
                    />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content overflow-content">
                    <div>
                      {{ album.artistName }}
                      <br />
                      <span class="has-text-grey-light">{{
                        album.collectionCensoredName
                      }}</span>
                      <span class="has-text-grey-light">{{ album.price }}</span>
                    </div>
                  </div>
                  <div class="level is-mobile">
                    <div class="level-left"></div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </transition>
        <div class="columns is-mobile" v-if="isLoading">
          <div class="column loading">
            <b-loading
              :is-full-page="false"
              :active.sync="isLoading"
              :can-cancel="false"
            ></b-loading>
          </div>
        </div>
        <template v-if="searchFailed && !isLoading">
          <div class="columns is-multiline is-mobile">
            <div class="column">
              <h3 class="title is-4 has-text-centered">Nothing found.</h3>
              <h3 class="title is-4 has-text-centered">Please Search Again!</h3>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
// import _ from "lodash";

export default {
  name: "Search",
  data() {
    return {
      selected: "music",
      typelist: [
        // { name: "all", type: "allTrack" },
        { name: "audiobook", type: "audiobook" },
        { name: "movie", type: "movie" },
        { name: "music", type: "album" },
        { name: "musicVideo", type: "musicVideo" },
        { name: "podcast", type: "podcast" },
        { name: "shortFilm", type: "shortFilm" },
        { name: "tvShow", type: "tvSeason" }
      ],
      searchQuery: "Jack Johnson",
      current: true,
      type: "",
      size: ""
    };
  },
  props: {
    newQuery: {
      type: String,
      required: true
    },
    albums: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    searchFailed: {
      type: Boolean,
      required: true
    },
    replaceArtworkUrlSize: {
      type: Function,
      required: true
    }
  },
  watch: {
    albums(val, oldVal) {
      if (val !== oldVal) {
        this.current = true;
      }
    }
  },
  created: function() {},
  computed: {
    displayedAlbums() {
      return this.albums;
    }
  },
  methods: {
    searchItem() {
      this.typelist.forEach(element => {
        if (element.name === this.selected) {
          this.type = element.type;
        }
      });
      this.$emit("clickSearch", this.searchQuery, this.selected, this.type);
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
  padding: 1rem 1.5rem;
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
  margin: 1 rem;
  padding: 2 rem;
  width: 18rem;
}
</style>
