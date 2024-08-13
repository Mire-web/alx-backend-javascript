export default function updateUniqueItems(mmap) {
  if (mmap instanceof Map) {
    for (const [key, value] of mmap) {
      if (value === 1) mmap.set(key, 100);
    }
    return;
  }
  throw new Error('Cannot process');
}
