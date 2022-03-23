const tipoMultimedia = (() => {
    const funcionInterna = (url, id) => {
        document.getElementById(id).setAttribute('src', url);
    }
    return {
        playVideo: (url, id) => funcionInterna(url, id)
    }
})();

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    get url() {
        return this.getUrl()
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}