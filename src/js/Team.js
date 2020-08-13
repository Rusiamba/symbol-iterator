export default class Team {
    constructor() {
      this.team = [];
      this.numb = 0;
    }
  
    add(character) {
      this.team.push(character);
      this.numb += 1;
    }
  
    [Symbol.iterator]() {
      let current = 0;
      const last = this.numb;
      const command = this.team;
      return {
        next() {
          if (current < last) {
            return {
              done: false,
              value: command[current++],
            };
          }
          return {
            done: true,
          };
        },
      };
    }
}