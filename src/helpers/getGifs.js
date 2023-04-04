export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=neiXDdYaLkW2xKtNnvGi6dKduQDEVO6z&limit=10&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
};