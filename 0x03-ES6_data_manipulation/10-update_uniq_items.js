export default function updateUniqueItems(mmap) {
  for (const [key, value] of mmap) {
    if (value === 1) {
      try {
        mmap.set(key, 100);
      } catch (err) {
        throw new Error('Cannot process');
      }
    }
  }
}
