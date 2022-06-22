


ask = (question,yes, no) => question()? yes():no()

ask(
    () => confirm('Вы согласны?'),
    () => alert('Вы согласились.'),
    () => alert('Вы отменили выполнение.')
);

