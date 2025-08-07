/**
 * Compares two objects of the same type and returns a partial object
 * containing only the fields that have been modified in the `current` object
 * compared to the `original` object. If a field is an object itself, the
 * comparison is performed recursively.
 *
 * @template T - The type of the objects being compared. Must extend `Record<string, any>`.
 * @param original - The original object to compare against.
 * @param current - The current object to compare with the original.
 * @returns A partial object containing only the modified fields. If no fields
 * are modified, an empty object is returned.

 */
export function getModifiedFields<T extends Record<string, any>>(
  original: T,
  current: T,
): Partial<T> {
  const changes: Partial<T> = {};

  // Hacemos el cast de Object.keys a (keyof T)[]
  (Object.keys(current) as Array<keyof T>).forEach((key) => {
    const origValue = original[key];
    const currValue = current[key];

    // Si es objeto (y no null), comparamos recursivamente
    if (
      origValue != null &&
      currValue != null &&
      typeof origValue === 'object' &&
      typeof currValue === 'object'
    ) {
      const nested = getModifiedFields(origValue, currValue);
      if (Object.keys(nested).length > 0) {
        // Hacemos cast a any porque Partial<T> no sabe que T[K] es objeto
        changes[key] = nested as any;
      }
    } else if (origValue !== currValue) {
      // Valor primitivo cambiado
      changes[key] = currValue;
    }
  });

  return changes;
}
