


export const getBanners = async () => {
  try {
    const response = await fetch.get('./../data/banners.json'); 
    if (response.data) {
      return response.data;
    } else {
      throw new Error('No data found');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};