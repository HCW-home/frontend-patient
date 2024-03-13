import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MediaService {

    async getMedia(type: 'audio' | 'video'): Promise<MediaStream | 'denied' | 'error'> {
        const constraints = type === 'audio' ? { audio: true } : { video: true };
        try {
            return await navigator.mediaDevices.getUserMedia(constraints);
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                return 'denied';
            }
            return 'error';
        }
    }
}

