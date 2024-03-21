export const saveToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
      if (!data) {
        reject(new Error('Không có dữ liệu được cung cấp'));
      }
  
      try {
        localStorage.setItem(fileName, JSON.stringify(data));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };  