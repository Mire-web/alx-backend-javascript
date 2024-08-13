export default function updateUniqueItems(mmap) {
  for (const [key, value] of mmap) {
    if (value === 1) mmap.set(key, 100);
  }
}
