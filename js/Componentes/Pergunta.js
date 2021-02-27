import BtnResposta from './BtnResposta.js';

export default {
    name: 'Pergunta',
    props: ['pergunta', 'alternativas', 'numero', 'tela_atual'],
    methods: {
        emitirTrocaTela(mensagem) {
            this.$emit('trocar_tela', mensagem);
        }
    },
    computed: {
        tela() {
            return `perguntas_${this.numero}`;
        },
        proximaTela() {
            return `perguntas_${this.numero + 1}`
        }
    },
    components: {
        BtnResposta
    },
    template: (
        `<section class="pergunta" v-if="tela_atual === tela" key="numero">
            <h1>{{pergunta}}</h1>


            <btn-resposta
                v-for="({letra, resposta, correta}) in alternativas"
                :key="letra + '_' + numero"

                :letra="letra"
                :alternativa="resposta"
                :tela="proximaTela"
                :correta="correta"

                @clicarBotao="emitirTrocaTela"
            ></btn-resposta>
        </section>`
    )
}
