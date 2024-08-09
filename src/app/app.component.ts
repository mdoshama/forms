import {Component, ElementRef, HostListener, OnInit, } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  jobs: any[] = [];
  isNavbarVisible = false;

  constructor(private elementRef: ElementRef,) {}
  ngOnInit(): void {
    this.loadExperience();
  }



  loadExperience(): void {
    // Example data; replace with real data or fetch from a service
    this.jobs = [
      {
        title: 'Full-Stack Developer',
        company: 'Solutions For Banking Private Limited',
        duration: 'Jan 2021 - 2024',
        description: 'Developed and maintained web applications using Angular, Spring-boot, MS-SQL Server.'
      }
    ];
  }




  scrollToElement(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }



  confirmDownload() {
      const confirmed = confirm("Do you want to download my resume?");
      if (confirmed) {
        const link = document.createElement('a');
        link.href = 'assets/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

  }



  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Check if the click was outside the component
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isNavbarVisible = false;
    }
  }

  hideNavbar() {
    this.isNavbarVisible = false;
  }



}
