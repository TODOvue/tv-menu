import { ref, watch } from "vue";

const useMenu = (props, emit) => {
  const showMenu = ref(false);
  const activeMenuInternal = ref(props.activeMenu);

  watch(() => props.activeMenu, (val) => {
    activeMenuInternal.value = val;
  });

  const handleClickImage = () => {
    emit("clickImage");
  };

  const handleClickMenu = (menu) => {
    if (showMenu.value) {
      manageViewMenu(false);
    }
    emit("clickMenu", menu);
    if (menu.id) {
      activeMenuInternal.value = menu.id;
      emit("update:activeMenu", menu.id);
    }
  };

  const handleSearch = (search) => {
    emit("searchMenu", search);
  };

  const manageViewMenu = (value) => {
    showMenu.value = value;
  };

  return {
    showMenu,
    activeMenuInternal,
    handleClickImage,
    handleClickMenu,
    handleSearch,
    manageViewMenu,
  };
};

export default useMenu;
