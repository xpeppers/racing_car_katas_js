class Random {
  nextInt(min: number, max: number): number {
      const delta = max + 1 - min;
      return min + Math.floor(delta * Math.random())
  }
}

export = Random