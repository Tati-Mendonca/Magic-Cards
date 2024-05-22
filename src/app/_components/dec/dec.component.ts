import { Component } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { CardDetail } from '../../interfaces/magic.interface';

@Component({
    selector: 'app-dec',
    standalone: true,
    templateUrl: './dec.component.html',
    styleUrl: './dec.component.css',
    imports: [ PaginationComponent]
})
export class DecComponent {
    paginatedCards!: any[];
    currentPage: number = 1;
    itemsPerPage: number = 100;
    totalItems: number = 9500;
    totalPages: number = 937;
    cards: any = [];

    constructor(private paginationService: PaginationService){    }

    ngOnInit(): void {
        this.loadPagination();
      }

    loadPagination() {
        this.paginationService.getPaginatedData(this.currentPage).subscribe({
          next: (response: any) => {
            //  console.log(response.cards)
            this.cards = response.cards as CardDetail[];
          },
          error: (error) => console.log('Erro ao carregar cards:', error),
        });
      }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.loadPagination();
      }

      goToPreviousPage(): void {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.loadPagination();
        }
      }
    
      goToNextPage(): void {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.loadPagination();
        }
      }
    
      goToPage(page: string): void {
        const pageNumber = parseInt(page, 10);
        if (pageNumber && pageNumber >= 1 && pageNumber <= this.totalPages && pageNumber !== this.currentPage) {
          this.currentPage = pageNumber;
          this.loadPagination();
        }
      }
}