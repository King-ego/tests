interface CustomMatchers<R = { message: () => string; pass: boolean }> {
  toBeInRange(floor: number, ceiling: number): R;
}

declare module global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

// export {};
