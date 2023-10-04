import { Stream } from 'hcw-stream-lib';
import { Component, Input, OnInit, ViewChild, ElementRef, Directive  } from '@angular/core';


@Component({
  selector: 'app-peer-audio',
  templateUrl: './peer-audio.component.html',
  styleUrls: ['./peer-audio.component.scss']
})
export class PeerAudioComponent implements OnInit {

  @ViewChild('audioElement') elementRef: ElementRef;

  @Input() stream: Stream
  constructor() { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.srcObject = this.stream.mediaStream
  }

  ngOnInit(): void {
  }

}
