// @vsc repo:vsc-project-113-backend file:src/utils/timeHelper.ts task:b14-src-utils-timehelper-ts module:backend session:113
/**
 * محاسبه آفست دقیق از UTC به دقیقه برای یک منطقه زمانی IANA داده شده.
 * @param timezone - رشته IANA مانند 'Asia/Tehran'
 * @returns آفست به دقیقه (مثبت برای پیشروی بر UTC، منفی برای عقب ماندن)
 */
export function getOffsetMinutes(timezone: string): number {
  // استفاده از Intl API برای دریافت آفست فعلی (به دقیقه)
  return -new Date().toLocaleString('en-US', { timeZone: timezone }).getTimezoneOffset();
}

/**
 * فرمت کردن یک تاریخ (به صورت UTC) به زمان محلی در منطقه زمانی مشخص با فرمت HH:mm:ss.
 * @param date - شیء Date که زمان UTC را نشان می‌دهد (می‌تواند هر زمان باشد؛ از مقدار UTC آن استفاده می‌شود)
 * @param timezone - رشته IANA برای تبدیل
 * @returns زمان formatted به صورت HH:mm:ss (24 ساعته با صفرهای پیش행)
 */
export function formatLocalTime(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: timezone,
  }).format(date);
}
