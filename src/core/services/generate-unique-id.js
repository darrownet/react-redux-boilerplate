class GenerateUniqueId {
  generate (modifier) {
    const randomChars = () => {
      return Math.random().toString(36).substr(2, 5);
    };
    return `${modifier}-${randomChars()}-${randomChars()}`;
  }
}

export const generateUniqueId = new GenerateUniqueId();