
import { RESOURCES } from '../Statistics';

export default {
  name: 'one',
  clock: { timestamp: 60 },
  config: {
    [RESOURCES.RECENT_VISITS_SUMMARY]: {
      duration: 30,
      grouping: 10,
    },
  },
  birds: [{ id: 'a' }],
  feeders: [{ id: 'Z', longitude: 0, latitude: 0 }],
  visits: [
    { timestamp: 55, fedder: 'Z', bird: 'a'},
  ],
  statistics: {
    visits: {
      total: 1,
      grouped: {
        50: 1,
        40: 0,
        30: 0,
      },
    },
  },
};