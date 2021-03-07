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
    <!-- <CardList></CardList> -->
  </div>
</template>

<script>
import Search from "@/components/SearchComponent.vue";
//import CardList from "@/components/CardComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },

  components: {
    Search
    // , CardList
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
    search_items(new_query) {
      if (new_query) {
        const payload = {
          url: `https://itunes.apple.com/search?term=${new_query}&entity=album&media=music`,
          query: new_query
        };
        this.$store.dispatch("search_albums", payload);
      }
      this.$store.commit("set_page_type", "search");
    },
    clearSearch() {
      this.$store.commit("clear_search");
    },
    showBookmarks() {
      this.$store.commit("set_page_type", "bookmarks");
    },
    replaceArtworkUrlSize(albumArtwork, newSize) {
      return albumArtwork.replace("100x100", newSize);
    },
    isInBookmark(albumName) {
      return (
        this.bookmarkAlbums.findIndex(
          album => album.collectionCensoredName === albumName
        ) > -1
      );
    }
  },
  created() {
    window.addEventListener("scroll", this.toggleNavbar);
  },
  destroyed() {
    window.removeEventListener("scroll", this.toggleNavbar);
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
