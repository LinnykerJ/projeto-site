const BotaoConclui = () => {
    const BotaoConclui = document.createElement('button')

    BotaoConclui.classList.add('check-button')
    BotaoConclui.innerText = 'Concluir'

    BotaoConclui.addEventListener('click', concluirTarefa)

    return BotaoConclui

}

const concluirTarefa = (evento) => {
    const BotaoConclui = evento.target

    const tarefaCompleta = BotaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui
