function dayOfWeek(S, k) {
  let week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let dayOfWeek = k % 7;
  return week[dayOfWeek];
}

console.log(dayOfWeek(S, 42));
