import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {happinessProccessorServlet} from "../../shared/model/HappinessProccessorServlet";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-happiness-meter',
  templateUrl: './happiness-meter.component.html',
  styleUrls: ['./happiness-meter.component.css']
})

export class HappinessMeterComponent implements OnInit,AfterViewInit {
  @ViewChild('myForm') formElement!: ElementRef ;
  @ViewChild('iframeRef', { static: false }) iframeRe!: ElementRef<HTMLIFrameElement>;
  apiResponse ='';
  apiUrl = 'https://happinessmeterqa.dubai.gov.ae/HappinessMeter2/PostDataService';
  jsonPayload = '';
  clientId = '';
  signature = '';
  lang = '';
  random = '';
  timestamp = '';
  nonce = '';

  htmlResponse:any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
   let result =  happinessProccessorServlet("2","ar");
    if (result) {
      this.jsonPayload = result.json;
      this.clientId = result.clientId;
      this.signature = result.signature;
      this.lang =  result.lang;
      this.random =  result.random;
      this.timestamp =  result.timestamp;
      this.nonce =  result.nonce;

       this.openWindow();
    }

  }

  private static getAttribute(attributeName: string): string {
    const attribute = HappinessMeterComponent.getParameter(attributeName);
    return attribute ? decodeURIComponent(attribute) : '';
  }

  private static getParameter(parameterName: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
  }

  onSubmit() {


    let params = new HttpParams();
    params = params.append('json_payload', this.jsonPayload);
    params = params.append('client_id', this.clientId);
    params = params.append('signature', this.signature);
    params = params.append('lang', this.lang);
    params = params.append('random', this.random);
    params = params.append('timestamp', this.timestamp);
    params = params.append('nonce', this.nonce);
    //
    // this.http.post(this.apiUrl, params,{responseType:"text",observe:'response'}).subscribe(
    //     (response) => {
    //
    //       console.log(response.g);
    //      //   this.apiResponse = response.body?.toString();
    //      // const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(response.body?.toString());
    //      // this.loadIframeContent(sanitizedHtml);
    //
    //
    //     },
    //     (error) => {
    //       // Handle the error
    //       console.error(error);
    //     }
    //   );




    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:params.toString()
    };

    fetch(this.apiUrl, requestOptions)
      .then(response => response.text()) // Extract the response as text
      .then(html => {
        // Open the returned HTML in a new tab
        const newTab = window.open();
        newTab!.document.write(html);
      })
      .catch(error => console.error(error));

  }


  ngAfterViewInit() {
    const iframe = this.iframeRe?.nativeElement;
    if(iframe){
      iframe.onload = () => {
        console.log('Iframe loaded');
      };
    }

  }
  private loadIframeContent(sanitizedHtml: SafeHtml): void {

    const iframe = this.iframeRe?.nativeElement;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(sanitizedHtml.toString());
        doc.close();
      }
    }
  }
  openWindow() {

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = this.apiUrl;
     form.target = '_blank';

    // Add any data you want to send in the POST request
    const data = {
      json_payload: this.jsonPayload,
      client_id: this.clientId,
      signature: this.signature,
      lang: this.lang,
      random: this.random,
      timestamp: this.timestamp,
      nonce: this.nonce,

    };

     for (const key in data) {

       if (data.hasOwnProperty(key)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
         if(key=='json_payload'){
           input.value = data.json_payload;
         }else if(key=='client_id'){
           input.value = data.client_id;
         }else if(key=='signature'){
           input.value = data.signature;
         }else if(key=='lang'){
           input.value = data.lang;
         }else if(key=='random'){
           input.value = data.random;
         }else if(key=='timestamp'){
           input.value = data.timestamp;
         }else if(key=='nonce'){
           input.value = data.nonce;
         }


        form.appendChild(input);
       }
   }

    document.body.appendChild(form);
    form.submit();
   // document.body.removeChild(form);
  }
}
