const daysName = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

function getWeekDayName(dayOfWeek: number): string {
  return daysName[dayOfWeek];
}

export default getWeekDayName;
