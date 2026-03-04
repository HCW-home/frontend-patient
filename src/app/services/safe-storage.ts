export function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {}
}

export function safeClear(): void {
  try {
    localStorage.clear();
  } catch {}
}

export function safeSessionGetItem(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

export function safeSessionSetItem(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch {}
}

export function safeSessionRemoveItem(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch {}
}

export function safeSessionClear(): void {
  try {
    sessionStorage.clear();
  } catch {}
}
