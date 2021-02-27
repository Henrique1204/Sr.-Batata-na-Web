import BtnResposta from './BtnResposta.js';

export default {
    name: 'Pergunta',
    props: ['pergunta', 'alternativas', 'numero', 'tela_atual'],
    computed: {
        tela() {
            return `perguntas_${this.numero}`;
        },
        proximaTela() {
            if (this.numero === 10) return 'feedback';
            else return `perguntas_${this.numero + 1}`
        },
        etapaDois() {
            return this.numero > 5;
        }
    },
    methods: {
        emitirTrocaTela(acao) {
            if (this.etapaDois) {
                this.$emit('trocar_tela', { ...acao, checkpoint: 6 });
            } else {
                this.$emit('trocar_tela', acao);
            }
        }
    },
    components: {
        BtnResposta
    },
    template: (
        `<section :class="{ temaBranco: etapaDois }" class="pergunta" v-if="tela_atual === tela" key="numero">
            <h1>{{pergunta}}</h1>


            <btn-resposta
                v-for="({letra, resposta, correta, erro}) in alternativas"
                :key="letra + '_' + numero"

                :letra="letra"
                :alternativa="resposta"
                :tela="proximaTela"
                :correta="correta"
                :erro="erro"
                :etapa="etapaDois"

                @clicarBotao="emitirTrocaTela"
            ></btn-resposta>
        </section>`
    )
}
