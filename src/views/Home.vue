<template>
  <div class="home">
    <Search
      @clickSearch="search_items"
      @clickClearSearch="clearSearch"
      :newQuery="searchQuery"
      :replaceArtworkUrlSize="replaceArtworkUrlSize"
      :albums="pageType === 'search' ? albums : bookmarkAlbums"
      :isLoading="isLoading"
      :searchFailed="searchFailed"
    >
    </Search>
  </div>
</template>

<script>
import Search from "@/components/SearchComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },

  components: {
    Search
  },

  methods: {
    ...mapActions(["update_query", "search_albums"]),
    setPageType(pageType) {
      if (pageType !== this.pageType) {
        this.$store.commit("set_page_type", pageType);
      }

      if (
        pageType === "search" &&
        this.initialSearchQuery !== this.searchQuery
      ) {
        this.search_items(this.initialSearchQuery);
      }
    },
    search_items(new_query, selected, type) {
      if (new_query) {
        const payload = {
          url: `https://itunes.apple.com/search?term=${new_query}&entity=${type}&media=${selected}`,
          query: new_query
        };
        this.$store.dispatch("search_albums", payload);
      }
      this.$store.commit("set_page_type", "search");
    },
    clearSearch() {
      this.$store.commit("clear_search");
    },
    replaceArtworkUrlSize(albumArtwork, newSize) {
      return albumArtwork.replace("500x500", newSize);
    }
  },
  created() {
    window.addEventListener("scroll", this.toggleNavbar);
  },

  computed: {
    ...mapGetters({
      albums: "get_albums",
      searchQuery: "search_query",
      initialSearchQuery: "initial_query",
      isLoading: "is_loading",
      searchFailed: "search_failed",
      pageType: "page_type"
    })
  }
};
</script>
<style scoped></style>
