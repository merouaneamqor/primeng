import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'footer-section',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <section class="landing-footer pt-8 px-5 lg:px-8">
            <div class="landing-footer-container">
                <div class="flex flex-wrap z-1">
                    <div class="w-6 lg:w-3 flex">
                        <ul class="list-none p-0 m-0">
                            <li class="font-bold mb-5">General</li>
                            <li class="mb-4">
                                <a [routerLink]="['installation']" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150"> Get Started </a>
                            </li>
                            <li class="mb-4">
                                <a href="https://github.com/primefaces/primeng-examples" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Examples</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-6 lg:w-3 flex">
                        <ul class="list-none p-0 m-0">
                            <li class="font-bold mb-5">Support</li>
                            <li class="mb-4">
                                <a href="https://github.com/orgs/primefaces/discussions" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Forum</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Discord</a>
                            </li>
                            <li class="mb-4">
                                <a [routerLink]="['support']" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PRO Support </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-6 lg:w-3 flex">
                        <ul class="list-none p-0 m-0">
                            <li class="font-bold mt-5 lg:mt-0 mb-5">Resources</li>
                            <li class="mb-4">
                                <a href="https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PrimeTV</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://www.primefaces.org/store/" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Store</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://github.com/primefaces/primeng" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Source Code</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://twitter.com/prime_ng" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://www.primefaces.org/newsletter" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Newsletter</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://gear.primefaces.org/" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PrimeGear</a>
                            </li>
                            <li class="mb-4">
                                <a href="mailto:contact@primetek.com.tr" target="_blank" rel="noopener noreferrer" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr class="section-divider mt-8" />

                <div class="flex flex-wrap justify-content-between py-6 gap-5">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 176 42.26" style="enable-background:new 0 0 176 42.26;" xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#2694D2;}
                        </style>
                        <g id="XMLID_58_">
                            <g>
                                <path id="XMLID_173_" class="st0" d="M4.11,6.91h8.26c9.25,0,17.42,3.11,17.42,15.09s-8.17,15.09-17.42,15.09H4.11V6.91z     M10.16,32.33h3.37c5.06,0,9.94-3.76,9.94-10.33c0-6.57-4.89-10.33-9.94-10.33h-3.37V32.33z"/>
                                <path id="XMLID_170_" class="st0" d="M34.07,15.99c2.25-1.04,5.27-1.69,7.74-1.69c6.79,0,9.6,2.81,9.6,9.38v2.85    c0,2.25,0.04,3.93,0.09,5.58c0.04,1.69,0.13,3.24,0.26,4.97h-5.1c-0.22-1.17-0.22-2.64-0.26-3.33H46.3    c-1.34,2.46-4.24,3.85-6.87,3.85c-3.93,0-7.78-2.38-7.78-6.62c0-3.33,1.6-5.27,3.8-6.36c2.2-1.08,5.06-1.3,7.48-1.3h3.2    c0-3.59-1.6-4.8-5.02-4.8c-2.46,0-4.93,0.95-6.87,2.42L34.07,15.99z M40.86,33.37c1.77,0,3.16-0.78,4.06-1.99    c0.95-1.25,1.21-2.85,1.21-4.58h-2.51c-2.59,0-6.44,0.43-6.44,3.85C37.18,32.54,38.78,33.37,40.86,33.37z"/>
                                <path id="XMLID_167_" class="st0" d="M55.38,4.66h5.79v13.01h0.09c1.6-2.12,3.63-3.37,6.66-3.37c6.83,0,9.34,5.45,9.34,11.59    c0,6.1-2.51,11.72-9.34,11.72c-2.46,0-5.15-0.86-6.83-3.24H61v2.72h-5.62V4.66z M66.32,33.11c3.8,0,4.89-4.15,4.89-7.22    c0-2.98-1.04-7.09-4.8-7.09c-3.72,0-5.19,3.98-5.19,7.09C61.22,29.04,62.47,33.11,66.32,33.11z"/>
                                <path id="XMLID_164_" class="st0" d="M81.06,15.99c2.25-1.04,5.28-1.69,7.74-1.69c6.79,0,9.6,2.81,9.6,9.38v2.85    c0,2.25,0.04,3.93,0.09,5.58c0.04,1.69,0.13,3.24,0.26,4.97h-5.1c-0.22-1.17-0.22-2.64-0.26-3.33H93.3    c-1.34,2.46-4.24,3.85-6.87,3.85c-3.93,0-7.78-2.38-7.78-6.62c0-3.33,1.6-5.27,3.8-6.36c2.21-1.08,5.06-1.3,7.48-1.3h3.2    c0-3.59-1.6-4.8-5.02-4.8c-2.46,0-4.93,0.95-6.87,2.42L81.06,15.99z M87.85,33.37c1.77,0,3.16-0.78,4.06-1.99    c0.95-1.25,1.21-2.85,1.21-4.58h-2.51c-2.59,0-6.44,0.43-6.44,3.85C84.17,32.54,85.77,33.37,87.85,33.37z"/>
                                <path id="XMLID_161_" class="st0" d="M102.89,6.91h8.26c9.25,0,17.42,3.11,17.42,15.09s-8.17,15.09-17.42,15.09h-8.26V6.91z     M108.95,32.33h3.37c5.06,0,9.94-3.76,9.94-10.33c0-6.57-4.89-10.33-9.94-10.33h-3.37V32.33z"/>
                                <path id="XMLID_158_" class="st0" d="M142.06,14.3c6.61,0,11.67,4.45,11.67,11.8c0,6.4-4.28,11.5-11.67,11.5    c-7.35,0-11.63-5.1-11.63-11.5C130.43,18.75,135.49,14.3,142.06,14.3z M142.06,33.11c4.45,0,5.62-3.98,5.62-7.7    c0-3.42-1.82-6.62-5.62-6.62c-3.76,0-5.58,3.29-5.58,6.62C136.48,29.09,137.65,33.11,142.06,33.11z"/>
                                <path id="XMLID_156_" class="st0" d="M170.98,19.62c-1.04-0.48-2.16-0.82-3.93-0.82c-3.59,0-5.88,2.85-5.88,7.05    c0,4.11,1.95,7.26,6.01,7.26c1.64,0,3.46-0.61,4.45-1.04l0.26,4.8c-1.69,0.52-3.42,0.74-5.79,0.74c-7.31,0-10.98-4.97-10.98-11.76    c0-6.44,3.8-11.54,10.77-11.54c2.33,0,4.02,0.26,5.62,0.74L170.98,19.62z"/>
                            </g>
                        </g>
                    </svg>
                    </span>
                    <div class="flex align-items-center gap-2">
                        <a href="https://twitter.com/prime_ng" target="_blank" rel="noopener noreferrer" class="linkbox block w-3rem h-3rem flex align-items-center justify-content-center">
                            <i class="pi pi-twitter"></i>
                        </a>
                        <a href="https://github.com/primefaces/primeng" target="_blank" rel="noopener noreferrer" class="linkbox block w-3rem h-3rem flex align-items-center justify-content-center">
                            <i class="pi pi-github"></i>
                        </a>
                        <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" class="linkbox block w-3rem h-3rem flex align-items-center justify-content-center">
                            <i class="pi pi-discord"></i>
                        </a>
                        <a href="https://github.com/orgs/primefaces/discussions" class="linkbox block w-3rem h-3rem flex align-items-center justify-content-center">
                            <i class="pi pi-comments"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class FooterSectionComponent {}
