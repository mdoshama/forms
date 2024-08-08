import {Component, ElementRef, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  jobs: any[] = [];
  projects: any[] = [];
  ngOnInit(): void {
    this.loadExperience();
    this.loadProjects();

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

  loadProjects(): void {
    // Example project data; replace with real data or fetch from a service
    this.projects = [
      {
        name: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and skills.',
        image: 'assets/portfolio.jpg', // Replace with the path to your image
        url: 'https://portfolio.example.com'
      },
      {
        name: 'E-Commerce Platform',
        description: 'A fully-featured e-commerce platform with user authentication and product management.',
        image: 'assets/ecommerce.jpg', // Replace with the path to your image
        url: 'https://ecommerce.example.com'
      },
      {
        name: 'Chat Application',
        description: 'Real-time chat application with features like group chats and notifications.',
        image: 'assets/chat.jpg', // Replace with the path to your image
        url: 'https://chat.example.com'
      }
      // Add more projects as needed
    ];
  }
  constructor(private elRef: ElementRef) {}

  scrollToElement(elementId: string): void {
    const element = this.elRef.nativeElement.querySelector(`#${elementId}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }


  confirmDownload() {
    const confirmed = confirm("Do you want to download my resume?");
    if (confirmed) {
      window.location.href = 'assets/resume.pdf'; // Adjust path as needed
    }
  }


}
