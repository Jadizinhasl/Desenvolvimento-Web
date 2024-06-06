var tarefas = ['Lavar roupa', 'Lavar louca', 'Lavar banheiro', 'Lavar quintal', 'dar banho no cachorro']

for (var contador = 0; contador < 3; contador++) {
    console.log(tarefas[contador])
}

for (var tarefa of tarefas) {
    console.log(tarefa)
}

// tarefas.forEach(tarefa => {
//     console.log(tarefa)
// })
