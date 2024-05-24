import { Component, Input } from "@angular/core";
import { SearchService } from "../../services/search.service";
import { PaginationComponent } from "../pagination/pagination.component";
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
    selector: "app-dec",
    standalone: true,
    templateUrl: "./dec.component.html",
    styleUrl: "./dec.component.css",
    imports: [PaginationComponent],
})
export class DecComponent {
    // @Input() navbarComponent!: NavbarComponent; 
    // @Input() searchService!: SearchService; 

//aqui altero os dados que recebo via input Search    
    block: string = " ";
    name: string = " ";

    constructor(private searchService: SearchService) {}

    ngOnInit(): void {
        this.loadDec();
    }

    loadDec() {
        this.searchService.getCardsSelected(this.block, this.name)
        .subscribe({
            next: (response: any) =>{
                console.log(response);
                
            }
        } )
    }
    //{
    //     this.searchService
    //         .getCardsSelected(this.block, this.name)
    //         .subscribe((data) => {
    //             console.log(data);
    //         });
    // }
}
