interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: [],
  tenantRoles: ['School Administrator', 'Teacher'],
  tenantName: 'School',
  applicationName: 'Attendance',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage student data',
    'Invite teachers to the application',
    'Manage leave data',
    'Manage attendance evaluations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/46e33d9d-0d37-4ba3-bb8f-29f8565b1608',
};
