const mapping: Record<string, string> = {
  attendances: 'attendance',
  evaluations: 'evaluation',
  leaves: 'leave',
  schools: 'school',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
