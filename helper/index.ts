export const fetchData = async (currentPage = 1) => {
    const res = await fetch("https://rickandmortyapi.com/api/character/?page=" + currentPage);
    const data: Data.RootObject = await res.json();
    return data
}