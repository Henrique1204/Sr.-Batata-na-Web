import CardResposta from './CardResposta.js';

export default {
    name: 'ListaRespostas',
    data: () => ({
        respostas: null
    }),
    components: {
        CardResposta
    },
    methods: {
        async buscarRespostas() {
            const res = await fetch("../../db/respostas/index.json");
            this.respostas = await res.json();
        }
    },
    template: (
        `<ul class="lista_respostas" v-if="respostas">
            <card-resposta
                v-for="({ numero, resposta, justificativa }) in respostas"
                key="numero"
                :numero="numero"
                :justificativa="justificativa"
                :resposta="resposta"
            ></card-resposta>
        </ul>`
    ),
    created() {
        this.buscarRespostas();
    }
};
