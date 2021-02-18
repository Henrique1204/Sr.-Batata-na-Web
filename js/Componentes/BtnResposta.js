export default {
    name: 'BtnResposta',
    props: ['letra', 'alternativa'],
    template: (
        `<button class="btn_pergunta">
            <span>{{letra}}</span> {{alternativa}}
        </button>`
    )
};
