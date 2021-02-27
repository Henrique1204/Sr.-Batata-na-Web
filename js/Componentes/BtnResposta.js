export default {
    name: 'BtnResposta',
    props: ['letra', 'alternativa', 'tela'],
    methods: {
        emitirEvento() {
            this.$emit('clicarBotao', this.tela);
        }
    },
    template: (
        `<button class="btn_pergunta" @click="emitirEvento">
            <span>{{letra}}</span> {{alternativa}}
        </button>`
    )
};
