import { getHealthIndicator, sortObjectByHealth } from "../healthIndicator";

test.each([
    ['mage', {'name': 'mage', 'health': 90,}, 'healthy'],
    ['warrior', {'name': 'warrior', 'health': 49,}, 'wounded'],
    ['bard', {'name': 'bard', 'health': 1,}, 'critical'],
])
('testing heathbar indicator for %s character %d %s status', (_, character, healthbar) => {
    const result = getHealthIndicator(character);
    expect(result).toBe(healthbar)
});

const sortTestString = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

const sortedTestString = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]

test('testing sorting list of dicts', () => {
    const result = sortObjectByHealth(sortTestString);
    expect(result).toEqual(sortedTestString)
})