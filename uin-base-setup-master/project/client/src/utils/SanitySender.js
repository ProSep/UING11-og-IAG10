import client from './client';

export const createRegister = async (email) => {
  try {
    const response = await client.create({ _type: 'register', email });
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};
