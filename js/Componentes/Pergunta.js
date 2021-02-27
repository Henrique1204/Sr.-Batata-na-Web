import BtnResposta from './BtnResposta.js';

export default {
    name: 'Pergunta',
    props: ['pergunta', 'alternativas', 'numero', 'tela_atual'],
    methods: {
        emitirTrocaTela(acao) {
            this.$emit('trocar_tela', acao);
        }
    },
    computed: {
        tela() {
            return `perguntas_${this.numero}`;
        },
        proximaTela() {
            if (this.numero === 10) return 'feedback';
            else return `perguntas_${this.numero + 1}`
        }
    },
    components: {
        BtnResposta
    },
    template: (
        `<section class="pergunta" v-if="tela_atual === tela" key="numero">
            <h1>{{pergunta}}</h1>


            <btn-resposta
                v-for="({letra, resposta, correta, erro}) in alternativas"
                :key="letra + '_' + numero"

                :letra="letra"
                :alternativa="resposta"
                :tela="proximaTela"
                :correta="correta"
                :erro="erro"

                @clicarBotao="emitirTrocaTela"
            ></btn-resposta>
        </section>`
    )
}
