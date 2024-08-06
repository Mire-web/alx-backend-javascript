export default function createIteratorObject(report) {
  const reportList = [];
  for (const element of Object.values(report.allEmployees)) {
    reportList.push(...element);
  }
  return reportList;
}
