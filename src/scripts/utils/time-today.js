const today = new Date();

const getToday = {
  dateToday: today.getDate(),
  monthToday: today.getMonth() + 1,
  yearToday: today.getFullYear(),
};

export default getToday;
