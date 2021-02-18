import ListaRespostas from './Componentes/ListaRespostas.js';

const vm = new Vue({
    el: '#respostas',
    data: {
        teste: "Testando"
    },
    components: {
        ListaRespostas
    }
});
