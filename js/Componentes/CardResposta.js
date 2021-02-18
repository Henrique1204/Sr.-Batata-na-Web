export default {
    name: 'CardResposta',
    props: ['numero', 'resposta', 'justificativa'],
    template: (
        `<li class="card_resposta">
            <span>{{numero}}</span>
            <h3>{{resposta}}</h3>
            <p>{{justificativa}}</p>
        </li>`
    )
};
