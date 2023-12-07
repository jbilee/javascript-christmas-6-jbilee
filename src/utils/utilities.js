export default function getNestedArrayFromString(string) {
  return string.split(',').map(item => item.split('-'));
}