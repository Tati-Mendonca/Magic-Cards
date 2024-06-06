import { Component, HostListener } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { CardDetail } from '../../interfaces/magic.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  paginatedCards!: any[];
  currentPage: number = 1;
  itemsPerPage: number = 100;
  totalItems: number = 9500;
  totalPages: number = 937;
  cards: any = [];
  visible: boolean = false;

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.loadPagination();
  }

  loadPagination() {
    this.paginationService.getPaginatedData(this.currentPage).subscribe({
      next: (response: any) => {
        //  console.log(response.cards)
        this.cards = response.cards as CardDetail[];
      },
      error: (error) =>
        console.log('The requested resource was not found.', error),
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
    if (
      pageNumber &&
      pageNumber >= 1 &&
      pageNumber <= this.totalPages &&
      pageNumber !== this.currentPage
    ) {
      this.currentPage = pageNumber;
      this.loadPagination();
    }
  }

  @HostListener('window:scroll', ['$event']) showBtn() {
    this.visible = true;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }
}
