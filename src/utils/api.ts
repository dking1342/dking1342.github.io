export const fetchRequest = async (url: string, vals: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(vals),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await response.json();
  } catch (error: any) {
    const err: Error = error;
    return err.message;
  }
};
