import CardResposta from './CardResposta.js';

export default {
    name: 'ListaRespostas',
    components: {
        CardResposta
    },
    template: (
        `<ul class="lista_respostas">
            <card-resposta numero="1" justificativa="Pois não existe vegetal melhor do que batata" resposta="batata"></card-resposta>
        </ul>`
    )
};
