export function normalizeOption (option: number, def: number, max: number): number {
  if (!option || isNaN(option)) {
    option = def
  } else if (option < 1) {
    option = 1
  } else if (option > max) {
    option = max
  }
  return option
}
