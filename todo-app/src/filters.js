const filters = {
    searchText: '',
    hideCompleted: false
};

const getFilters = () => filters;
const setFilters = (searchText, hideCompleted) => {
    if(searchText !== undefined) {
        filters.searchText = searchText;
    }
    if(hideCompleted !== undefined) {
        filters.hideCompleted = hideCompleted;
    }
};

export {
    getFilters,
    setFilters
}