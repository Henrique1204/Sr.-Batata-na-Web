import ListaRespostas from './Componentes/ListaRespostas.js';
import BtnResposta from './Componentes/BtnResposta.js';

const vmRespostas = new Vue({
    el: '#respostas',
    data: {},
    components: {
        ListaRespostas
    }
});

const vmQuiz = new Vue({
    el: '#quiz',
    data: {},
    components: {
        BtnResposta
    }
});
