import BtnResposta from './BtnResposta.js';

export default {
    name: 'Pergunta',
    props: ['pergunta', 'alternativas', 'numero'],
    components: {
        BtnResposta
    },
    template: (
        `<section class="pergunta" key="numero">
            <h1>{{pergunta}}</h1>


            <btn-resposta
                v-for="({letra, resposta}, index) in alternativas"
                :letra="letra" :alternativa="resposta"
                :key="letra + '_' + index"
            ></btn-resposta>
        </section>`
    )
}

// v-if="telaAtual === 'pergunta' + '_' + numero"
