// @vsc repo:vsc-project-113-backend file:test/clocks.test.ts task:b15-test-clocks-test-ts module:backend session:113
import request from 'supertest';
import { app } from '../src/server';

jest.mock('../src/services/clockService');
import { clockService } from '../src/services/clockService';

interface ClockItem {
  id: number;
  name: string;
  country: string;
  localTime: string;
};

describe('GET /api/clocks', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return array of clocks with correct structure', async () => {
    const mockClocks: ClockItem[] = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Capital${i + 1}`,
      country: `Country${i + 1}`,
      localTime: '12:34:56',
    }));

    (clockService.getAllTimes as jest.Mock).mockResolvedValueOnce(mockClocks);

    const response = await request(app).get('/api/clocks');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(20);

    response.body.forEach((clock: ClockItem) => {
      expect(typeof clock.id).toBe('number');
      expect(typeof clock.name).toBe('string');
      expect(clock.name.length).toBeGreaterThan(0);
      expect(typeof clock.country).toBe('string');
      expect(clock.country.length).toBeGreaterThan(0);
      expect(typeof clock.localTime).toBe('string');
      expect(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(clock.localTime)).toBe(true);
    });
  });

  it('should return 500 error if service fails', async () => {
    (clockService.getAllTimes as jest.Mock).mockRejectedValueOnce(new Error('Internal service error'));

    const response = await request(app).get('/api/clocks');

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
    expect(typeof response.body.message).toBe('string');
  });
});
