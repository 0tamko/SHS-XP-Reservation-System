import {Injectable} from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

export class MessageService {

    constructor(
      private snackBar: MatSnackBar
    ) 
    {}
  
    public message(msg: string) {
      this.snackBar.open(msg, 'Close', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "top",
      })
    }

  }