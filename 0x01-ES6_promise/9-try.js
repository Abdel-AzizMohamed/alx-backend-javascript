export default function guardrail(mathFunction) {
  const queue = [];
  let data;

  try {
    data = mathFunction();
  } catch (err) {
    data = err.toString();
  }

  queue.push(data);
  queue.push('Guardrail was processed');

  return queue;
}
