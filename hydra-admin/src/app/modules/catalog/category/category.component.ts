import { Component, OnInit, Inject } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CategoryModel,
              public categoryService: CategoryService) {}

  ngOnInit(): void {
  }

  onSave(){
    this.categoryService.save(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
