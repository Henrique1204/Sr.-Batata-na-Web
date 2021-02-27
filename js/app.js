import ListaRespostas from './Componentes/ListaRespostas.js';
import Pergunta from './Componentes/Pergunta.js';

const vm = new Vue({
    el: '#App',
    data: {
        respondido: window.localStorage.getItem('finalizou') || false,
        telaAtual: "inicial",
        feedBack: null,
        perguntas: null
    },
    components: {
        ListaRespostas,
        Pergunta
    },
    methods: {
        async fetchPerguntas() {
            const res = await fetch('https://henrique1204.github.io/Sr.-Batata-na-Web/db/perguntas/index.json');
            const json = await res.json();

            this.perguntas = json;
        },
        atualizar_tela(acao) {
            const { tela, feedBack } =  acao;

            this.telaAtual = tela;
            this.feedBack = feedBack;
        }
    },
    created() {
        this.fetchPerguntas();
    }
});
