const tipoMultimedia = (() => {
    const funcionInterna = (url, id) => {
        document.getElementById(id).setAttribute('src', url);
    }
    return {
        playVideo: (url, id) => funcionInterna(url, id)
    }
})();
