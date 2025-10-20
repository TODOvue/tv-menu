import { ref } from "vue";

const useMenu = (emit) => {
  const showMenu = ref(false);
  
  const handleClickImage = () => {
    emit("clickImage");
  };
  
  const handleClickMenu = (menu) => {
    if (showMenu.value) {
      manageViewMenu(false);
    }
    emit("clickMenu", menu);
  };
  
  const handleSearch = (search) => {
    emit("searchMenu", search);
  };
  
  const manageViewMenu = (value) => {
    showMenu.value = value;
  };
  
  return {
    showMenu,
    handleClickImage,
    handleClickMenu,
    handleSearch,
    manageViewMenu,
  };
};

export default useMenu;
