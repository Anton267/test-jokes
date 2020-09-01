export interface Joke {
    type: 'string';
    value: [
        {
            categories: string[],
            id: number,
            joke: string
        }
    ];
}
