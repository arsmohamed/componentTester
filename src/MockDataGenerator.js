import faker from 'faker';

const generateMockData = (props) => {
  const mockData = {};
  for (const prop in props) {
    if (props.hasOwnProperty(prop)) {
      // Generate mock data based on prop types
      mockData[prop] = faker.random.word(); // Example: Using faker for string props
    }
  }
  return mockData;
};

export default generateMockData;
