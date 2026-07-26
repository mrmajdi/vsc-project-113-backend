// @vsc repo:vsc-project-113-backend file:src/services/clockService.ts task:b12-src-services-clockservice-ts module:backend session:113
import { Capitals } from '../utils/mockCapitals';
import { Capital } from '../models/capital';

export function getAllTimes(): Array<{ id: number; name: string; country: string; localTime: string }> {
  const now = new Date();
  return Capitals.map((capital) => {
    const timeFormatter = new Intl.DateTimeFormat(undefined, {
      timeZone: capital.timezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    const localTime = timeFormatter.format(now);
    return {
      id: capital.id,
      name: capital.name,
      country: capital.country,
      localTime,
    };
  });
}
