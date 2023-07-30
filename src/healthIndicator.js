
export function getHealthIndicator(character) {
    if (character.health > 50) {
        return 'healthy';
    } else if (character.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}


export function sortObjectByHealth(objects) {
    return objects.sort((a, b) => b.health - a.health)
}