import { toast } from 'react-toastify';

export const notifyError = (notification) => toast.error(notification);
export const notifySuccess = (notification) => toast.success(notification);
