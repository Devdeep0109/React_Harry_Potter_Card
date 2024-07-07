
export const getPosts = async() =>{

    const response = await fetch("https://hp-api.onrender.com/api/characters",{method: "GET"});
    return await response.json();
}