export function getRandomArbitrary(min, max) {
    let random = Math.floor(Math.random() * (max - min) + min);
    return random;
}
