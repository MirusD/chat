/**
 * Форматирует дату в зависимости от давности события:
 * - < 24 часов: время (ЧЧ:ММ)
 * - ≥ 24 часов и < недели: день недели
 * - ≥ недели и < года: месяц и число (ДД Месяц)
 * - ≥ года: полная дата (ДД Месяц ГГГГ)
 *
 * @param date - Дата для форматирования (Date | string | number)
 * @returns Отформатированная строка
 */
export function formatRelativeDate(date: Date | string | number): string {
  const now = new Date();
  const inputDate = new Date(date);

  if (isNaN(inputDate.getTime())) {
    throw new Error('Invalid date provided');
  }

  // Разница в миллисекундах
  const diffMs = now.getTime() - inputDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffYears = Math.floor(diffDays / 365);

  const weekdays: readonly string[] = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];

  const dayOfWeek = weekdays[inputDate.getDay()];

  const formatTime = (date: Date): string =>
    date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });

  const formatDate = (date: Date): string =>
    date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long'
    });

  const formatFullDate = (date: Date): string =>
    date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

  if (diffYears >= 1) {
    // Больше года — полная дата с годом
    return formatFullDate(inputDate);
  } else if (diffWeeks >= 1) {
    // Больше недели, но меньше года — месяц и число
    return formatDate(inputDate);
  } else if (diffDays >= 1) {
    // Больше 24 часов, но меньше недели — день недели
    return dayOfWeek;
  } else {
    // Меньше 24 часов — время
    return formatTime(inputDate);
  }
}