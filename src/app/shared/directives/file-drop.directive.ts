import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[fileDrop]'
})
export class FileDropDirective {

    @Output() fileDropped = new EventEmitter<FileList>();

    @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('drop', ['$event']) public onDrop(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        const files = evt.dataTransfer?.files;
        if (files && files.length > 0) {
            this.fileDropped.emit(files);
        }
    }

}
