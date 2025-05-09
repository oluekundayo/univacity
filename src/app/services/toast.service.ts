import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number; // Default: 3 seconds
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<ToastMessage[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  addToast(message: Omit<ToastMessage, 'id'>) {
    const toast: ToastMessage = { id: uuidv4(), ...message, duration: message.duration || 3000 };
    this.toastsSubject.next([...this.toastsSubject.value, toast]);

    // Auto-remove the toast after `duration` ms
    setTimeout(() => this.removeToast(toast.id), toast.duration);
  }

  removeToast(id: string) {
    this.toastsSubject.next(this.toastsSubject.value.filter(toast => toast.id !== id));
  }
}
