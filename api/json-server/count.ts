const countTotal = (response: Response) => {
  return Number(response.headers.get("x-total-count"));
};

export default countTotal;
