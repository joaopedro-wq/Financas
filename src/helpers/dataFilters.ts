import { item } from "../type/item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: item[], date: string): item[] => {
  let newList: item[] = [];
  let [year, month] = date.split('-');

  for (let i in list) {
    if (
      list[i].data.getFullYear() === parseInt(year) &&
      (list[i].data.getMonth() + 1) === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[parseInt(month) - 1]} de ${year}`;
}