const countTo = (limit: number, current: number) => {
  console.log(current);
  if (current >= limit) {
    console.log("finished");
  } else {
    countTo(limit, current + 1);
  }
};

countTo(10, 0);
