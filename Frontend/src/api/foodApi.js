
export const getFoods = async () => {
    const res = await fetch("http://localhost:3000/foods");
    const data = await res.json();
    return data;
};