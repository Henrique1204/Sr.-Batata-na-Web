import ListaRespostas from './Componentes/ListaRespostas.js';
import Pergunta from './Componentes/Pergunta.js';

const vm = new Vue({
    el: '#App',
    data: {
        respondido: false,
        telaAtual: "inicial",
        perguntas: null
    },
    components: {
        ListaRespostas,
        Pergunta
    },
    methods: {
        async fetchPerguntas() {
            const res = await fetch('../db/perguntas/index.json');
            const json = await res.json();

            this.perguntas = json;
            console.log(json);
        },
        atualizar_tela(mensagem) {
            console.log(mensagem);
            this.telaAtual = mensagem;
        }
    },
    created() {
        this.fetchPerguntas();
    }
});
