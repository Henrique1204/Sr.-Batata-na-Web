export default {
    name: 'BtnResposta',
    props: ['letra', 'alternativa', 'tela', 'correta'],
    data: () => ({
        classe: ''
    }),
    methods: {
        emitirEvento() {
            if (this.correta) {
                this.classe = 'correta';

                setTimeout(() => {
                    this.$emit('clicarBotao', this.tela);
                }, 1000);
            } else {
                this.classe = 'errada';

                setTimeout(() => {
                    this.$emit('clicarBotao', 'feedback');
                }, 1000);
            }
        }
    },
    template: (
        `<button :class="classe" class="btn_pergunta" @click="emitirEvento">
            <span>{{letra}}</span> {{alternativa}}
        </button>`
    )
};
