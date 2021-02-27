export default {
    name: 'BtnResposta',
    props: ['letra', 'alternativa', 'tela', 'correta', 'erro'],
    data: () => ({
        classe: ''
    }),
    methods: {
        emitirEvento() {
            if (this.correta) {
                this.classe = 'correta';

                setTimeout(() => {
                    let feedBack = this.erro;

                    if (this.tela === 'feedback') {
                        feedBack = {
                            texto: 'Sr. Batata gostou de sua entrevista e irá te receber nas Industrias Batata´s',
                            status: 'ganhou'
                        }
                    }

                    this.$emit('clicarBotao', { tela: this.tela, feedBack });
                }, 500);
            } else {
                this.classe = 'errada';

                setTimeout(() => {
                    const acao = {
                        tela: 'feedback',
                        feedBack: {
                            texto: this.erro,
                            status: 'erro'
                        }
                    };

                    this.$emit('clicarBotao', acao);
                }, 500);
            }
        }
    },
    template: (
        `<button :class="classe" class="btn_pergunta" @click="emitirEvento">
            <span>{{letra}}</span> {{alternativa}}
        </button>`
    )
};
